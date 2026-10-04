const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const { execFile } = require('child_process');

if (process.platform === 'darwin') {
  const extraPaths = ['/opt/homebrew/bin', '/usr/local/bin', '/usr/bin', '/bin'];
  process.env.PATH = `${extraPaths.join(':')}:${process.env.PATH || ''}`;
}

let mainWindow = null;
let activeWatcher = null;
let watcherDebounceTimer = null;

function getConfigPath() {
  return path.join(app.getPath('userData'), 'n8n_git_projects.json');
}
const GENERATE_SCRIPT = path.join(__dirname, 'generate_dag.py');
const GIT_DATA_JS = path.join(__dirname, 'git_data.js');

// -------------------------------------------------------------
// Helper: Config Persistence
// -------------------------------------------------------------
function loadConfig() {
  const configFile = getConfigPath();
  try {
    if (fs.existsSync(configFile)) {
      const raw = fs.readFileSync(configFile, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load config:', e);
  }

  // Initial default: try to detect current or parent git repo
  let defaultPath = __dirname;
  const parent1 = path.resolve(__dirname, '..');
  const parent2 = path.resolve(__dirname, '..', '..');
  if (fs.existsSync(path.join(defaultPath, '.git'))) {
    // current dir is repo
  } else if (fs.existsSync(path.join(parent1, '.git'))) {
    defaultPath = parent1;
  } else if (fs.existsSync(path.join(parent2, '.git'))) {
    defaultPath = parent2;
  }

  const initial = {
    projects: fs.existsSync(path.join(defaultPath, '.git'))
      ? [{ id: 'proj-default', name: path.basename(defaultPath), path: defaultPath, lastOpened: Date.now() }]
      : [],
    activePath: fs.existsSync(path.join(defaultPath, '.git')) ? defaultPath : ''
  };
  saveConfig(initial);
  return initial;
}

function saveConfig(cfg) {
  const configFile = getConfigPath();
  try {
    fs.mkdirSync(path.dirname(configFile), { recursive: true });
    fs.writeFileSync(configFile, JSON.stringify(cfg, null, 2), 'utf-8');
  } catch (e) {
    console.error('Failed to save config:', e);
  }
}

// -------------------------------------------------------------
// Helper: Git CLI Runner
// -------------------------------------------------------------
function runGit(args, cwd) {
  return new Promise((resolve) => {
    if (!cwd || !fs.existsSync(cwd)) {
      return resolve({ ok: false, error: 'Directory does not exist' });
    }
    execFile(
      'git',
      ['-c', 'core.quotepath=false', ...args],
      { cwd, maxBuffer: 15 * 1024 * 1024, encoding: 'utf8', windowsHide: true },
      (error, stdout, stderr) => {
        if (error) {
          resolve({ ok: false, error: (stderr || error.message).trim(), stdout: (stdout || '').trim() });
        } else {
          resolve({ ok: true, stdout: (stdout || '').trim(), stderr: (stderr || '').trim() });
        }
      }
    );
  });
}

// -------------------------------------------------------------
// Helper: Run Python DAG Generator & Parse Result
// -------------------------------------------------------------
function runGenerateDag(repoPath) {
  return new Promise((resolve) => {
    if (!repoPath || !fs.existsSync(repoPath)) {
      return resolve({ ok: false, error: 'Repo path not found' });
    }

    execFile(
      'python',
      [GENERATE_SCRIPT, repoPath],
      { cwd: __dirname, maxBuffer: 20 * 1024 * 1024, encoding: 'utf8', windowsHide: true },
      (error, stdout, stderr) => {
        if (error) {
          console.error('Generate DAG error:', stderr || error.message);
          return resolve({ ok: false, error: stderr || error.message });
        }

        try {
          if (fs.existsSync(GIT_DATA_JS)) {
            const content = fs.readFileSync(GIT_DATA_JS, 'utf-8');
            const match = content.match(/window\.GIT_DAG_DATA\s*=\s*(\{[\s\S]*\});?\s*$/);
            if (match && match[1]) {
              const parsed = JSON.parse(match[1]);
              return resolve({ ok: true, data: parsed });
            }
          }
          resolve({ ok: false, error: 'Could not parse git_data.js' });
        } catch (parseErr) {
          resolve({ ok: false, error: parseErr.message });
        }
      }
    );
  });
}

// -------------------------------------------------------------
// Helper: File Watcher for Real-time DAG Updates
// -------------------------------------------------------------
function watchRepo(repoPath) {
  if (activeWatcher) {
    try { activeWatcher.close(); } catch (e) {}
    activeWatcher = null;
  }

  if (!repoPath || !fs.existsSync(repoPath)) return;

  try {
    // Watch repo directory recursively
    activeWatcher = fs.watch(repoPath, { recursive: true }, (eventType, filename) => {
      if (!filename) return;
      // Ignore git internal pack files or node_modules churn
      if (
        filename.includes('node_modules') ||
        filename.includes('.git\\objects') ||
        filename.includes('.git/objects') ||
        filename.includes('.git\\index.lock') ||
        filename.includes('git_data.js') ||
        filename.endsWith('.tmp') ||
        filename.endsWith('.log')
      ) {
        return;
      }

      if (watcherDebounceTimer) clearTimeout(watcherDebounceTimer);
      watcherDebounceTimer = setTimeout(async () => {
        const res = await runGenerateDag(repoPath);
        if (res.ok && mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('dag:updated', res.data);
        }
      }, 1500);
    });
  } catch (err) {
    console.warn('Watch repo failed:', err.message);
  }
}

// -------------------------------------------------------------
// Electron Window Creation
// -------------------------------------------------------------
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 700,
    title: 'n8n Git Control Center',
    backgroundColor: '#121419',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile('index.html');

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  const cfg = loadConfig();
  if (cfg.activePath) {
    watchRepo(cfg.activePath);
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// -------------------------------------------------------------
// Helper: Fast Project Status Check
// -------------------------------------------------------------
async function checkProjectStatus(repoPath) {
  if (!repoPath || !fs.existsSync(repoPath)) {
    return { exists: false, isDirty: false, dirtyCount: 0, branch: '', hasRemote: false };
  }
  const branchRes = await runGit(['branch', '--show-current'], repoPath);
  const statusRes = await runGit(['status', '--porcelain'], repoPath);
  const remoteRes = await runGit(['remote', 'get-url', 'origin'], repoPath);

  const dirtyLines = statusRes.ok ? statusRes.stdout.split('\n').filter(Boolean) : [];
  return {
    exists: true,
    branch: branchRes.stdout || 'main',
    isDirty: dirtyLines.length > 0,
    dirtyCount: dirtyLines.length,
    hasRemote: remoteRes.ok && Boolean(remoteRes.stdout),
    remoteUrl: remoteRes.stdout || ''
  };
}

// -------------------------------------------------------------
// IPC Handlers: Projects Management
// -------------------------------------------------------------
ipcMain.handle('projects:get', () => {
  return loadConfig();
});

ipcMain.handle('projects:getStatuses', async () => {
  const cfg = loadConfig();
  const statuses = {};
  for (const p of cfg.projects) {
    statuses[p.path] = await checkProjectStatus(p.path);
  }
  return statuses;
});

ipcMain.handle('projects:add', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: 'เลือกโฟลเดอร์ Git Repository',
    properties: ['openDirectory']
  });

  if (result.canceled || !result.filePaths.length) {
    return { canceled: true };
  }

  const selectedPath = result.filePaths[0];
  const gitDir = path.join(selectedPath, '.git');
  if (!fs.existsSync(gitDir)) {
    return { ok: false, error: 'โฟลเดอร์นี้ไม่ใช่ Git Repository (ไม่พบโฟลเดอร์ .git)' };
  }

  // Smart Auto-Ignore Guard: generate default .gitignore if none exists or ensure essentials are ignored
  try {
    const gitignorePath = path.join(selectedPath, '.gitignore');
    const essentialIgnores = [
      'node_modules/',
      '.env',
      '*.env',
      'dist/',
      'build/',
      '*.log',
      '*.tmp',
      '.DS_Store',
      'Thumbs.db'
    ];
    if (!fs.existsSync(gitignorePath)) {
      fs.writeFileSync(gitignorePath, essentialIgnores.join('\n') + '\n', 'utf-8');
    } else {
      let existingContent = fs.readFileSync(gitignorePath, 'utf-8');
      let appended = [];
      essentialIgnores.forEach((item) => {
        if (!existingContent.includes(item)) {
          appended.push(item);
        }
      });
      if (appended.length > 0) {
        fs.appendFileSync(gitignorePath, '\n# Auto-protected ignores\n' + appended.join('\n') + '\n', 'utf-8');
      }
    }
  } catch (ignErr) {
    console.warn('Smart gitignore guard notice:', ignErr.message);
  }

  const cfg = loadConfig();
  const existing = cfg.projects.find((p) => p.path === selectedPath);
  if (!existing) {
    cfg.projects.push({
      id: 'proj-' + Date.now(),
      name: path.basename(selectedPath),
      path: selectedPath,
      lastOpened: Date.now()
    });
  }
  cfg.activePath = selectedPath;
  saveConfig(cfg);

  watchRepo(selectedPath);
  const dagRes = await runGenerateDag(selectedPath);

  return { ok: true, activePath: selectedPath, projects: cfg.projects, dagData: dagRes.data };
});

