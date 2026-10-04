/* Auto-generated Git DAG Data */
window.GIT_DAG_DATA = {
  "repo": "n8n-git-ui-main",
  "head_branch": "main",
  "head_commit": "8b834d55a8bf396b1f704b8062e0adb52c5ec99e",
  "master_y": 780.0,
  "generated_at": "2026-10-04T22:47:47.517704",
  "status": {
    "is_dirty": true,
    "dirty_count": 1,
    "changes": [
      "M git_data.js"
    ]
  },
  "branches": [
    {
      "name": "feature/login",
      "hash": "6962beed5bd9e9e5bb55385e06da0fc7b4a0ef92",
      "short_hash": "6962bee",
      "is_head": false,
      "is_merged_to_master": false,
      "lane": 1
    },
    {
      "name": "main",
      "hash": "8b834d55a8bf396b1f704b8062e0adb52c5ec99e",
      "short_hash": "8b834d5",
      "is_head": true,
      "is_merged_to_master": true,
      "lane": 0
    },
    {
      "name": "origin",
      "hash": "8b834d55a8bf396b1f704b8062e0adb52c5ec99e",
      "short_hash": "8b834d5",
      "is_head": false,
      "is_merged_to_master": false,
      "lane": 0
    }
  ],
  "stats": {
    "total_commits": 15,
    "total_branches": 3,
    "total_lanes": 2
  },
  "nodes": [
    {
      "id": "3c3ff2cb2c052a155f31cec279ce8a17ed0a8344",
      "hash": "3c3ff2cb2c052a155f31cec279ce8a17ed0a8344",
      "short_hash": "3c3ff2c",
      "short_id": "3c3ff2c",
      "title": "feat: initial commit of n8n Git Control Center",
      "subject": "feat: initial commit of n8n Git Control Center",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T17:38:04+07:00",
      "branches": [],
      "tags": [],
      "parents": [],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 80,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "6962beed5bd9e9e5bb55385e06da0fc7b4a0ef92",
      "hash": "6962beed5bd9e9e5bb55385e06da0fc7b4a0ef92",
      "short_hash": "6962bee",
      "short_id": "6962bee",
      "title": "feat: setup login UI component",
      "subject": "feat: setup login UI component",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T17:38:17+07:00",
      "branches": [
        "feature/login"
      ],
      "tags": [],
      "parents": [
        "3c3ff2cb2c052a155f31cec279ce8a17ed0a8344"
      ],
      "lane": 1,
      "lane_name": "feature/login",
      "lane_color": "#10b981",
      "x": 465,
      "y": 944,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "0b6de8c4815ad53def0b4cd498ac17e448685447",
      "hash": "0b6de8c4815ad53def0b4cd498ac17e448685447",
      "short_hash": "0b6de8c",
      "short_id": "0b6de8c",
      "title": "feat: initial commit of n8n Git Control Center Desktop App",
      "subject": "feat: initial commit of n8n Git Control Center Desktop App",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T17:49:57+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "3c3ff2cb2c052a155f31cec279ce8a17ed0a8344"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 850,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "9189224efee78555caf7b56ba50d5fc7925c77cb",
      "hash": "9189224efee78555caf7b56ba50d5fc7925c77cb",
      "short_hash": "9189224",
      "short_id": "9189224",
      "title": "feat: add 1-click Publish to GitHub feature directly from UI",
      "subject": "feat: add 1-click Publish to GitHub feature directly from UI",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T17:51:04+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "0b6de8c4815ad53def0b4cd498ac17e448685447"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 1235,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "1de0b9ea911c7df1a782f2afe703aa398bed5add",
      "hash": "1de0b9ea911c7df1a782f2afe703aa398bed5add",
      "short_hash": "1de0b9e",
      "short_id": "1de0b9e",
      "title": "perf: optimize DAG generation by loading diffs on-demand and improve watcher debounce",
      "subject": "perf: optimize DAG generation by loading diffs on-demand and improve watcher debounce",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T21:52:09+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "9189224efee78555caf7b56ba50d5fc7925c77cb"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 1620,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "9ca96f63f348cec55c6a8960540918e5801e1494",
      "hash": "9ca96f63f348cec55c6a8960540918e5801e1494",
      "short_hash": "9ca96f6",
      "short_id": "9ca96f6",
      "title": "fix(ci): disable implicit publishing and provide GH_TOKEN in electron-builder workflow",
      "subject": "fix(ci): disable implicit publishing and provide GH_TOKEN in electron-builder workflow",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T21:53:10+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "1de0b9ea911c7df1a782f2afe703aa398bed5add"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 2005,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "b973dc707bd9c03957bd0fa2eb23fb7d69983fdf",
      "hash": "b973dc707bd9c03957bd0fa2eb23fb7d69983fdf",
      "short_hash": "b973dc7",
      "short_id": "b973dc7",
      "title": "fix(ci): use --publish never flag for electron-builder",
      "subject": "fix(ci): use --publish never flag for electron-builder",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T21:54:29+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "9ca96f63f348cec55c6a8960540918e5801e1494"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 2390,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "1dafec1f3556512fd26e2e354023be652c307811",
      "hash": "1dafec1f3556512fd26e2e354023be652c307811",
      "short_hash": "1dafec1",
      "short_id": "1dafec1",
      "title": "feat: add Projects Control Hub with real-time sync status and smart auto-ignore guard",
      "subject": "feat: add Projects Control Hub with real-time sync status and smart auto-ignore guard",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T22:06:57+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "b973dc707bd9c03957bd0fa2eb23fb7d69983fdf"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 2775,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "83b20951ea5eca2bfa3e0b7ebf0e43be5f6678a9",
      "hash": "83b20951ea5eca2bfa3e0b7ebf0e43be5f6678a9",
      "short_hash": "83b2095",
      "short_id": "83b2095",
      "title": "fix: resolve undefined commit titles and support remote tracking branch commits",
      "subject": "fix: resolve undefined commit titles and support remote tracking branch commits",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T22:19:44+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "1dafec1f3556512fd26e2e354023be652c307811"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 3160,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "c2a1661c778a9d56f234320bac7afc67fc45ee5b",
      "hash": "c2a1661c778a9d56f234320bac7afc67fc45ee5b",
      "short_hash": "c2a1661",
      "short_id": "c2a1661",
      "title": "feat: add 1-click Open Folder and Open Editor (Cursor/VS Code) shortcuts",
      "subject": "feat: add 1-click Open Folder and Open Editor (Cursor/VS Code) shortcuts",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T22:24:48+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "83b20951ea5eca2bfa3e0b7ebf0e43be5f6678a9"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 3545,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "8db7de23b58aaeb7a8f65f633e25265ab9488a0c",
      "hash": "8db7de23b58aaeb7a8f65f633e25265ab9488a0c",
      "short_hash": "8db7de2",
      "short_id": "8db7de2",
      "title": "feat: add automatic cloud updates handshake alert and smooth UI transitions",
      "subject": "feat: add automatic cloud updates handshake alert and smooth UI transitions",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T22:27:01+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "c2a1661c778a9d56f234320bac7afc67fc45ee5b"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 3930,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "ec9a038a958e8693078f4208d83f747acc3fd5bf",
      "hash": "ec9a038a958e8693078f4208d83f747acc3fd5bf",
      "short_hash": "ec9a038",
      "short_id": "ec9a038",
      "title": "fix: ensure DAG nodes render properly and add null safety for header elements",
      "subject": "fix: ensure DAG nodes render properly and add null safety for header elements",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T22:35:45+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "8db7de23b58aaeb7a8f65f633e25265ab9488a0c"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 4315,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "6c28d62f6736b83978728ed23a9e30af43d9a45e",
      "hash": "6c28d62f6736b83978728ed23a9e30af43d9a45e",
      "short_hash": "6c28d62",
      "short_id": "6c28d62",
      "title": "chore: update DAG data cache with latest commit",
      "subject": "chore: update DAG data cache with latest commit",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T22:35:57+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "ec9a038a958e8693078f4208d83f747acc3fd5bf"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 4700,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "8b834d55a8bf396b1f704b8062e0adb52c5ec99e",
      "hash": "8b834d55a8bf396b1f704b8062e0adb52c5ec99e",
      "short_hash": "8b834d5",
      "short_id": "8b834d5",
      "title": "feat(ui): refactor to professional developer-grade n8n/Linear theme, removing AI tropes and adding hotkeys",
      "subject": "feat(ui): refactor to professional developer-grade n8n/Linear theme, removing AI tropes and adding hotkeys",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T22:47:37+07:00",
      "branches": [
        "main",
        "origin"
      ],
      "tags": [],
      "parents": [
        "6c28d62f6736b83978728ed23a9e30af43d9a45e"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 5085,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "head"
    },
    {
      "id": "active-wip",
      "hash": "active-wip",
      "short_hash": "WIP",
      "short_id": "WIP",
      "title": "Working Tree (1 uncommitted changes)",
      "subject": "Working Tree (1 uncommitted changes)",
      "author": "Local Working Directory",
      "author_full": "Local Working Directory",
      "date": "2026-10-04T22:47:45.822113",
      "branches": [
        "main"
      ],
      "tags": [],
      "parents": [
        "8b834d55a8bf396b1f704b8062e0adb52c5ec99e"
      ],
      "lane": 0,
      "lane_name": "main (WIP) (WIP)",
      "lane_color": "#06b6d4",
      "x": 5470,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "wip"
    }
  ],
  "edges": [
    {
      "id": "e-3c3ff2c-6962bee",
      "from": "3c3ff2cb2c052a155f31cec279ce8a17ed0a8344",
      "to": "6962beed5bd9e9e5bb55385e06da0fc7b4a0ef92",
      "type": "branch_out",
      "is_to_master": false,
      "color": "#10b981",
      "label": "BRANCH: login",
      "svg_path": "M 380 780.0 C 425 780.0, 420 988.0, 465 988.0"
    },
    {
      "id": "e-3c3ff2c-0b6de8c",
      "from": "3c3ff2cb2c052a155f31cec279ce8a17ed0a8344",
      "to": "0b6de8c4815ad53def0b4cd498ac17e448685447",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 380 780.0 L 850 780.0"
    },
    {
      "id": "e-0b6de8c-9189224",
      "from": "0b6de8c4815ad53def0b4cd498ac17e448685447",
      "to": "9189224efee78555caf7b56ba50d5fc7925c77cb",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 1150 780.0 L 1235 780.0"
    },
    {
      "id": "e-9189224-1de0b9e",
      "from": "9189224efee78555caf7b56ba50d5fc7925c77cb",
      "to": "1de0b9ea911c7df1a782f2afe703aa398bed5add",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 1535 780.0 L 1620 780.0"
    },
    {
      "id": "e-1de0b9e-9ca96f6",
      "from": "1de0b9ea911c7df1a782f2afe703aa398bed5add",
      "to": "9ca96f63f348cec55c6a8960540918e5801e1494",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 1920 780.0 L 2005 780.0"
    },
    {
      "id": "e-9ca96f6-b973dc7",
      "from": "9ca96f63f348cec55c6a8960540918e5801e1494",
      "to": "b973dc707bd9c03957bd0fa2eb23fb7d69983fdf",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 2305 780.0 L 2390 780.0"
    },
    {
      "id": "e-b973dc7-1dafec1",
      "from": "b973dc707bd9c03957bd0fa2eb23fb7d69983fdf",
      "to": "1dafec1f3556512fd26e2e354023be652c307811",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 2690 780.0 L 2775 780.0"
    },
    {
      "id": "e-1dafec1-83b2095",
      "from": "1dafec1f3556512fd26e2e354023be652c307811",
      "to": "83b20951ea5eca2bfa3e0b7ebf0e43be5f6678a9",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 3075 780.0 L 3160 780.0"
    },
    {
      "id": "e-83b2095-c2a1661",
      "from": "83b20951ea5eca2bfa3e0b7ebf0e43be5f6678a9",
      "to": "c2a1661c778a9d56f234320bac7afc67fc45ee5b",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 3460 780.0 L 3545 780.0"
    },
    {
      "id": "e-c2a1661-8db7de2",
      "from": "c2a1661c778a9d56f234320bac7afc67fc45ee5b",
      "to": "8db7de23b58aaeb7a8f65f633e25265ab9488a0c",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 3845 780.0 L 3930 780.0"
    },
    {
      "id": "e-8db7de2-ec9a038",
      "from": "8db7de23b58aaeb7a8f65f633e25265ab9488a0c",
      "to": "ec9a038a958e8693078f4208d83f747acc3fd5bf",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 4230 780.0 L 4315 780.0"
    },
    {
      "id": "e-ec9a038-6c28d62",
      "from": "ec9a038a958e8693078f4208d83f747acc3fd5bf",
      "to": "6c28d62f6736b83978728ed23a9e30af43d9a45e",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 4615 780.0 L 4700 780.0"
    },
    {
      "id": "e-6c28d62-8b834d5",
      "from": "6c28d62f6736b83978728ed23a9e30af43d9a45e",
      "to": "8b834d55a8bf396b1f704b8062e0adb52c5ec99e",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 5000 780.0 L 5085 780.0"
    },
    {
      "id": "e-active-wip",
      "from": "8b834d55a8bf396b1f704b8062e0adb52c5ec99e",
      "to": "active-wip",
      "type": "wip",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "UNCOMMITTED WORK",
      "svg_path": "M 5385 780.0 L 5470 780.0"
    }
  ],
  "diffs": {
    "3c3ff2cb2c052a155f31cec279ce8a17ed0a8344": {
      "files": [
        {
          "status": "A",
          "path": ".github/workflows/build-desktop.yml"
        },
        {
          "status": "A",
          "path": ".gitignore"
        },
        {
          "status": "A",
          "path": "LICENSE"
        },
        {
          "status": "A",
          "path": "README.md"
        },
        {
          "status": "A",
          "path": "generate_dag.py"
        },
        {
          "status": "A",
          "path": "git_data.js"
        },
        {
          "status": "A",
          "path": "index.html"
        },
        {
          "status": "A",
          "path": "main.js"
        },
        {
          "status": "A",
          "path": "open_app.bat"
        },
        {
          "status": "A",
          "path": "open_ui.bat"
        },
        {
          "status": "A",
          "path": "package-lock.json"
        },
        {
          "status": "A",
          "path": "package.json"
        },
        {
          "status": "A",
          "path": "preload.js"
        },
        {
          "status": "A",
          "path": "screenshot.png"
        },
        {
          "status": "A",
          "path": "update_graph.bat"
        }
      ],
      "full_output": "commit 3c3ff2cb2c052a155f31cec279ce8a17ed0a8344\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 17:38:04 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 17:38:04 2026 +0700\n\n    feat: initial commit of n8n Git Control Center\n"
    },
    "6962beed5bd9e9e5bb55385e06da0fc7b4a0ef92": {
      "files": [],
      "full_output": "commit 6962beed5bd9e9e5bb55385e06da0fc7b4a0ef92\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 17:38:17 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 17:38:17 2026 +0700\n\n    feat: setup login UI component\n"
    },
    "0b6de8c4815ad53def0b4cd498ac17e448685447": {
      "files": [
        {
          "status": "D",
          "path": ".github/workflows/build-desktop.yml"
        }
      ],
      "full_output": "commit 0b6de8c4815ad53def0b4cd498ac17e448685447\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 17:49:57 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 17:49:57 2026 +0700\n\n    feat: initial commit of n8n Git Control Center Desktop App\n"
    },
    "9189224efee78555caf7b56ba50d5fc7925c77cb": {
      "files": [
        {
          "status": "A",
          "path": ".github/workflows/build-desktop.yml"
        },
        {
          "status": "M",
          "path": "git_data.js"
        },
        {
          "status": "M",
          "path": "index.html"
        },
        {
          "status": "M",
          "path": "main.js"
        },
        {
          "status": "M",
          "path": "preload.js"
        }
      ],
      "full_output": "commit 9189224efee78555caf7b56ba50d5fc7925c77cb\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 17:51:04 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 17:51:04 2026 +0700\n\n    feat: add 1-click Publish to GitHub feature directly from UI\n"
    },
    "1de0b9ea911c7df1a782f2afe703aa398bed5add": {
      "files": [
        {
          "status": "M",
          "path": "generate_dag.py"
        },
        {
          "status": "M",
          "path": "index.html"
        },
        {
          "status": "M",
          "path": "main.js"
        },
        {
          "status": "M",
          "path": "preload.js"
        }
      ],
      "full_output": "commit 1de0b9ea911c7df1a782f2afe703aa398bed5add\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 21:52:09 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 21:52:09 2026 +0700\n\n    perf: optimize DAG generation by loading diffs on-demand and improve watcher debounce\n"
    },
    "9ca96f63f348cec55c6a8960540918e5801e1494": {
      "files": [
        {
          "status": "M",
          "path": ".github/workflows/build-desktop.yml"
        },
        {
          "status": "M",
          "path": "package.json"
        }
      ],
      "full_output": "commit 9ca96f63f348cec55c6a8960540918e5801e1494\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 21:53:10 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 21:53:10 2026 +0700\n\n    fix(ci): disable implicit publishing and provide GH_TOKEN in electron-builder workflow\n"
    },
    "b973dc707bd9c03957bd0fa2eb23fb7d69983fdf": {
      "files": [
        {
          "status": "M",
          "path": ".github/workflows/build-desktop.yml"
        }
      ],
      "full_output": "commit b973dc707bd9c03957bd0fa2eb23fb7d69983fdf\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 21:54:29 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 21:54:29 2026 +0700\n\n    fix(ci): use --publish never flag for electron-builder\n"
    },
    "1dafec1f3556512fd26e2e354023be652c307811": {
      "files": [
        {
          "status": "M",
          "path": "index.html"
        },
        {
          "status": "M",
          "path": "main.js"
        },
        {
          "status": "M",
          "path": "preload.js"
        }
      ],
      "full_output": "commit 1dafec1f3556512fd26e2e354023be652c307811\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 22:06:57 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 22:06:57 2026 +0700\n\n    feat: add Projects Control Hub with real-time sync status and smart auto-ignore guard\n"
    },
    "83b20951ea5eca2bfa3e0b7ebf0e43be5f6678a9": {
      "files": [
        {
          "status": "M",
          "path": "generate_dag.py"
        },
        {
          "status": "M",
          "path": "index.html"
        }
      ],
      "full_output": "commit 83b20951ea5eca2bfa3e0b7ebf0e43be5f6678a9\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 22:19:44 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 22:19:44 2026 +0700\n\n    fix: resolve undefined commit titles and support remote tracking branch commits\n"
    },
    "c2a1661c778a9d56f234320bac7afc67fc45ee5b": {
      "files": [
        {
          "status": "M",
          "path": "index.html"
        },
        {
          "status": "M",
          "path": "main.js"
        },
        {
          "status": "M",
          "path": "preload.js"
        }
      ],
      "full_output": "commit c2a1661c778a9d56f234320bac7afc67fc45ee5b\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 22:24:48 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 22:24:48 2026 +0700\n\n    feat: add 1-click Open Folder and Open Editor (Cursor/VS Code) shortcuts\n"
    },
    "8db7de23b58aaeb7a8f65f633e25265ab9488a0c": {
      "files": [
        {
          "status": "M",
          "path": "index.html"
        },
        {
          "status": "M",
          "path": "main.js"
        },
        {
          "status": "M",
          "path": "preload.js"
        }
      ],
      "full_output": "commit 8db7de23b58aaeb7a8f65f633e25265ab9488a0c\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 22:27:01 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 22:27:01 2026 +0700\n\n    feat: add automatic cloud updates handshake alert and smooth UI transitions\n"
    },
    "ec9a038a958e8693078f4208d83f747acc3fd5bf": {
      "files": [
        {
          "status": "M",
          "path": "git_data.js"
        },
        {
          "status": "M",
          "path": "index.html"
        }
      ],
      "full_output": "commit ec9a038a958e8693078f4208d83f747acc3fd5bf\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 22:35:45 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 22:35:45 2026 +0700\n\n    fix: ensure DAG nodes render properly and add null safety for header elements\n"
    },
    "6c28d62f6736b83978728ed23a9e30af43d9a45e": {
      "files": [
        {
          "status": "M",
          "path": "git_data.js"
        }
      ],
      "full_output": "commit 6c28d62f6736b83978728ed23a9e30af43d9a45e\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 22:35:57 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 22:35:57 2026 +0700\n\n    chore: update DAG data cache with latest commit\n"
    },
    "8b834d55a8bf396b1f704b8062e0adb52c5ec99e": {
      "files": [
        {
          "status": "M",
          "path": "git_data.js"
        },
        {
          "status": "M",
          "path": "index.html"
        }
      ],
      "full_output": "commit 8b834d55a8bf396b1f704b8062e0adb52c5ec99e\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 22:47:37 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 22:47:37 2026 +0700\n\n    feat(ui): refactor to professional developer-grade n8n/Linear theme, removing AI tropes and adding hotkeys\n"
    },
    "active-wip": {
      "files": [
        {
          "status": "M",
          "path": "git_data.js"
        }
      ],
      "full_output": " git_data.js | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)\n"
    }
  }
};
