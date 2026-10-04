/* Auto-generated Git DAG Data */
window.GIT_DAG_DATA = {
  "repo": "app",
  "head_branch": "main",
  "head_commit": "0a1d8306b90c54df497e265c4782619ff4c945b0",
  "master_y": 780.0,
  "generated_at": "2026-10-04T22:47:37.320513",
  "status": {
    "is_dirty": false,
    "dirty_count": 0,
    "changes": []
  },
  "branches": [
    {
      "name": "main",
      "hash": "0a1d8306b90c54df497e265c4782619ff4c945b0",
      "short_hash": "0a1d830",
      "is_head": true,
      "is_merged_to_master": true,
      "lane": 0
    },
    {
      "name": "origin",
      "hash": "0a1d8306b90c54df497e265c4782619ff4c945b0",
      "short_hash": "0a1d830",
      "is_head": false,
      "is_merged_to_master": false,
      "lane": 0
    }
  ],
  "stats": {
    "total_commits": 8,
    "total_branches": 2,
    "total_lanes": 1
  },
  "nodes": [
    {
      "id": "b20b87764c4bfae454249e13f7e37452dbee7f2f",
      "hash": "b20b87764c4bfae454249e13f7e37452dbee7f2f",
      "short_hash": "b20b877",
      "short_id": "b20b877",
      "title": "Initial commit of student check-in portal with dynamic titles and user management",
      "subject": "Initial commit of student check-in portal with dynamic titles and user management",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-07-16T18:45:33+07:00",
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
      "id": "8cc43feae17f9b36fe2bbac1525d8927b19c4547",
      "hash": "8cc43feae17f9b36fe2bbac1525d8927b19c4547",
      "short_hash": "8cc43fe",
      "short_id": "8cc43fe",
      "title": "Optimize check-in photo compression and support video cover uploads for activities",
      "subject": "Optimize check-in photo compression and support video cover uploads for activities",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-07-17T19:04:48+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "b20b87764c4bfae454249e13f7e37452dbee7f2f"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 465,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "normal"
    },
    {
      "id": "ef0a7950ce8505676d15060962d6555dad2aedcc",
      "hash": "ef0a7950ce8505676d15060962d6555dad2aedcc",
      "short_hash": "ef0a795",
      "short_id": "ef0a795",
      "title": "Restrict bypass time test mode checkbox to logged in admins only and add shortcut button on Dashboard",
      "subject": "Restrict bypass time test mode checkbox to logged in admins only and add shortcut button on Dashboard",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-07-17T19:13:22+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "8cc43feae17f9b36fe2bbac1525d8927b19c4547"
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
      "id": "57827938607c29a0b78a6d2da78c91e70943adb7",
      "hash": "57827938607c29a0b78a6d2da78c91e70943adb7",
      "short_hash": "5782793",
      "short_id": "5782793",
      "title": "Create dedicated /dashboard/test path for isolated admin test check-in form with integrated auth token verification",
      "subject": "Create dedicated /dashboard/test path for isolated admin test check-in form with integrated auth token verification",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-07-17T19:28:14+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "ef0a7950ce8505676d15060962d6555dad2aedcc"
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
      "id": "446f83c6792385440543902867d5c9b5ba6b72a5",
      "hash": "446f83c6792385440543902867d5c9b5ba6b72a5",
      "short_hash": "446f83c",
      "short_id": "446f83c",
      "title": "Fix token retrieval storage key using sessionStorage db_token and allow duplicates in test mode",
      "subject": "Fix token retrieval storage key using sessionStorage db_token and allow duplicates in test mode",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-07-17T19:34:10+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "57827938607c29a0b78a6d2da78c91e70943adb7"
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
      "id": "006b3eaa9842b95634d87adc66971eb1e657d05a",
      "hash": "006b3eaa9842b95634d87adc66971eb1e657d05a",
      "short_hash": "006b3ea",
      "short_id": "006b3ea",
      "title": "Implement bulk delete feature with checkboxes on student list table and backend bulk delete endpoint",
      "subject": "Implement bulk delete feature with checkboxes on student list table and backend bulk delete endpoint",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-07-17T19:47:53+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "446f83c6792385440543902867d5c9b5ba6b72a5"
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
      "id": "ea791f7b565ded44939ccef43909b8c39fefaf5a",
      "hash": "ea791f7b565ded44939ccef43909b8c39fefaf5a",
      "short_hash": "ea791f7",
      "short_id": "ea791f7",
      "title": "feat: checkpoint sync for Check-in (Sangjan Live Bar)",
      "subject": "feat: checkpoint sync for Check-in (Sangjan Live Bar)",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T17:56:43+07:00",
      "branches": [],
      "tags": [],
      "parents": [
        "006b3eaa9842b95634d87adc66971eb1e657d05a"
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
      "id": "0a1d8306b90c54df497e265c4782619ff4c945b0",
      "hash": "0a1d8306b90c54df497e265c4782619ff4c945b0",
      "short_hash": "0a1d830",
      "short_id": "0a1d830",
      "title": "chore: clean up repo, remove duplicate backup folders and non-essential assets from tracking",
      "subject": "chore: clean up repo, remove duplicate backup folders and non-essential assets from tracking",
      "author": "TheMangKung",
      "author_full": "TheMangKung <waesaref21245@gmail.com>",
      "date": "2026-10-04T18:00:00+07:00",
      "branches": [
        "main",
        "origin"
      ],
      "tags": [],
      "parents": [
        "ea791f7b565ded44939ccef43909b8c39fefaf5a"
      ],
      "lane": 0,
      "lane_name": "main",
      "lane_color": "#06b6d4",
      "x": 2775,
      "y": 736,
      "width": 300,
      "height": 88,
      "status": "head"
    }
  ],
  "edges": [
    {
      "id": "e-b20b877-8cc43fe",
      "from": "b20b87764c4bfae454249e13f7e37452dbee7f2f",
      "to": "8cc43feae17f9b36fe2bbac1525d8927b19c4547",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 380 780.0 L 465 780.0"
    },
    {
      "id": "e-8cc43fe-ef0a795",
      "from": "8cc43feae17f9b36fe2bbac1525d8927b19c4547",
      "to": "ef0a7950ce8505676d15060962d6555dad2aedcc",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 765 780.0 L 850 780.0"
    },
    {
      "id": "e-ef0a795-5782793",
      "from": "ef0a7950ce8505676d15060962d6555dad2aedcc",
      "to": "57827938607c29a0b78a6d2da78c91e70943adb7",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 1150 780.0 L 1235 780.0"
    },
    {
      "id": "e-5782793-446f83c",
      "from": "57827938607c29a0b78a6d2da78c91e70943adb7",
      "to": "446f83c6792385440543902867d5c9b5ba6b72a5",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 1535 780.0 L 1620 780.0"
    },
    {
      "id": "e-446f83c-006b3ea",
      "from": "446f83c6792385440543902867d5c9b5ba6b72a5",
      "to": "006b3eaa9842b95634d87adc66971eb1e657d05a",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 1920 780.0 L 2005 780.0"
    },
    {
      "id": "e-006b3ea-ea791f7",
      "from": "006b3eaa9842b95634d87adc66971eb1e657d05a",
      "to": "ea791f7b565ded44939ccef43909b8c39fefaf5a",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 2305 780.0 L 2390 780.0"
    },
    {
      "id": "e-ea791f7-0a1d830",
      "from": "ea791f7b565ded44939ccef43909b8c39fefaf5a",
      "to": "0a1d8306b90c54df497e265c4782619ff4c945b0",
      "type": "normal",
      "is_to_master": true,
      "color": "#06b6d4",
      "label": "MAIN",
      "svg_path": "M 2690 780.0 L 2775 780.0"
    }
  ],
  "diffs": {
    "b20b87764c4bfae454249e13f7e37452dbee7f2f": {
      "files": [
        {
          "status": "A",
          "path": ".gitignore"
        },
        {
          "status": "A",
          "path": "client/.gitignore"
        },
        {
          "status": "A",
          "path": "client/README.md"
        },
        {
          "status": "A",
          "path": "client/eslint.config.js"
        },
        {
          "status": "A",
          "path": "client/index.html"
        },
        {
          "status": "A",
          "path": "client/package-lock.json"
        },
        {
          "status": "A",
          "path": "client/package.json"
        },
        {
          "status": "A",
          "path": "client/public/favicon.png"
        },
        {
          "status": "A",
          "path": "client/public/favicon.svg"
        },
        {
          "status": "A",
          "path": "client/public/icons.svg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/C_R69448.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/DSCF7139.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/Group 1.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/IMG_9972.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/SAB Logo-03.svg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/SAB-LOGO-BG.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/SAB-LOGO.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/black.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/embed.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/facebook (1).png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/freshyxbuddy.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/fsaward.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/fsn69.gif"
        },
        {
          "status": "A",
          "path": "client/public/pictures/fsnight68.GIF"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/1. ยุทธภูมิ จุติโชติ.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/10. ไตยบุญ บินตัยยิบ.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/11. ชญานันท์ สุขเจริญ.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/12. อรพิมล นพคุณ.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/13. ชญาน์นันท์ หมะอุ.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/14. ธนกร ผกามาศ.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/15. ชัชชญา จันทร์ฉาย.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/16. รุ่งนภา คนเที่ยง.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/17. ขวัญศิริ เกลี้ยงคง.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/18. สิรินรัตน์ หนูสมจิตร.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/19. ภูมิภัทร สมศิริ.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/2. กฤษณา มาตรสกุล.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/20. สุภัสสรา เดชมาก.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/21. กิตติพงศ์ ศรีขวัญ.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/22. พลกฤต ห่อแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/23. ธีรพงศ์ ชมจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/24. ชัยชนะ บุญกิจ.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/25. อักษิพร จุติมุสิก.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/26. อัสนะวีย์ กิ่งเล็ก.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/27. รุสนานี อะหมะ.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/28. ณัฎฐกร ชูรัตน์.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/29. นภัทรสรณ์ ศรีชาย.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/3. จิรายุ พรหมบุญแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/30. พีรวัฒน์ อาแว.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/31. ศิรวิทย์ เชาวลิต.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/32. ยุพารัตน์ นิลไสล.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/33. ลาซานา ไชยบุตร.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/34. กิ่งนภา สุขอนันต์.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/35. สรธร แซ่เอียบ.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/4. มณีรัตน์ สวนจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/5. พิชชาภา ใคร้วานิช.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/6. คีตะวุฑฒ์ สิตรานนท์.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/7. พงศธร ปิตาลีมาพร.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/8. ปภัชพล ลิ่วพฤกษพันธ์.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/9. สรธัญ ช่วยสม.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/Phet.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/ann.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/aon.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/aun.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/cartoon.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/cheer.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/fifa.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/film.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/first.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/green.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/ice.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/kingphai.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/lookgolf.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/lorpor.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/lucky.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/meena.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/muftee.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/na.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/namtan.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/nana.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/nookjang.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/oat.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/p.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/plai.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/plaifah.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/poor.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/pot.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/prae.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/queen.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/r.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/rung.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/sim.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/tango.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/thunwa.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/inweb/wee.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/poststk.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/pre1.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/sab logo-02.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/sab-white.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/sab01.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/social.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/tik-tok.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/wk1.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/youtube.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/คั่นระหว่างอบ..png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/เสื้อแขนสั้น.webp"
        },
        {
          "status": "A",
          "path": "client/src/App.jsx"
        },
        {
          "status": "A",
          "path": "client/src/assets/SAB-LOGO.png"
        },
        {
          "status": "A",
          "path": "client/src/assets/SAB-LOGO.svg"
        },
        {
          "status": "A",
          "path": "client/src/assets/sab-white.png"
        },
        {
          "status": "A",
          "path": "client/src/components/Camera.css"
        },
        {
          "status": "A",
          "path": "client/src/components/Camera.jsx"
        },
        {
          "status": "A",
          "path": "client/src/components/CheckInForm.css"
        },
        {
          "status": "A",
          "path": "client/src/components/CheckInForm.jsx"
        },
        {
          "status": "A",
          "path": "client/src/components/Footer.css"
        },
        {
          "status": "A",
          "path": "client/src/components/Footer.jsx"
        },
        {
          "status": "A",
          "path": "client/src/components/Navbar.css"
        },
        {
          "status": "A",
          "path": "client/src/components/Navbar.jsx"
        },
        {
          "status": "A",
          "path": "client/src/index.css"
        },
        {
          "status": "A",
          "path": "client/src/main.jsx"
        },
        {
          "status": "A",
          "path": "client/src/pages/Dashboard.css"
        },
        {
          "status": "A",
          "path": "client/src/pages/Dashboard.jsx"
        },
        {
          "status": "A",
          "path": "client/src/pages/Home.css"
        },
        {
          "status": "A",
          "path": "client/src/pages/Home.jsx"
        },
        {
          "status": "A",
          "path": "client/src/pages/VmixOverlay.css"
        },
        {
          "status": "A",
          "path": "client/src/pages/VmixOverlay.jsx"
        },
        {
          "status": "A",
          "path": "client/vite.config.js"
        },
        {
          "status": "A",
          "path": "server/app.js"
        },
        {
          "status": "A",
          "path": "server/db.js"
        },
        {
          "status": "A",
          "path": "server/multer.js"
        },
        {
          "status": "A",
          "path": "server/package-lock.json"
        },
        {
          "status": "A",
          "path": "server/package.json"
        },
        {
          "status": "A",
          "path": "server/public/assets/index-AIgEtde7.css"
        },
        {
          "status": "A",
          "path": "server/public/assets/index-Dezx90DS.js"
        },
        {
          "status": "A",
          "path": "server/public/favicon.svg"
        },
        {
          "status": "A",
          "path": "server/public/icons.svg"
        },
        {
          "status": "A",
          "path": "server/public/index.html"
        },
        {
          "status": "A",
          "path": "server/server.js"
        }
      ],
      "full_output": "commit b20b87764c4bfae454249e13f7e37452dbee7f2f\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Thu Jul 16 18:45:33 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Thu Jul 16 18:45:33 2026 +0700\n\n    Initial commit of student check-in portal with dynamic titles and user management\n"
    },
    "8cc43feae17f9b36fe2bbac1525d8927b19c4547": {
      "files": [
        {
          "status": "M",
          "path": "client/src/components/Camera.jsx"
        },
        {
          "status": "M",
          "path": "client/src/components/CheckInForm.jsx"
        },
        {
          "status": "M",
          "path": "client/src/pages/Dashboard.jsx"
        },
        {
          "status": "M",
          "path": "client/src/pages/Home.jsx"
        }
      ],
      "full_output": "commit 8cc43feae17f9b36fe2bbac1525d8927b19c4547\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Fri Jul 17 19:04:48 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Fri Jul 17 19:04:48 2026 +0700\n\n    Optimize check-in photo compression and support video cover uploads for activities\n"
    },
    "ef0a7950ce8505676d15060962d6555dad2aedcc": {
      "files": [
        {
          "status": "M",
          "path": "client/src/components/CheckInForm.jsx"
        },
        {
          "status": "M",
          "path": "client/src/pages/Dashboard.jsx"
        },
        {
          "status": "M",
          "path": "server/server.js"
        }
      ],
      "full_output": "commit ef0a7950ce8505676d15060962d6555dad2aedcc\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Fri Jul 17 19:13:22 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Fri Jul 17 19:13:22 2026 +0700\n\n    Restrict bypass time test mode checkbox to logged in admins only and add shortcut button on Dashboard\n"
    },
    "57827938607c29a0b78a6d2da78c91e70943adb7": {
      "files": [
        {
          "status": "M",
          "path": "client/src/App.jsx"
        },
        {
          "status": "M",
          "path": "client/src/components/CheckInForm.jsx"
        },
        {
          "status": "M",
          "path": "client/src/pages/Dashboard.jsx"
        }
      ],
      "full_output": "commit 57827938607c29a0b78a6d2da78c91e70943adb7\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Fri Jul 17 19:28:14 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Fri Jul 17 19:28:14 2026 +0700\n\n    Create dedicated /dashboard/test path for isolated admin test check-in form with integrated auth token verification\n"
    },
    "446f83c6792385440543902867d5c9b5ba6b72a5": {
      "files": [
        {
          "status": "M",
          "path": "client/src/components/CheckInForm.jsx"
        },
        {
          "status": "M",
          "path": "server/server.js"
        }
      ],
      "full_output": "commit 446f83c6792385440543902867d5c9b5ba6b72a5\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Fri Jul 17 19:34:10 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Fri Jul 17 19:34:10 2026 +0700\n\n    Fix token retrieval storage key using sessionStorage db_token and allow duplicates in test mode\n"
    },
    "006b3eaa9842b95634d87adc66971eb1e657d05a": {
      "files": [
        {
          "status": "M",
          "path": "client/src/pages/Dashboard.jsx"
        },
        {
          "status": "A",
          "path": "server/scratch_list.js"
        },
        {
          "status": "M",
          "path": "server/server.js"
        }
      ],
      "full_output": "commit 006b3eaa9842b95634d87adc66971eb1e657d05a\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Fri Jul 17 19:47:53 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Fri Jul 17 19:47:53 2026 +0700\n\n    Implement bulk delete feature with checkboxes on student list table and backend bulk delete endpoint\n"
    },
    "ea791f7b565ded44939ccef43909b8c39fefaf5a": {
      "files": [
        {
          "status": "M",
          "path": ".gitignore"
        },
        {
          "status": "A",
          "path": "AGY_HANDOFF.md"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/README-SANGJAN-CLONE.md"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/README.md"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/eslint.config.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/index.html"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/package-lock.json"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/package.json"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/favicon.ico"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/favicon.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/icons.svg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/krungthai-test-promptpay.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/krungthai_promptpay_qr.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/C_R69448.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/DSCF7139.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/Group 1.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/IMG_9972.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/SAB Logo-03.svg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/SAB-LOGO-BG.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/SAB-LOGO.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/birthday_celebration.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/birthday_party.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/black.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/embed.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/facebook (1).png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/freshyxbuddy.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/fsaward.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/fsn69.gif"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/fsnight68.GIF"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/1. ยุทธภูมิ จุติโชติ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/10. ไตยบุญ บินตัยยิบ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/11. ชญานันท์ สุขเจริญ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/12. อรพิมล นพคุณ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/13. ชญาน์นันท์ หมะอุ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/14. ธนกร ผกามาศ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/15. ชัชชญา จันทร์ฉาย.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/16. รุ่งนภา คนเที่ยง.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/17. ขวัญศิริ เกลี้ยงคง.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/18. สิรินรัตน์ หนูสมจิตร.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/19. ภูมิภัทร สมศิริ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/2. กฤษณา มาตรสกุล.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/20. สุภัสสรา เดชมาก.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/21. กิตติพงศ์ ศรีขวัญ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/22. พลกฤต ห่อแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/23. ธีรพงศ์ ชมจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/24. ชัยชนะ บุญกิจ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/25. อักษิพร จุติมุสิก.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/26. อัสนะวีย์ กิ่งเล็ก.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/27. รุสนานี อะหมะ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/28. ณัฎฐกร ชูรัตน์.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/29. นภัทรสรณ์ ศรีชาย.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/3. จิรายุ พรหมบุญแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/30. พีรวัฒน์ อาแว.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/31. ศิรวิทย์ เชาวลิต.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/32. ยุพารัตน์ นิลไสล.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/33. ลาซานา ไชยบุตร.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/34. กิ่งนภา สุขอนันต์.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/35. สรธร แซ่เอียบ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/4. มณีรัตน์ สวนจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/5. พิชชาภา ใคร้วานิช.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/6. คีตะวุฑฒ์ สิตรานนท์.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/7. พงศธร ปิตาลีมาพร.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/8. ปภัชพล ลิ่วพฤกษพันธ์.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/9. สรธัญ ช่วยสม.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/Phet.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/ann.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/aon.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/aun.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/cartoon.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/cheer.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/fifa.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/film.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/first.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/green.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/ice.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/kingphai.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/lookgolf.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/lorpor.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/lucky.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/meena.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/muftee.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/na.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/namtan.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/nana.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/nookjang.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/oat.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/p.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/plai.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/plaifah.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/poor.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/pot.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/prae.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/queen.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/r.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/rung.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/sim.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/tango.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/thunwa.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/wee.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/poststk.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/pre1.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/sab logo-02.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/sab-white.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/sab.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/sab01.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/social.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/tik-tok.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/wk1.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/youtube.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/คั่นระหว่างอบ..png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/pictures/เสื้อแขนสั้น.webp"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/sab.svg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/sangjan_logo.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/public/sangjan_moon_badge.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/App.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/assets/SAB-LOGO.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/assets/SAB-LOGO.svg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/assets/sab-white.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/Footer.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/Footer.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/Navbar.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/Navbar.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/ui/Badge.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/ui/Badge.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/ui/ConfirmModal.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/ui/ConfirmModal.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/ui/EmptyState.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/ui/EmptyState.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/ui/Skeleton.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/ui/Skeleton.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/ui/Toast.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/components/ui/Toast.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/context/BrandingContext.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/context/ThemeContext.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/hooks/useDownloadQR.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/i18n/I18nContext.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/i18n/en.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/i18n/th.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/index.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/legacy/Camera.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/legacy/Camera.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/legacy/CheckInForm.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/legacy/CheckInForm.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/legacy/ShoutoutModal.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/legacy/ShoutoutModal.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/main.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/pages/Dashboard.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/pages/Dashboard.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/pages/Home.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/pages/Home.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/pages/VmixOverlay.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/pages/VmixOverlay.jsx"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/src/styles/design-tokens.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/client/vite.config.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/package-lock.json"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/package.json"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/app.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/db.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/multer.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/package-lock.json"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/package.json"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/Dashboard-2EVbZ2Et.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/Dashboard-CkqtO40I.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/VmixOverlay-BVs2a3cW.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/VmixOverlay-Bp0QCRoe.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-AIgEtde7.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-B1hjtwM8.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-B3lFw4_1.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-B7iH7w_p.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-BQNublyt.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-BSgJ2WZj.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-Bg8_fqxj.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-BgXM4Zuz.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-BgXMyfO5.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-BzzcdozR.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-CIMU5OPR.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-CaHdqWDq.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-Cewy5kXw.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-CnVaqOwj.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-CnvvTfZ0.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-CsBPGqkX.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-Cy6rRutT.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-CzKiFrTm.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-DDEViGdi.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-DL2W1L8E.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-DWHq3R33.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-DeVZPY8x.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-DepgQAax.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-Dezx90DS.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-DfSfPTNg.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-Dk6HQ0su.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-Drp_v6La.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-DxQHZL02.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-DzXXmXaG.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-K-CToRkH.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-Mgzm4d2T.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-MmmQAqug.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-PtX6dGul.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-RVOf_pmm.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-eNGIPpEy.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-iegLzJ82.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-jepZJSl9.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-l9mXdR31.css"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/index-s0zEuo9c.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/party-popper-CIcWHkDd.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/assets/sab-white-IneVxH5S.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/favicon.ico"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/favicon.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/favicon.svg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/icons.svg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/index.html"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/krungthai-test-promptpay.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/krungthai_promptpay_qr.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/C_R69448.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/DSCF7139.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/Group 1.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/IMG_9972.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/SAB Logo-03.svg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/SAB-LOGO-BG.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/SAB-LOGO.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/birthday_celebration.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/birthday_party.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/black.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/embed.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/facebook (1).png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/freshyxbuddy.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/fsaward.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/fsn69.gif"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/fsnight68.GIF"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/1. ยุทธภูมิ จุติโชติ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/10. ไตยบุญ บินตัยยิบ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/11. ชญานันท์ สุขเจริญ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/12. อรพิมล นพคุณ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/13. ชญาน์นันท์ หมะอุ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/14. ธนกร ผกามาศ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/15. ชัชชญา จันทร์ฉาย.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/16. รุ่งนภา คนเที่ยง.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/17. ขวัญศิริ เกลี้ยงคง.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/18. สิรินรัตน์ หนูสมจิตร.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/19. ภูมิภัทร สมศิริ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/2. กฤษณา มาตรสกุล.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/20. สุภัสสรา เดชมาก.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/21. กิตติพงศ์ ศรีขวัญ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/22. พลกฤต ห่อแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/23. ธีรพงศ์ ชมจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/24. ชัยชนะ บุญกิจ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/25. อักษิพร จุติมุสิก.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/26. อัสนะวีย์ กิ่งเล็ก.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/27. รุสนานี อะหมะ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/28. ณัฎฐกร ชูรัตน์.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/29. นภัทรสรณ์ ศรีชาย.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/3. จิรายุ พรหมบุญแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/30. พีรวัฒน์ อาแว.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/31. ศิรวิทย์ เชาวลิต.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/32. ยุพารัตน์ นิลไสล.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/33. ลาซานา ไชยบุตร.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/34. กิ่งนภา สุขอนันต์.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/35. สรธร แซ่เอียบ.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/4. มณีรัตน์ สวนจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/5. พิชชาภา ใคร้วานิช.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/6. คีตะวุฑฒ์ สิตรานนท์.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/7. พงศธร ปิตาลีมาพร.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/8. ปภัชพล ลิ่วพฤกษพันธ์.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/9. สรธัญ ช่วยสม.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/Phet.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/ann.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/aon.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/aun.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/cartoon.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/cheer.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/fifa.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/film.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/first.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/green.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/ice.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/kingphai.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/lookgolf.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/lorpor.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/lucky.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/meena.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/muftee.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/na.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/namtan.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/nana.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/nookjang.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/oat.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/p.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/plai.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/plaifah.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/poor.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/pot.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/prae.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/queen.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/r.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/rung.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/sim.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/tango.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/thunwa.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/wee.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/poststk.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/pre1.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/sab logo-02.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/sab-white.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/sab.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/sab01.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/social.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/tik-tok.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/wk1.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/youtube.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/คั่นระหว่างอบ..png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/pictures/เสื้อแขนสั้น.webp"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/sab.svg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/sangjan_logo.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/public/sangjan_moon_badge.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/scratch_list.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/server.js"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1784692917064.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1787652717414-26661963.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1787652717480-787273532.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1787652717640-596828025.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1787655533571-353157546.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1787655533614-536012303.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1787655533686-655513222.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1787656229380-125693328.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1790410961940-162054139.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1790411500170-770192913.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1790412053398-268721015.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1790412053696-940139669.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1790412081075-394434788.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1790412092406-785647793.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1790412096411-538676875.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1790412207507-814221814.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1790412214509-984615169.png"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/uploads/1790412274360-208032858.jpg"
        },
        {
          "status": "A",
          "path": "Check-in-Sangjan/server/utils/promptpay.js"
        },
        {
          "status": "A",
          "path": "Live_Bar_Shoutout_User_Manual.pdf"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/eslint.config.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/index.html"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/package-lock.json"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/package.json"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/favicon.ico"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/favicon.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/icons.svg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/krungthai-test-promptpay.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/krungthai_promptpay_qr.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/C_R69448.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/DSCF7139.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/Group 1.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/IMG_9972.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/SAB Logo-03.svg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/SAB-LOGO-BG.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/SAB-LOGO.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/birthday_celebration.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/birthday_party.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/black.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/embed.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/facebook (1).png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/freshyxbuddy.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/fsaward.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/fsn69.gif"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/fsnight68.GIF"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/1. ยุทธภูมิ จุติโชติ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/10. ไตยบุญ บินตัยยิบ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/11. ชญานันท์ สุขเจริญ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/12. อรพิมล นพคุณ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/13. ชญาน์นันท์ หมะอุ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/14. ธนกร ผกามาศ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/15. ชัชชญา จันทร์ฉาย.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/16. รุ่งนภา คนเที่ยง.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/17. ขวัญศิริ เกลี้ยงคง.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/18. สิรินรัตน์ หนูสมจิตร.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/19. ภูมิภัทร สมศิริ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/2. กฤษณา มาตรสกุล.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/20. สุภัสสรา เดชมาก.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/21. กิตติพงศ์ ศรีขวัญ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/22. พลกฤต ห่อแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/23. ธีรพงศ์ ชมจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/24. ชัยชนะ บุญกิจ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/25. อักษิพร จุติมุสิก.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/26. อัสนะวีย์ กิ่งเล็ก.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/27. รุสนานี อะหมะ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/28. ณัฎฐกร ชูรัตน์.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/29. นภัทรสรณ์ ศรีชาย.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/3. จิรายุ พรหมบุญแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/30. พีรวัฒน์ อาแว.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/31. ศิรวิทย์ เชาวลิต.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/32. ยุพารัตน์ นิลไสล.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/33. ลาซานา ไชยบุตร.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/34. กิ่งนภา สุขอนันต์.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/35. สรธร แซ่เอียบ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/4. มณีรัตน์ สวนจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/5. พิชชาภา ใคร้วานิช.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/6. คีตะวุฑฒ์ สิตรานนท์.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/7. พงศธร ปิตาลีมาพร.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/8. ปภัชพล ลิ่วพฤกษพันธ์.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/9. สรธัญ ช่วยสม.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/Phet.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/ann.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/aon.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/aun.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/cartoon.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/cheer.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/fifa.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/film.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/first.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/green.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/ice.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/kingphai.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/lookgolf.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/lorpor.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/lucky.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/meena.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/muftee.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/na.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/namtan.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/nana.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/nookjang.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/oat.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/p.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/plai.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/plaifah.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/poor.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/pot.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/prae.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/queen.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/r.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/rung.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/sim.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/tango.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/thunwa.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/wee.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/poststk.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/pre1.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/sab logo-02.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/sab-white.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/sab01.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/social.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/tik-tok.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/wk1.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/youtube.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/คั่นระหว่างอบ..png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/pictures/เสื้อแขนสั้น.webp"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/sangjan_logo.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/public/sangjan_moon_badge.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/App.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/assets/SAB-LOGO.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/assets/SAB-LOGO.svg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/assets/sab-white.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/Footer.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/Footer.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/Navbar.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/Navbar.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/Badge.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/Badge.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/ConfirmModal.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/ConfirmModal.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/EmptyState.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/EmptyState.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/Skeleton.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/Skeleton.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/Toast.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/Toast.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/context/BrandingContext.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/context/ThemeContext.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/hooks/useDownloadQR.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/i18n/I18nContext.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/i18n/en.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/i18n/th.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/index.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/legacy/Camera.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/legacy/Camera.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/legacy/CheckInForm.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/legacy/CheckInForm.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/legacy/ShoutoutModal.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/legacy/ShoutoutModal.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/main.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/pages/Dashboard.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/pages/Dashboard.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/pages/Home.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/pages/Home.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/pages/VmixOverlay.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/pages/VmixOverlay.jsx"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/src/styles/design-tokens.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/client/vite.config.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/package-lock.json"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/package.json"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/app.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/db.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/eng.traineddata"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/migrations.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/multer.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/package-lock.json"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/package.json"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/assets/Dashboard-Cd4oNgXW.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/assets/Dashboard-CzS_O-pV.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/assets/VmixOverlay-OAbMPFiq.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/assets/VmixOverlay-yFQpy2sa.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/assets/index-CAEuPffm.css"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/assets/index-DSiwq0Fi.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/assets/message-circle-ClsYzf6Q.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/favicon.ico"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/favicon.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/icons.svg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/index.html"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/krungthai-test-promptpay.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/krungthai_promptpay_qr.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/C_R69448.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/DSCF7139.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/Group 1.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/IMG_9972.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/SAB Logo-03.svg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/SAB-LOGO-BG.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/SAB-LOGO.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/birthday_celebration.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/birthday_party.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/black.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/embed.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/facebook (1).png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/freshyxbuddy.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/fsaward.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/fsn69.gif"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/fsnight68.GIF"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/1. ยุทธภูมิ จุติโชติ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/10. ไตยบุญ บินตัยยิบ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/11. ชญานันท์ สุขเจริญ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/12. อรพิมล นพคุณ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/13. ชญาน์นันท์ หมะอุ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/14. ธนกร ผกามาศ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/15. ชัชชญา จันทร์ฉาย.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/16. รุ่งนภา คนเที่ยง.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/17. ขวัญศิริ เกลี้ยงคง.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/18. สิรินรัตน์ หนูสมจิตร.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/19. ภูมิภัทร สมศิริ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/2. กฤษณา มาตรสกุล.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/20. สุภัสสรา เดชมาก.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/21. กิตติพงศ์ ศรีขวัญ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/22. พลกฤต ห่อแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/23. ธีรพงศ์ ชมจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/24. ชัยชนะ บุญกิจ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/25. อักษิพร จุติมุสิก.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/26. อัสนะวีย์ กิ่งเล็ก.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/27. รุสนานี อะหมะ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/28. ณัฎฐกร ชูรัตน์.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/29. นภัทรสรณ์ ศรีชาย.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/3. จิรายุ พรหมบุญแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/30. พีรวัฒน์ อาแว.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/31. ศิรวิทย์ เชาวลิต.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/32. ยุพารัตน์ นิลไสล.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/33. ลาซานา ไชยบุตร.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/34. กิ่งนภา สุขอนันต์.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/35. สรธร แซ่เอียบ.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/4. มณีรัตน์ สวนจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/5. พิชชาภา ใคร้วานิช.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/6. คีตะวุฑฒ์ สิตรานนท์.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/7. พงศธร ปิตาลีมาพร.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/8. ปภัชพล ลิ่วพฤกษพันธ์.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/9. สรธัญ ช่วยสม.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/Phet.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/ann.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/aon.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/aun.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/cartoon.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/cheer.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/fifa.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/film.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/first.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/green.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/ice.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/kingphai.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/lookgolf.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/lorpor.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/lucky.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/meena.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/muftee.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/na.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/namtan.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/nana.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/nookjang.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/oat.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/p.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/plai.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/plaifah.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/poor.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/pot.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/prae.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/queen.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/r.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/rung.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/sim.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/tango.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/thunwa.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/wee.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/poststk.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/pre1.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/sab logo-02.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/sab-white.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/sab01.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/social.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/tik-tok.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/wk1.jpg"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/youtube.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/คั่นระหว่างอบ..png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/pictures/เสื้อแขนสั้น.webp"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/sangjan_logo.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/public/sangjan_moon_badge.png"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/routes/legacyRoutes.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/scratch_list.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/scripts/backup-db.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/scripts/generate_qr_stand.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/server.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/services/moderationService.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/services/paymentService.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/services/queueService.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/services/screenService.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/test/security.test.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/test/slipVerification.test.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/tha.traineddata"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/update_venue_branding.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/utils/profanity.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/utils/promptpay.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/utils/security.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/utils/slipOcr.js"
        },
        {
          "status": "A",
          "path": "Plesk-Checkin-Layout/server/utils/slipVerification.js"
        },
        {
          "status": "A",
          "path": "UPLOAD-TO-PLESK.txt"
        },
        {
          "status": "A",
          "path": "agy-visual-proof-screenshots-guide.pdf"
        },
        {
          "status": "A",
          "path": "app.js"
        },
        {
          "status": "M",
          "path": "client/eslint.config.js"
        },
        {
          "status": "M",
          "path": "client/index.html"
        },
        {
          "status": "M",
          "path": "client/package-lock.json"
        },
        {
          "status": "M",
          "path": "client/package.json"
        },
        {
          "status": "A",
          "path": "client/public/favicon.ico"
        },
        {
          "status": "M",
          "path": "client/public/favicon.png"
        },
        {
          "status": "D",
          "path": "client/public/favicon.svg"
        },
        {
          "status": "A",
          "path": "client/public/krungthai-test-promptpay.png"
        },
        {
          "status": "A",
          "path": "client/public/krungthai_promptpay_qr.png"
        },
        {
          "status": "A",
          "path": "client/public/pictures/birthday_celebration.jpg"
        },
        {
          "status": "A",
          "path": "client/public/pictures/birthday_party.jpg"
        },
        {
          "status": "A",
          "path": "client/public/sangjan_logo.png"
        },
        {
          "status": "A",
          "path": "client/public/sangjan_moon_badge.png"
        },
        {
          "status": "M",
          "path": "client/src/App.jsx"
        },
        {
          "status": "D",
          "path": "client/src/components/Camera.css"
        },
        {
          "status": "D",
          "path": "client/src/components/Camera.jsx"
        },
        {
          "status": "D",
          "path": "client/src/components/CheckInForm.css"
        },
        {
          "status": "D",
          "path": "client/src/components/CheckInForm.jsx"
        },
        {
          "status": "M",
          "path": "client/src/components/Footer.css"
        },
        {
          "status": "M",
          "path": "client/src/components/Footer.jsx"
        },
        {
          "status": "M",
          "path": "client/src/components/Navbar.css"
        },
        {
          "status": "M",
          "path": "client/src/components/Navbar.jsx"
        },
        {
          "status": "A",
          "path": "client/src/components/ui/Badge.css"
        },
        {
          "status": "A",
          "path": "client/src/components/ui/Badge.jsx"
        },
        {
          "status": "A",
          "path": "client/src/components/ui/ConfirmModal.css"
        },
        {
          "status": "A",
          "path": "client/src/components/ui/ConfirmModal.jsx"
        },
        {
          "status": "A",
          "path": "client/src/components/ui/EmptyState.css"
        },
        {
          "status": "A",
          "path": "client/src/components/ui/EmptyState.jsx"
        },
        {
          "status": "A",
          "path": "client/src/components/ui/Skeleton.css"
        },
        {
          "status": "A",
          "path": "client/src/components/ui/Skeleton.jsx"
        },
        {
          "status": "A",
          "path": "client/src/components/ui/Toast.css"
        },
        {
          "status": "A",
          "path": "client/src/components/ui/Toast.jsx"
        },
        {
          "status": "A",
          "path": "client/src/context/BrandingContext.jsx"
        },
        {
          "status": "A",
          "path": "client/src/context/ThemeContext.jsx"
        },
        {
          "status": "A",
          "path": "client/src/hooks/useDownloadQR.js"
        },
        {
          "status": "A",
          "path": "client/src/i18n/I18nContext.jsx"
        },
        {
          "status": "A",
          "path": "client/src/i18n/en.js"
        },
        {
          "status": "A",
          "path": "client/src/i18n/th.js"
        },
        {
          "status": "M",
          "path": "client/src/index.css"
        },
        {
          "status": "A",
          "path": "client/src/legacy/Camera.css"
        },
        {
          "status": "A",
          "path": "client/src/legacy/Camera.jsx"
        },
        {
          "status": "A",
          "path": "client/src/legacy/CheckInForm.css"
        },
        {
          "status": "A",
          "path": "client/src/legacy/CheckInForm.jsx"
        },
        {
          "status": "A",
          "path": "client/src/legacy/ShoutoutModal.css"
        },
        {
          "status": "A",
          "path": "client/src/legacy/ShoutoutModal.jsx"
        },
        {
          "status": "M",
          "path": "client/src/pages/Dashboard.css"
        },
        {
          "status": "M",
          "path": "client/src/pages/Dashboard.jsx"
        },
        {
          "status": "M",
          "path": "client/src/pages/Home.css"
        },
        {
          "status": "M",
          "path": "client/src/pages/Home.jsx"
        },
        {
          "status": "M",
          "path": "client/src/pages/VmixOverlay.css"
        },
        {
          "status": "M",
          "path": "client/src/pages/VmixOverlay.jsx"
        },
        {
          "status": "A",
          "path": "client/src/styles/design-tokens.css"
        },
        {
          "status": "M",
          "path": "client/vite.config.js"
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
          "path": "public/assets/Dashboard-2EVbZ2Et.css"
        },
        {
          "status": "A",
          "path": "public/assets/Dashboard-CkqtO40I.js"
        },
        {
          "status": "A",
          "path": "public/assets/VmixOverlay-BVs2a3cW.css"
        },
        {
          "status": "A",
          "path": "public/assets/VmixOverlay-Bp0QCRoe.js"
        },
        {
          "status": "A",
          "path": "public/assets/index-B1hjtwM8.js"
        },
        {
          "status": "A",
          "path": "public/assets/index-CzKiFrTm.css"
        },
        {
          "status": "A",
          "path": "public/assets/party-popper-CIcWHkDd.js"
        },
        {
          "status": "A",
          "path": "public/favicon.ico"
        },
        {
          "status": "A",
          "path": "public/favicon.png"
        },
        {
          "status": "A",
          "path": "public/icons.svg"
        },
        {
          "status": "A",
          "path": "public/index.html"
        },
        {
          "status": "A",
          "path": "public/krungthai-test-promptpay.png"
        },
        {
          "status": "A",
          "path": "public/krungthai_promptpay_qr.png"
        },
        {
          "status": "A",
          "path": "public/pictures/C_R69448.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/DSCF7139.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/Group 1.png"
        },
        {
          "status": "A",
          "path": "public/pictures/IMG_9972.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/SAB Logo-03.svg"
        },
        {
          "status": "A",
          "path": "public/pictures/SAB-LOGO-BG.png"
        },
        {
          "status": "A",
          "path": "public/pictures/SAB-LOGO.png"
        },
        {
          "status": "A",
          "path": "public/pictures/birthday_celebration.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/birthday_party.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/black.png"
        },
        {
          "status": "A",
          "path": "public/pictures/embed.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/facebook (1).png"
        },
        {
          "status": "A",
          "path": "public/pictures/freshyxbuddy.png"
        },
        {
          "status": "A",
          "path": "public/pictures/fsaward.png"
        },
        {
          "status": "A",
          "path": "public/pictures/fsn69.gif"
        },
        {
          "status": "A",
          "path": "public/pictures/fsnight68.GIF"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/1. ยุทธภูมิ จุติโชติ.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/10. ไตยบุญ บินตัยยิบ.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/11. ชญานันท์ สุขเจริญ.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/12. อรพิมล นพคุณ.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/13. ชญาน์นันท์ หมะอุ.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/14. ธนกร ผกามาศ.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/15. ชัชชญา จันทร์ฉาย.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/16. รุ่งนภา คนเที่ยง.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/17. ขวัญศิริ เกลี้ยงคง.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/18. สิรินรัตน์ หนูสมจิตร.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/19. ภูมิภัทร สมศิริ.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/2. กฤษณา มาตรสกุล.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/20. สุภัสสรา เดชมาก.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/21. กิตติพงศ์ ศรีขวัญ.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/22. พลกฤต ห่อแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/23. ธีรพงศ์ ชมจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/24. ชัยชนะ บุญกิจ.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/25. อักษิพร จุติมุสิก.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/26. อัสนะวีย์ กิ่งเล็ก.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/27. รุสนานี อะหมะ.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/28. ณัฎฐกร ชูรัตน์.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/29. นภัทรสรณ์ ศรีชาย.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/3. จิรายุ พรหมบุญแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/30. พีรวัฒน์ อาแว.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/31. ศิรวิทย์ เชาวลิต.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/32. ยุพารัตน์ นิลไสล.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/33. ลาซานา ไชยบุตร.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/34. กิ่งนภา สุขอนันต์.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/35. สรธร แซ่เอียบ.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/4. มณีรัตน์ สวนจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/5. พิชชาภา ใคร้วานิช.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/6. คีตะวุฑฒ์ สิตรานนท์.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/7. พงศธร ปิตาลีมาพร.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/8. ปภัชพล ลิ่วพฤกษพันธ์.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/9. สรธัญ ช่วยสม.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/Phet.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/ann.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/aon.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/aun.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/cartoon.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/cheer.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/fifa.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/film.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/first.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/green.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/ice.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/kingphai.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/lookgolf.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/lorpor.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/lucky.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/meena.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/muftee.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/na.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/namtan.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/nana.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/nookjang.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/oat.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/p.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/plai.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/plaifah.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/poor.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/pot.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/prae.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/queen.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/r.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/rung.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/sim.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/tango.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/thunwa.png"
        },
        {
          "status": "A",
          "path": "public/pictures/inweb/wee.png"
        },
        {
          "status": "A",
          "path": "public/pictures/poststk.png"
        },
        {
          "status": "A",
          "path": "public/pictures/pre1.png"
        },
        {
          "status": "A",
          "path": "public/pictures/sab logo-02.png"
        },
        {
          "status": "A",
          "path": "public/pictures/sab-white.png"
        },
        {
          "status": "A",
          "path": "public/pictures/sab01.png"
        },
        {
          "status": "A",
          "path": "public/pictures/social.png"
        },
        {
          "status": "A",
          "path": "public/pictures/tik-tok.png"
        },
        {
          "status": "A",
          "path": "public/pictures/wk1.jpg"
        },
        {
          "status": "A",
          "path": "public/pictures/youtube.png"
        },
        {
          "status": "A",
          "path": "public/pictures/คั่นระหว่างอบ..png"
        },
        {
          "status": "A",
          "path": "public/pictures/เสื้อแขนสั้น.webp"
        },
        {
          "status": "A",
          "path": "public/sangjan_logo.png"
        },
        {
          "status": "A",
          "path": "public/sangjan_moon_badge.png"
        },
        {
          "status": "A",
          "path": "response.html"
        },
        {
          "status": "A",
          "path": "server.js"
        },
        {
          "status": "A",
          "path": "server/BACKUP_AND_SETUP.md"
        },
        {
          "status": "M",
          "path": "server/app.js"
        },
        {
          "status": "A",
          "path": "server/db.env.example"
        },
        {
          "status": "M",
          "path": "server/db.js"
        },
        {
          "status": "A",
          "path": "server/eng.traineddata"
        },
        {
          "status": "A",
          "path": "server/migrations.js"
        },
        {
          "status": "M",
          "path": "server/multer.js"
        },
        {
          "status": "M",
          "path": "server/package-lock.json"
        },
        {
          "status": "M",
          "path": "server/package.json"
        },
        {
          "status": "A",
          "path": "server/private-slips/.gitkeep"
        },
        {
          "status": "A",
          "path": "server/public/assets/Dashboard-Cd4oNgXW.css"
        },
        {
          "status": "A",
          "path": "server/public/assets/Dashboard-CzS_O-pV.js"
        },
        {
          "status": "A",
          "path": "server/public/assets/VmixOverlay-OAbMPFiq.js"
        },
        {
          "status": "A",
          "path": "server/public/assets/VmixOverlay-yFQpy2sa.css"
        },
        {
          "status": "D",
          "path": "server/public/assets/index-AIgEtde7.css"
        },
        {
          "status": "A",
          "path": "server/public/assets/index-CAEuPffm.css"
        },
        {
          "status": "A",
          "path": "server/public/assets/index-DSiwq0Fi.js"
        },
        {
          "status": "D",
          "path": "server/public/assets/index-Dezx90DS.js"
        },
        {
          "status": "A",
          "path": "server/public/assets/message-circle-ClsYzf6Q.js"
        },
        {
          "status": "A",
          "path": "server/public/favicon.ico"
        },
        {
          "status": "A",
          "path": "server/public/favicon.png"
        },
        {
          "status": "D",
          "path": "server/public/favicon.svg"
        },
        {
          "status": "M",
          "path": "server/public/index.html"
        },
        {
          "status": "A",
          "path": "server/public/krungthai-test-promptpay.png"
        },
        {
          "status": "A",
          "path": "server/public/krungthai_promptpay_qr.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/C_R69448.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/DSCF7139.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/Group 1.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/IMG_9972.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/SAB Logo-03.svg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/SAB-LOGO-BG.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/SAB-LOGO.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/birthday_celebration.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/birthday_party.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/black.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/embed.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/facebook (1).png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/freshyxbuddy.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/fsaward.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/fsn69.gif"
        },
        {
          "status": "A",
          "path": "server/public/pictures/fsnight68.GIF"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/1. ยุทธภูมิ จุติโชติ.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/10. ไตยบุญ บินตัยยิบ.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/11. ชญานันท์ สุขเจริญ.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/12. อรพิมล นพคุณ.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/13. ชญาน์นันท์ หมะอุ.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/14. ธนกร ผกามาศ.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/15. ชัชชญา จันทร์ฉาย.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/16. รุ่งนภา คนเที่ยง.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/17. ขวัญศิริ เกลี้ยงคง.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/18. สิรินรัตน์ หนูสมจิตร.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/19. ภูมิภัทร สมศิริ.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/2. กฤษณา มาตรสกุล.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/20. สุภัสสรา เดชมาก.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/21. กิตติพงศ์ ศรีขวัญ.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/22. พลกฤต ห่อแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/23. ธีรพงศ์ ชมจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/24. ชัยชนะ บุญกิจ.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/25. อักษิพร จุติมุสิก.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/26. อัสนะวีย์ กิ่งเล็ก.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/27. รุสนานี อะหมะ.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/28. ณัฎฐกร ชูรัตน์.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/29. นภัทรสรณ์ ศรีชาย.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/3. จิรายุ พรหมบุญแก้ว.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/30. พีรวัฒน์ อาแว.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/31. ศิรวิทย์ เชาวลิต.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/32. ยุพารัตน์ นิลไสล.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/33. ลาซานา ไชยบุตร.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/34. กิ่งนภา สุขอนันต์.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/35. สรธร แซ่เอียบ.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/4. มณีรัตน์ สวนจันทร์.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/5. พิชชาภา ใคร้วานิช.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/6. คีตะวุฑฒ์ สิตรานนท์.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/7. พงศธร ปิตาลีมาพร.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/8. ปภัชพล ลิ่วพฤกษพันธ์.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/9. สรธัญ ช่วยสม.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/Phet.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/ann.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/aon.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/aun.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/cartoon.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/cheer.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/fifa.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/film.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/first.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/green.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/ice.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/kingphai.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/lookgolf.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/lorpor.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/lucky.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/meena.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/muftee.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/na.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/namtan.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/nana.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/nookjang.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/oat.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/p.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/plai.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/plaifah.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/poor.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/pot.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/prae.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/queen.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/r.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/rung.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/sim.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/tango.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/thunwa.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/inweb/wee.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/poststk.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/pre1.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/sab logo-02.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/sab-white.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/sab01.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/social.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/tik-tok.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/wk1.jpg"
        },
        {
          "status": "A",
          "path": "server/public/pictures/youtube.png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/คั่นระหว่างอบ..png"
        },
        {
          "status": "A",
          "path": "server/public/pictures/เสื้อแขนสั้น.webp"
        },
        {
          "status": "A",
          "path": "server/public/sangjan_logo.png"
        },
        {
          "status": "A",
          "path": "server/public/sangjan_moon_badge.png"
        },
        {
          "status": "A",
          "path": "server/routes/legacyRoutes.js"
        },
        {
          "status": "A",
          "path": "server/scripts/backup-db.js"
        },
        {
          "status": "A",
          "path": "server/server.env.example"
        },
        {
          "status": "M",
          "path": "server/server.js"
        },
        {
          "status": "A",
          "path": "server/services/moderationService.js"
        },
        {
          "status": "A",
          "path": "server/services/paymentService.js"
        },
        {
          "status": "A",
          "path": "server/services/queueService.js"
        },
        {
          "status": "A",
          "path": "server/services/screenService.js"
        },
        {
          "status": "A",
          "path": "server/test/security.test.js"
        },
        {
          "status": "A",
          "path": "server/test/slipVerification.test.js"
        },
        {
          "status": "A",
          "path": "server/tha.traineddata"
        },
        {
          "status": "A",
          "path": "server/update_venue_branding.js"
        },
        {
          "status": "A",
          "path": "server/utils/profanity.js"
        },
        {
          "status": "A",
          "path": "server/utils/promptpay.js"
        },
        {
          "status": "A",
          "path": "server/utils/security.js"
        },
        {
          "status": "A",
          "path": "server/utils/slipOcr.js"
        },
        {
          "status": "A",
          "path": "server/utils/slipVerification.js"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/01-customer-home.png"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/02-package-selection.png"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/03-message-form.png"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/04-preview.png"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/05-payment-qr.png"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/06-order-status.png"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/07-admin-queue.png"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/08-live-screen.png"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/09-light-mode.png"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/10-dark-mode.png"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/11-mobile-375px.png"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/12-desktop-1440px.png"
        },
        {
          "status": "A",
          "path": "ui-mockup-presentation/ui-mockup-presentation.pdf"
        },
        {
          "status": "A",
          "path": "คู่มือการใช้งาน_Live_Bar_Shoutout.pdf"
        }
      ],
      "full_output": "commit ea791f7b565ded44939ccef43909b8c39fefaf5a\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 17:56:43 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 17:56:43 2026 +0700\n\n    feat: checkpoint sync for Check-in (Sangjan Live Bar)\n"
    },
    "0a1d8306b90c54df497e265c4782619ff4c945b0": {
      "files": [
        {
          "status": "M",
          "path": ".gitignore"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/README-SANGJAN-CLONE.md"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/README.md"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/eslint.config.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/index.html"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/package-lock.json"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/package.json"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/favicon.ico"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/favicon.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/icons.svg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/krungthai-test-promptpay.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/krungthai_promptpay_qr.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/C_R69448.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/DSCF7139.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/Group 1.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/IMG_9972.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/SAB Logo-03.svg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/SAB-LOGO-BG.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/SAB-LOGO.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/birthday_celebration.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/birthday_party.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/black.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/embed.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/facebook (1).png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/freshyxbuddy.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/fsaward.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/fsn69.gif"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/fsnight68.GIF"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/1. ยุทธภูมิ จุติโชติ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/10. ไตยบุญ บินตัยยิบ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/11. ชญานันท์ สุขเจริญ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/12. อรพิมล นพคุณ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/13. ชญาน์นันท์ หมะอุ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/14. ธนกร ผกามาศ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/15. ชัชชญา จันทร์ฉาย.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/16. รุ่งนภา คนเที่ยง.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/17. ขวัญศิริ เกลี้ยงคง.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/18. สิรินรัตน์ หนูสมจิตร.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/19. ภูมิภัทร สมศิริ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/2. กฤษณา มาตรสกุล.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/20. สุภัสสรา เดชมาก.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/21. กิตติพงศ์ ศรีขวัญ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/22. พลกฤต ห่อแก้ว.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/23. ธีรพงศ์ ชมจันทร์.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/24. ชัยชนะ บุญกิจ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/25. อักษิพร จุติมุสิก.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/26. อัสนะวีย์ กิ่งเล็ก.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/27. รุสนานี อะหมะ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/28. ณัฎฐกร ชูรัตน์.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/29. นภัทรสรณ์ ศรีชาย.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/3. จิรายุ พรหมบุญแก้ว.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/30. พีรวัฒน์ อาแว.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/31. ศิรวิทย์ เชาวลิต.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/32. ยุพารัตน์ นิลไสล.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/33. ลาซานา ไชยบุตร.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/34. กิ่งนภา สุขอนันต์.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/35. สรธร แซ่เอียบ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/4. มณีรัตน์ สวนจันทร์.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/5. พิชชาภา ใคร้วานิช.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/6. คีตะวุฑฒ์ สิตรานนท์.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/7. พงศธร ปิตาลีมาพร.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/8. ปภัชพล ลิ่วพฤกษพันธ์.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/9. สรธัญ ช่วยสม.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/Phet.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/ann.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/aon.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/aun.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/cartoon.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/cheer.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/fifa.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/film.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/first.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/green.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/ice.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/kingphai.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/lookgolf.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/lorpor.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/lucky.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/meena.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/muftee.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/na.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/namtan.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/nana.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/nookjang.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/oat.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/p.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/plai.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/plaifah.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/poor.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/pot.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/prae.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/queen.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/r.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/rung.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/sim.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/tango.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/thunwa.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/inweb/wee.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/poststk.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/pre1.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/sab logo-02.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/sab-white.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/sab.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/sab01.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/social.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/tik-tok.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/wk1.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/youtube.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/คั่นระหว่างอบ..png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/pictures/เสื้อแขนสั้น.webp"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/sab.svg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/sangjan_logo.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/public/sangjan_moon_badge.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/App.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/assets/SAB-LOGO.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/assets/SAB-LOGO.svg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/assets/sab-white.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/Footer.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/Footer.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/Navbar.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/Navbar.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/ui/Badge.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/ui/Badge.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/ui/ConfirmModal.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/ui/ConfirmModal.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/ui/EmptyState.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/ui/EmptyState.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/ui/Skeleton.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/ui/Skeleton.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/ui/Toast.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/components/ui/Toast.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/context/BrandingContext.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/context/ThemeContext.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/hooks/useDownloadQR.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/i18n/I18nContext.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/i18n/en.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/i18n/th.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/index.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/legacy/Camera.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/legacy/Camera.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/legacy/CheckInForm.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/legacy/CheckInForm.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/legacy/ShoutoutModal.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/legacy/ShoutoutModal.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/main.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/pages/Dashboard.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/pages/Dashboard.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/pages/Home.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/pages/Home.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/pages/VmixOverlay.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/pages/VmixOverlay.jsx"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/src/styles/design-tokens.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/client/vite.config.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/package-lock.json"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/package.json"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/app.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/db.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/multer.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/package-lock.json"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/package.json"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/Dashboard-2EVbZ2Et.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/Dashboard-CkqtO40I.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/VmixOverlay-BVs2a3cW.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/VmixOverlay-Bp0QCRoe.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-AIgEtde7.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-B1hjtwM8.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-B3lFw4_1.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-B7iH7w_p.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-BQNublyt.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-BSgJ2WZj.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-Bg8_fqxj.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-BgXM4Zuz.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-BgXMyfO5.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-BzzcdozR.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-CIMU5OPR.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-CaHdqWDq.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-Cewy5kXw.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-CnVaqOwj.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-CnvvTfZ0.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-CsBPGqkX.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-Cy6rRutT.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-CzKiFrTm.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-DDEViGdi.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-DL2W1L8E.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-DWHq3R33.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-DeVZPY8x.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-DepgQAax.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-Dezx90DS.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-DfSfPTNg.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-Dk6HQ0su.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-Drp_v6La.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-DxQHZL02.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-DzXXmXaG.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-K-CToRkH.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-Mgzm4d2T.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-MmmQAqug.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-PtX6dGul.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-RVOf_pmm.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-eNGIPpEy.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-iegLzJ82.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-jepZJSl9.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-l9mXdR31.css"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/index-s0zEuo9c.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/party-popper-CIcWHkDd.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/assets/sab-white-IneVxH5S.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/favicon.ico"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/favicon.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/favicon.svg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/icons.svg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/index.html"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/krungthai-test-promptpay.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/krungthai_promptpay_qr.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/C_R69448.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/DSCF7139.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/Group 1.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/IMG_9972.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/SAB Logo-03.svg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/SAB-LOGO-BG.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/SAB-LOGO.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/birthday_celebration.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/birthday_party.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/black.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/embed.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/facebook (1).png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/freshyxbuddy.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/fsaward.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/fsn69.gif"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/fsnight68.GIF"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/1. ยุทธภูมิ จุติโชติ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/10. ไตยบุญ บินตัยยิบ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/11. ชญานันท์ สุขเจริญ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/12. อรพิมล นพคุณ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/13. ชญาน์นันท์ หมะอุ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/14. ธนกร ผกามาศ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/15. ชัชชญา จันทร์ฉาย.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/16. รุ่งนภา คนเที่ยง.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/17. ขวัญศิริ เกลี้ยงคง.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/18. สิรินรัตน์ หนูสมจิตร.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/19. ภูมิภัทร สมศิริ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/2. กฤษณา มาตรสกุล.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/20. สุภัสสรา เดชมาก.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/21. กิตติพงศ์ ศรีขวัญ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/22. พลกฤต ห่อแก้ว.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/23. ธีรพงศ์ ชมจันทร์.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/24. ชัยชนะ บุญกิจ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/25. อักษิพร จุติมุสิก.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/26. อัสนะวีย์ กิ่งเล็ก.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/27. รุสนานี อะหมะ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/28. ณัฎฐกร ชูรัตน์.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/29. นภัทรสรณ์ ศรีชาย.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/3. จิรายุ พรหมบุญแก้ว.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/30. พีรวัฒน์ อาแว.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/31. ศิรวิทย์ เชาวลิต.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/32. ยุพารัตน์ นิลไสล.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/33. ลาซานา ไชยบุตร.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/34. กิ่งนภา สุขอนันต์.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/35. สรธร แซ่เอียบ.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/4. มณีรัตน์ สวนจันทร์.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/5. พิชชาภา ใคร้วานิช.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/6. คีตะวุฑฒ์ สิตรานนท์.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/7. พงศธร ปิตาลีมาพร.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/8. ปภัชพล ลิ่วพฤกษพันธ์.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/9. สรธัญ ช่วยสม.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/Phet.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/ann.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/aon.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/aun.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/cartoon.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/cheer.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/fifa.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/film.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/first.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/green.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/ice.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/kingphai.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/lookgolf.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/lorpor.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/lucky.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/meena.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/muftee.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/na.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/namtan.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/nana.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/nookjang.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/oat.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/p.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/plai.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/plaifah.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/poor.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/pot.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/prae.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/queen.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/r.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/rung.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/sim.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/tango.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/thunwa.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/inweb/wee.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/poststk.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/pre1.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/sab logo-02.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/sab-white.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/sab.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/sab01.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/social.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/tik-tok.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/wk1.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/youtube.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/คั่นระหว่างอบ..png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/pictures/เสื้อแขนสั้น.webp"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/sab.svg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/sangjan_logo.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/public/sangjan_moon_badge.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/scratch_list.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/server.js"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1784692917064.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1787652717414-26661963.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1787652717480-787273532.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1787652717640-596828025.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1787655533571-353157546.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1787655533614-536012303.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1787655533686-655513222.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1787656229380-125693328.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1790410961940-162054139.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1790411500170-770192913.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1790412053398-268721015.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1790412053696-940139669.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1790412081075-394434788.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1790412092406-785647793.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1790412096411-538676875.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1790412207507-814221814.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1790412214509-984615169.png"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/uploads/1790412274360-208032858.jpg"
        },
        {
          "status": "D",
          "path": "Check-in-Sangjan/server/utils/promptpay.js"
        },
        {
          "status": "D",
          "path": "Live_Bar_Shoutout_User_Manual.pdf"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/eslint.config.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/index.html"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/package-lock.json"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/package.json"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/favicon.ico"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/favicon.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/icons.svg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/krungthai-test-promptpay.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/krungthai_promptpay_qr.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/C_R69448.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/DSCF7139.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/Group 1.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/IMG_9972.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/SAB Logo-03.svg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/SAB-LOGO-BG.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/SAB-LOGO.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/birthday_celebration.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/birthday_party.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/black.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/embed.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/facebook (1).png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/freshyxbuddy.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/fsaward.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/fsn69.gif"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/fsnight68.GIF"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/1. ยุทธภูมิ จุติโชติ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/10. ไตยบุญ บินตัยยิบ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/11. ชญานันท์ สุขเจริญ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/12. อรพิมล นพคุณ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/13. ชญาน์นันท์ หมะอุ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/14. ธนกร ผกามาศ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/15. ชัชชญา จันทร์ฉาย.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/16. รุ่งนภา คนเที่ยง.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/17. ขวัญศิริ เกลี้ยงคง.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/18. สิรินรัตน์ หนูสมจิตร.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/19. ภูมิภัทร สมศิริ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/2. กฤษณา มาตรสกุล.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/20. สุภัสสรา เดชมาก.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/21. กิตติพงศ์ ศรีขวัญ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/22. พลกฤต ห่อแก้ว.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/23. ธีรพงศ์ ชมจันทร์.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/24. ชัยชนะ บุญกิจ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/25. อักษิพร จุติมุสิก.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/26. อัสนะวีย์ กิ่งเล็ก.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/27. รุสนานี อะหมะ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/28. ณัฎฐกร ชูรัตน์.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/29. นภัทรสรณ์ ศรีชาย.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/3. จิรายุ พรหมบุญแก้ว.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/30. พีรวัฒน์ อาแว.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/31. ศิรวิทย์ เชาวลิต.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/32. ยุพารัตน์ นิลไสล.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/33. ลาซานา ไชยบุตร.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/34. กิ่งนภา สุขอนันต์.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/35. สรธร แซ่เอียบ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/4. มณีรัตน์ สวนจันทร์.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/5. พิชชาภา ใคร้วานิช.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/6. คีตะวุฑฒ์ สิตรานนท์.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/7. พงศธร ปิตาลีมาพร.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/8. ปภัชพล ลิ่วพฤกษพันธ์.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/9. สรธัญ ช่วยสม.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/Phet.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/ann.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/aon.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/aun.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/cartoon.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/cheer.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/fifa.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/film.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/first.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/green.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/ice.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/kingphai.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/lookgolf.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/lorpor.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/lucky.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/meena.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/muftee.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/na.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/namtan.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/nana.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/nookjang.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/oat.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/p.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/plai.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/plaifah.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/poor.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/pot.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/prae.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/queen.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/r.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/rung.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/sim.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/tango.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/thunwa.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/inweb/wee.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/poststk.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/pre1.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/sab logo-02.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/sab-white.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/sab01.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/social.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/tik-tok.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/wk1.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/youtube.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/คั่นระหว่างอบ..png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/pictures/เสื้อแขนสั้น.webp"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/sangjan_logo.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/public/sangjan_moon_badge.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/App.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/assets/SAB-LOGO.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/assets/SAB-LOGO.svg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/assets/sab-white.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/Footer.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/Footer.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/Navbar.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/Navbar.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/Badge.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/Badge.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/ConfirmModal.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/ConfirmModal.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/EmptyState.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/EmptyState.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/Skeleton.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/Skeleton.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/Toast.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/components/ui/Toast.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/context/BrandingContext.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/context/ThemeContext.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/hooks/useDownloadQR.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/i18n/I18nContext.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/i18n/en.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/i18n/th.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/index.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/legacy/Camera.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/legacy/Camera.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/legacy/CheckInForm.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/legacy/CheckInForm.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/legacy/ShoutoutModal.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/legacy/ShoutoutModal.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/main.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/pages/Dashboard.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/pages/Dashboard.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/pages/Home.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/pages/Home.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/pages/VmixOverlay.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/pages/VmixOverlay.jsx"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/src/styles/design-tokens.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/client/vite.config.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/package-lock.json"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/package.json"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/app.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/db.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/eng.traineddata"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/migrations.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/multer.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/package-lock.json"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/package.json"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/assets/Dashboard-Cd4oNgXW.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/assets/Dashboard-CzS_O-pV.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/assets/VmixOverlay-OAbMPFiq.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/assets/VmixOverlay-yFQpy2sa.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/assets/index-CAEuPffm.css"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/assets/index-DSiwq0Fi.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/assets/message-circle-ClsYzf6Q.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/favicon.ico"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/favicon.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/icons.svg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/index.html"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/krungthai-test-promptpay.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/krungthai_promptpay_qr.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/C_R69448.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/DSCF7139.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/Group 1.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/IMG_9972.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/SAB Logo-03.svg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/SAB-LOGO-BG.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/SAB-LOGO.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/birthday_celebration.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/birthday_party.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/black.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/embed.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/facebook (1).png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/freshyxbuddy.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/fsaward.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/fsn69.gif"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/fsnight68.GIF"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/1. ยุทธภูมิ จุติโชติ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/10. ไตยบุญ บินตัยยิบ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/11. ชญานันท์ สุขเจริญ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/12. อรพิมล นพคุณ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/13. ชญาน์นันท์ หมะอุ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/14. ธนกร ผกามาศ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/15. ชัชชญา จันทร์ฉาย.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/16. รุ่งนภา คนเที่ยง.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/17. ขวัญศิริ เกลี้ยงคง.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/18. สิรินรัตน์ หนูสมจิตร.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/19. ภูมิภัทร สมศิริ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/2. กฤษณา มาตรสกุล.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/20. สุภัสสรา เดชมาก.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/21. กิตติพงศ์ ศรีขวัญ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/22. พลกฤต ห่อแก้ว.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/23. ธีรพงศ์ ชมจันทร์.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/24. ชัยชนะ บุญกิจ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/25. อักษิพร จุติมุสิก.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/26. อัสนะวีย์ กิ่งเล็ก.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/27. รุสนานี อะหมะ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/28. ณัฎฐกร ชูรัตน์.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/29. นภัทรสรณ์ ศรีชาย.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/3. จิรายุ พรหมบุญแก้ว.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/30. พีรวัฒน์ อาแว.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/31. ศิรวิทย์ เชาวลิต.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/32. ยุพารัตน์ นิลไสล.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/33. ลาซานา ไชยบุตร.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/34. กิ่งนภา สุขอนันต์.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/35. สรธร แซ่เอียบ.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/4. มณีรัตน์ สวนจันทร์.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/5. พิชชาภา ใคร้วานิช.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/6. คีตะวุฑฒ์ สิตรานนท์.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/7. พงศธร ปิตาลีมาพร.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/8. ปภัชพล ลิ่วพฤกษพันธ์.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/9. สรธัญ ช่วยสม.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/Phet.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/ann.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/aon.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/aun.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/cartoon.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/cheer.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/fifa.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/film.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/first.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/green.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/ice.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/kingphai.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/lookgolf.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/lorpor.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/lucky.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/meena.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/muftee.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/na.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/namtan.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/nana.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/nookjang.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/oat.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/p.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/plai.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/plaifah.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/poor.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/pot.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/prae.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/queen.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/r.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/rung.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/sim.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/tango.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/thunwa.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/inweb/wee.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/poststk.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/pre1.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/sab logo-02.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/sab-white.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/sab01.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/social.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/tik-tok.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/wk1.jpg"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/youtube.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/คั่นระหว่างอบ..png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/pictures/เสื้อแขนสั้น.webp"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/sangjan_logo.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/public/sangjan_moon_badge.png"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/routes/legacyRoutes.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/scratch_list.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/scripts/backup-db.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/scripts/generate_qr_stand.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/server.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/services/moderationService.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/services/paymentService.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/services/queueService.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/services/screenService.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/test/security.test.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/test/slipVerification.test.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/tha.traineddata"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/update_venue_branding.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/utils/profanity.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/utils/promptpay.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/utils/security.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/utils/slipOcr.js"
        },
        {
          "status": "D",
          "path": "Plesk-Checkin-Layout/server/utils/slipVerification.js"
        },
        {
          "status": "D",
          "path": "UPLOAD-TO-PLESK.txt"
        },
        {
          "status": "D",
          "path": "agy-visual-proof-screenshots-guide.pdf"
        },
        {
          "status": "D",
          "path": "response.html"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/01-customer-home.png"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/02-package-selection.png"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/03-message-form.png"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/04-preview.png"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/05-payment-qr.png"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/06-order-status.png"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/07-admin-queue.png"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/08-live-screen.png"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/09-light-mode.png"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/10-dark-mode.png"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/11-mobile-375px.png"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/12-desktop-1440px.png"
        },
        {
          "status": "D",
          "path": "ui-mockup-presentation/ui-mockup-presentation.pdf"
        },
        {
          "status": "D",
          "path": "คู่มือการใช้งาน_Live_Bar_Shoutout.pdf"
        }
      ],
      "full_output": "commit 0a1d8306b90c54df497e265c4782619ff4c945b0\nAuthor:     TheMangKung <waesaref21245@gmail.com>\nAuthorDate: Sun Oct 4 18:00:00 2026 +0700\nCommit:     TheMangKung <waesaref21245@gmail.com>\nCommitDate: Sun Oct 4 18:00:00 2026 +0700\n\n    chore: clean up repo, remove duplicate backup folders and non-essential assets from tracking\n"
    }
  }
};