ipcMain.handle('projects:clone', async (_event, { repoUrl, customFolder } = {}) => {
  if (!repoUrl || !repoUrl.trim()) {
    return { ok: false, error: 'กรุณาระบุ URL ของ GitHub Repository' };
  }

  let cleanUrl = repoUrl.trim();
  // Support shorthand "username/repo" or "repo"
  if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://') && !cleanUrl.startsWith('git@')) {
    if (cleanUrl.includes('/')) {
      cleanUrl = `https://github.com/${cleanUrl}.git`;
    } else {
      cleanUrl = `https://github.com/TheMangKung/${cleanUrl}.git`;
    }
  }

  // Derive repo name
  const repoNameMatch = cleanUrl.match(/\/([^\/]+?)(\.git)?$/);
  const repoName = repoNameMatch ? repoNameMatch[1] : 'cloned-repo';

  // Ask user to pick parent directory where repo will be cloned
  const result = await dialog.showOpenDialog(mainWindow, {
    title: `เลือกโฟลเดอร์สำหรับดาวน์โหลด ${repoName}`,
    properties: ['openDirectory']
  });

  if (result.canceled || !result.filePaths.length) {
    return { canceled: true };
  }

  const parentDir = result.filePaths[0];
  const targetDir = path.join(parentDir, customFolder || repoName);

  if (fs.existsSync(targetDir)) {
    return { ok: false, error: `โฟลเดอร์ "${targetDir}" มีอยู่แล้วในเครื่อง กรุณาเลือกโฟลเดอร์อื่นหรือลบโฟลเดอร์เดิมออกก่อน` };
  }

  return new Promise((resolve) => {
    execFile(
      'git',
      ['clone', cleanUrl, targetDir],
      { maxBuffer: 50 * 1024 * 1024, encoding: 'utf8', windowsHide: true },
      async (err, stdout, stderr) => {
        if (err) {
          return resolve({ ok: false, error: `Clone ล้มเหลว: ${(stderr || err.message).trim()}` });
        }

        // Add to config
        const cfg = loadConfig();
        const existing = cfg.projects.find((p) => p.path === targetDir);
        if (!existing) {
          cfg.projects.push({
            id: 'proj-' + Date.now(),
            name: repoName,
            path: targetDir,
            lastOpened: Date.now()
          });
        }
        cfg.activePath = targetDir;
        saveConfig(cfg);

        watchRepo(targetDir);
        const dagRes = await runGenerateDag(targetDir);

        resolve({
          ok: true,
          repoName,
          activePath: targetDir,
          projects: cfg.projects,
          dagData: dagRes.data,
          hasPackageJson: fs.existsSync(path.join(targetDir, 'package.json'))
        });
      }
    );
  });
});

ipcMain.handle('projects:switch', async (_event, targetPath) => {
  const cfg = loadConfig();
  if (!fs.existsSync(targetPath)) {
    return { ok: false, error: 'ไม่พบโฟลเดอร์โปรเจกต์นี้ในเครื่อง' };
  }

  cfg.activePath = targetPath;
  const p = cfg.projects.find((x) => x.path === targetPath);
  if (p) p.lastOpened = Date.now();
  saveConfig(cfg);

  watchRepo(targetPath);
  const dagRes = await runGenerateDag(targetPath);

  return { ok: true, activePath: targetPath, projects: cfg.projects, dagData: dagRes.data };
});

ipcMain.handle('projects:remove', async (_event, targetPath) => {
  const cfg = loadConfig();
  cfg.projects = cfg.projects.filter((p) => p.path !== targetPath);
  if (cfg.activePath === targetPath) {
    cfg.activePath = cfg.projects.length ? cfg.projects[0].path : '';
  }
  saveConfig(cfg);

  if (cfg.activePath) {
    watchRepo(cfg.activePath);
    const dagRes = await runGenerateDag(cfg.activePath);
    return { ok: true, activePath: cfg.activePath, projects: cfg.projects, dagData: dagRes.data };
  }
  return { ok: true, activePath: '', projects: cfg.projects, dagData: null };
});

// -------------------------------------------------------------
// IPC Handlers: Git Actions
// -------------------------------------------------------------
ipcMain.handle('git:getRemoteInfo', async () => {
  const cfg = loadConfig();
  const repo = cfg.activePath;
  if (!repo || !fs.existsSync(repo)) {
    return { ok: false, error: 'No active repository' };
  }

  const branchRes = await runGit(['branch', '--show-current'], repo);
  const branch = branchRes.ok ? branchRes.stdout : 'DETACHED';

  const remoteRes = await runGit(['remote', 'get-url', 'origin'], repo);
  const remoteUrl = remoteRes.ok ? remoteRes.stdout : '';

  const statusRes = await runGit(['status', '--porcelain'], repo);
  const dirtyLines = statusRes.ok ? statusRes.stdout.split('\n').filter(Boolean) : [];

  return {
    ok: true,
    repoName: path.basename(repo),
    repoPath: repo,
    branch,
    remoteUrl,
    hasRemote: Boolean(remoteUrl),
    isDirty: dirtyLines.length > 0,
    dirtyCount: dirtyLines.length
  };
});

ipcMain.handle('git:checkCloudUpdates', async () => {
  const cfg = loadConfig();
  const repo = cfg.activePath;
  if (!repo || !fs.existsSync(repo)) return { ok: false, error: 'No active repository' };

  const remoteRes = await runGit(['remote'], repo);
  if (!remoteRes.stdout.includes('origin')) {
    return { ok: false, hasRemote: false };
  }

  const branchRes = await runGit(['branch', '--show-current'], repo);
  const branch = branchRes.stdout || 'main';

  // Fetch in background without blocking
  const fetchRes = await runGit(['fetch', 'origin', branch], repo);
  if (!fetchRes.ok) {
    return { ok: false, error: fetchRes.error };
  }

  // Check rev-list behind count
  const countRes = await runGit(['rev-list', '--count', `HEAD..origin/${branch}`], repo);
  const behindCount = parseInt(countRes.stdout, 10) || 0;

  if (behindCount > 0) {
    // Get latest remote commit info
    const lastCommitRes = await runGit(['log', '-1', '--format=%s (%cr)', `origin/${branch}`], repo);
    return {
      ok: true,
      hasUpdates: true,
      behindCount,
      branch,
      lastCommitInfo: lastCommitRes.stdout || ''
    };
  }

  return { ok: true, hasUpdates: false, behindCount: 0, branch };
});

ipcMain.handle('git:saveCheckpoint', async (_event, userMessage) => {
  const cfg = loadConfig();
  const repo = cfg.activePath;
  if (!repo || !fs.existsSync(repo)) {
    return { ok: false, error: 'No active repository selected' };
  }

  // 1. Stage all files
  const addRes = await runGit(['add', '-A'], repo);
  if (!addRes.ok) {
    return { ok: false, error: `Git Add failed: ${addRes.error}` };
  }

  // 2. Check if anything changed
  const diffCached = await runGit(['diff', '--cached', '--name-only'], repo);
  if (!diffCached.stdout) {
    return { ok: false, message: 'ไม่มีไฟล์ที่มีการเปลี่ยนแปลง (Working Tree สะอาดอยู่แล้ว)' };
  }

  // 3. Commit with timestamp & note
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const timeStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const note = userMessage && userMessage.trim() ? userMessage.trim() : 'Savepoint';
  const commitMsg = `Checkpoint: ${timeStr} - ${note}`;

  const commitRes = await runGit(['commit', '-m', commitMsg], repo);
  if (!commitRes.ok) {
    return { ok: false, error: `Git Commit failed: ${commitRes.error}` };
  }

  // 4. Try to push to remote origin
  const branchRes = await runGit(['branch', '--show-current'], repo);
  const branch = branchRes.stdout || 'main';

  const remoteRes = await runGit(['remote'], repo);
  let pushInfo = '';
  if (remoteRes.stdout.includes('origin')) {
    const pushRes = await runGit(['push', 'origin', branch], repo);
    if (!pushRes.ok) {
      pushInfo = ` (เซฟในเครื่องสำเร็จ แต่ Push ไม่ผ่าน: ${pushRes.error})`;
    } else {
      pushInfo = ' และ Push ขึ้น GitHub เรียบร้อยแล้ว! 🚀';
    }
  } else {
    pushInfo = ' (บันทึกในเครื่องเรียบร้อย - ยังไม่ได้ต่อ Remote GitHub)';
  }

  // 5. Refresh DAG
  const dagRes = await runGenerateDag(repo);
  if (dagRes.ok && mainWindow) {
    mainWindow.webContents.send('dag:updated', dagRes.data);
  }

  return {
    ok: true,
    message: `บันทึก Checkpoint สำเร็จ${pushInfo}`,
    dagData: dagRes.data
  };
});

ipcMain.handle('git:syncOverwrite', async () => {
  const cfg = loadConfig();
  const repo = cfg.activePath;
  if (!repo || !fs.existsSync(repo)) {
    return { ok: false, error: 'No active repository selected' };
  }

  const remoteRes = await runGit(['remote'], repo);
  if (!remoteRes.stdout.includes('origin')) {
    return { ok: false, error: 'โปรเจกต์นี้ยังไม่ได้เชื่อมต่อ Remote GitHub (origin)' };
  }

  // 1. Fetch
  const fetchRes = await runGit(['fetch', 'origin'], repo);
  if (!fetchRes.ok) {
    return { ok: false, error: `Fetch failed: ${fetchRes.error}` };
  }

  // 2. Identify current branch
  const branchRes = await runGit(['branch', '--show-current'], repo);
  const branch = branchRes.stdout || 'main';

  // 3. Reset hard to origin/branch
  const resetRes = await runGit(['reset', '--hard', `origin/${branch}`], repo);
  if (!resetRes.ok) {
    return { ok: false, error: `Reset failed: ${resetRes.error}` };
  }

  // 4. Clean any leftover untracked debris
  await runGit(['clean', '-fd'], repo);

  // 5. Refresh DAG
  const dagRes = await runGenerateDag(repo);
  if (dagRes.ok && mainWindow) {
    mainWindow.webContents.send('dag:updated', dagRes.data);
  }

  return {
    ok: true,
    message: `ดึงข้อมูลล่าสุดจาก origin/${branch} มาทับเรียบร้อยแล้ว! ✨`,
    dagData: dagRes.data
  };
});

ipcMain.handle('git:rollback', async (_event, commitHash) => {
  const cfg = loadConfig();
  const repo = cfg.activePath;
  if (!repo || !fs.existsSync(repo)) {
    return { ok: false, error: 'No active repository selected' };
  }
  if (!commitHash || commitHash === 'active-wip') {
    return { ok: false, error: 'ไม่สามารถย้อนไปยังโหนดนี้ได้' };
  }

  const resetRes = await runGit(['reset', '--hard', commitHash], repo);
  if (!resetRes.ok) {
    return { ok: false, error: `Rollback failed: ${resetRes.error}` };
  }

  const dagRes = await runGenerateDag(repo);
  if (dagRes.ok && mainWindow) {
    mainWindow.webContents.send('dag:updated', dagRes.data);
  }

  return {
    ok: true,
    message: `ย้อนกลับไปยัง Checkpoint [${commitHash.slice(0, 7)}] เรียบร้อยแล้ว! ⏪`,
    dagData: dagRes.data
  };
});

ipcMain.handle('git:publishToGitHub', async (_event, isPrivate = true) => {
  const cfg = loadConfig();
  const repo = cfg.activePath;
  if (!repo || !fs.existsSync(repo)) {
    return { ok: false, error: 'No active repository selected' };
  }

  const repoName = path.basename(repo);
  const ghCli = fs.existsSync('C:\\Program Files\\GitHub CLI\\gh.exe')
    ? 'C:\\Program Files\\GitHub CLI\\gh.exe'
    : 'gh';

  return new Promise((resolve) => {
    const visibilityFlag = isPrivate ? '--private' : '--public';
    execFile(
      ghCli,
      ['repo', 'create', repoName, visibilityFlag, `--source=${repo}`, '--remote=origin', '--push'],
      { cwd: repo, encoding: 'utf8', windowsHide: true },
      async (err, stdout, stderr) => {
        if (err) {
          resolve({ ok: false, error: stderr || err.message });
        } else {
          const dagRes = await runGenerateDag(repo);
          if (dagRes.ok && mainWindow) {
            mainWindow.webContents.send('dag:updated', dagRes.data);
          }
          resolve({
            ok: true,
            message: `สร้าง Repository [${repoName}] บน GitHub และ Push เรียบร้อยแล้ว! 🚀`,
            url: stdout.trim()
          });
        }
      }
    );
  });
});

ipcMain.handle('git:getFileDiff', async (_event, commitHash, filePath) => {
  const cfg = loadConfig();
  const repo = cfg.activePath;
  if (!repo || !fs.existsSync(repo)) return { ok: false, error: 'No active repo' };

  if (commitHash === 'active-wip' || commitHash === 'working-directory-wip') {
    const res = await runGit(['diff', 'HEAD', '--', filePath], repo);
    return { ok: true, diff: res.stdout || 'No changes in this file.' };
  } else {
    const res = await runGit(['show', commitHash, '--', filePath], repo);
    return { ok: true, diff: res.stdout || 'No changes in this file.' };
  }
});

// -------------------------------------------------------------
// Quick Launch Helpers (Open Folder & Open in Code/Cursor)
// -------------------------------------------------------------
ipcMain.handle('app:openFolder', async (_event, targetPath) => {
  const p = targetPath || loadConfig().activePath;
  if (!p || !fs.existsSync(p)) return { ok: false, error: 'Directory does not exist' };
  try {
    await shell.openPath(p);
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message };
  }
});

ipcMain.handle('app:openEditor', async (_event, targetPath) => {
  const p = targetPath || loadConfig().activePath;
  if (!p || !fs.existsSync(p)) return { ok: false, error: 'Directory does not exist' };

  // Detect whether Cursor or VS Code is available
  const { exec } = require('child_process');
  return new Promise((resolve) => {
    // Try Cursor first, then code
    exec(`cursor "${p}"`, (cursorErr) => {
      if (!cursorErr) {
        return resolve({ ok: true, app: 'Cursor' });
      }
      exec(`code "${p}"`, (codeErr) => {
        if (!codeErr) {
          return resolve({ ok: true, app: 'VS Code' });
        }
        // Fallback open folder if neither works
        shell.openPath(p);
        resolve({ ok: true, app: 'Explorer' });
      });
    });
  });
});

