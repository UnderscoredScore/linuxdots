import type { Distro, DotfileProject, Tag, WM } from '../types/dotfiles';

export const dotfileProjects: DotfileProject[] = [
  {
    id: 'glyph-hyprland-arch',
    name: 'Glyph',
    author: 'Nebelung-cloud',
    description:
      'A Nothing OS-inspired rice for Hyprland and Quickshell. Black, white dots, one red.',
    longDescription:
      "Glyph is a Hyprland + Quickshell desktop themed after Nothing OS: black and white dots, one red accent marking the single live thing on screen. Built around a custom Quickshell shell with bar, launcher, glyph edge OSD, dashboard deck, quick settings, clipboard history, screenshot tool, and a full settings panel. Also ships Nothing / CMF earbuds integration for battery and ANC. Dark and light palettes; fonts are Doto, Space Grotesk, Space Mono, and JetBrains Mono Nerd Font. GPL-3.0, fan project, not affiliated with Nothing.",
    distro: 'Arch',
    wm: 'Hyprland',
    tags: ['dark', 'light', 'minimal', 'clean', 'rounded', 'wayland', 'tiling', 'rice'],
    screenshots: [
      'https://raw.githubusercontent.com/Nebelung-cloud/glyph-rice/main/screenshots/desktop.png',
      'https://github.com/Nebelung-cloud/glyph-rice/raw/main/screenshots/launcher.png',
      'https://github.com/Nebelung-cloud/glyph-rice/raw/main/screenshots/quick.png',
      'https://github.com/Nebelung-cloud/glyph-rice/raw/main/screenshots/deck.png',
      'https://github.com/Nebelung-cloud/glyph-rice/raw/main/screenshots/settings.png',
      'https://github.com/Nebelung-cloud/glyph-rice/raw/main/screenshots/shot.png',
      'https://github.com/Nebelung-cloud/glyph-rice/raw/main/screenshots/clip.png',
      'https://github.com/Nebelung-cloud/glyph-rice/raw/main/screenshots/power.png',
    ],
    thumbnail:
      'https://raw.githubusercontent.com/Nebelung-cloud/glyph-rice/main/screenshots/desktop.png',
    repoUrl: 'https://github.com/Nebelung-cloud/glyph-rice',
    downloadUrl: 'https://github.com/Nebelung-cloud/glyph-rice',
  },
  {
    id: 'hyper-aero-hyprland-arch',
    name: 'HYPER·AERO',
    author: 'jotaperom',
    description:
      'A Frutiger Aero / Y2K rice for Hyprland on Arch. Glossy glass, bubbles, animated skies.',
    longDescription:
      "HYPER·AERO brings the optimistic computer future of 2005 to modern Wayland. Features animated wallpapers (four looping scenes with day/night versions), four accent themes plus a Theme Studio, automatic day/night cycle, a phone-shaped NEXUS control center with 8 skins, 13 draggable desk widgets, a TELEMETRY HUD, Windows-style display panel, and performance profiles. Bilingual English/Spanish interface. Requires Hyprland 0.56+ with Lua config. GPL-3.0.",
    distro: 'Arch',
    wm: 'Hyprland',
    tags: ['dark', 'light', 'colorful', 'rounded', 'blur', 'wayland', 'tiling', 'rice'],
    screenshots: [
      'https://github.com/jotaperom/hyper-aero/raw/main/assets/screenshots/desktop.png',
    ],
    thumbnail:
      'https://github.com/jotaperom/hyper-aero/raw/main/assets/screenshots/desktop.png',
    repoUrl: 'https://github.com/jotaperom/hyper-aero',
    downloadUrl: 'https://github.com/jotaperom/hyper-aero',
  },
  {
    id: 'nextkde-kde-fedora',
    name: 'NextKDE',
    author: 'NextKde',
    description:
      'A Quickshell desktop shell for KDE Plasma 6. Liquid glass, floating dock, integrated workspace.',
    longDescription:
      "NextKDE (KOS Desktop Shell) replaces or enhances Plasma's native interface: top panel, floating dock, launcher, global search, notification center, and system settings. Built on Quickshell 0.3.x with KWin 6.6+ and Qt 6.6+. Supports liquid glass, soft-light, frosted, and tonal Material Design appearances. Works with NetworkManager, PipeWire, BlueZ, and systemd. GPL-3.0.",
    distro: 'Fedora',
    wm: 'KDE',
    tags: ['dark', 'light', 'blur', 'rounded', 'wayland', 'clean', 'rice'],
    screenshots: [
      'https://github.com/NextKde/NextKde/raw/main/docs/images/desktop.png',
    ],
    thumbnail:
      'https://github.com/NextKde/NextKde/raw/main/docs/images/desktop.png',
    repoUrl: 'https://github.com/NextKde/NextKde',
    downloadUrl: 'https://github.com/NextKde/NextKde',
  },
  {
    id: 'vitreus-hyprland-arch',
    name: 'Vitreus',
    author: 'natepayn3',
    description:
      'A liquid-glass desktop shell for Hyprland, niri, or pleamar-wm. Bar and panels that flow out of it.',
    longDescription:
      "Vitreus is a floating pill of frosted glass at the top of the screen, or a strip down the left edge. Everything else (calendar, quick controls, player, settings, launcher, volume indicator, notifications) is a drawer that grows out of the bar with a liquid neck. Features three layouts (island, frame, notches), a dashboard, Snap screenshot editor, launcher with calculator and bangs, settings, wallpaper picker, workspace overview, Desk panel with AI chat, notification rules, lock screen, SDDM theme, audio visualiser, a built-in file manager, and six themes. Requires pleamar runtime and a Vulkan driver. MIT License.",
    distro: 'Arch',
    wm: 'Hyprland',
    tags: ['dark', 'light', 'blur', 'rounded', 'wayland', 'minimal', 'clean', 'rice'],
    screenshots: [
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/dashboard.webp',
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/snap.webp',
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/calendar.webp',
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/control-center.webp',
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/launcher.webp',
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/player-and-windows.webp',
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/system-tray.webp',
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/settings-about.webp',
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/demo.webp',
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/wallpaper-demo.webp',
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/tour.webp',
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/desk.webp',
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/lockscreen.webp'
    ],
    thumbnail:
      'https://github.com/natepayn3/Vitreus/raw/main/assets/screenshots/dashboard.webp',
    repoUrl: 'https://github.com/natepayn3/Vitreus',
    downloadUrl: 'https://github.com/natepayn3/Vitreus',
  },
  {
    id: 'dotfiles-dt-kde-cachyos',
    name: 'dotfiles-dt',
    author: 'agridyne',
    description:
      'A monochrome KDE Plasma rice on CachyOS with video wallpapers and retro terminal.',
    longDescription:
      "A KDE Plasma setup using Monochrome KDE as a starting point, Yet Another Monochrome Icon Set, Bibata cursors, Kuro the cat splash, Monochrome Plasma 6 SDDM, dotLock boot splash, and Smart Video Wallpaper. Includes CatWalkR, KDE control station, Kurve audio visualizer, YoRHa HUD, Thermal Monitor, and Panel Colorizer presets. Uses JetBrainsMono Nerd Font system-wide, fish shell, cool-retro-term, and Zen browser with transparency mods. Recommended for CachyOS.",
    distro: 'Arch',
    wm: 'KDE',
    tags: ['dark', 'minimal', 'clean', 'rounded', 'wayland', 'rice'],
    screenshots: [
      'https://raw.githubusercontent.com/agridyne/dotfiles-dt/main/screenshots/desktop.png',
    ],
    thumbnail:
      'https://raw.githubusercontent.com/agridyne/dotfiles-dt/main/screenshots/desktop.png',
    repoUrl: 'https://github.com/agridyne/dotfiles-dt',
    downloadUrl: 'https://github.com/agridyne/dotfiles-dt',
    hidden: true,
  },
  {
    id: 'end-4-dots-hyprland-arch',
    name: 'dots-hyprland',
    author: 'end-4',
    description:
      'The most popular Hyprland rice: usability-focused with Material You colors and smooth animations.',
    longDescription:
      "end-4's dots-hyprland is one of the most-starred Hyprland configurations on GitHub. It focuses on usability first, with a polished Quickshell-based shell, Material You dynamic theming, smooth animations, and a cohesive set of applications. A great starting point for anyone new to Hyprland ricing who wants something that works out of the box.",
    distro: 'Arch',
    wm: 'Hyprland',
    tags: ['dark', 'material', 'rounded', 'blur', 'wayland', 'tiling', 'clean', 'rice'],
    screenshots: [
      'https://private-user-images.githubusercontent.com/97237370/576999011-98703a66-0743-439f-a721-cef7afa6ab95.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTI5NDc5MTksIm5iZiI6MTc5Mjk0NzYxOSwicGF0aCI6Ii85NzIzNzM3MC81NzY5OTkwMTEtOTg3MDNhNjYtMDc0My00MzlmLWE3MjEtY2VmN2FmYTZhYjk1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjEwMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMDI1VDE3MDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdiMGJkZjY2N2RjNjYxYzE1YzRkNGZlOGU1YzVlYzk5NDAxZjI2ZWYyNzIwMTc3Y2Q2YzEwMzBiYzBmYzQ4ZjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.Zo5YOAUfWhbKykBDB9aYHzwI6VJRaMz-reM7AJ5QVO8',
      'https://private-user-images.githubusercontent.com/97237370/576998046-c51bed8b-3670-4d4c-9074-873be224fb8e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTI5NDc5MTksIm5iZiI6MTc5Mjk0NzYxOSwicGF0aCI6Ii85NzIzNzM3MC81NzY5OTgwNDYtYzUxYmVkOGItMzY3MC00ZDRjLTkwNzQtODczYmUyMjRmYjhlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjEwMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMDI1VDE3MDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJjMGYwZWRmNjdjZTFjNzUyNGNmZmIzYzQ5MTRkNDJhNjliODQ4OGUyYjkzYmRiNjY0YjA0MDMzMGNmYjhlYTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.MXm7wBFaW_oc9WEzczgqASi1yHImUWkgAq0nSavu4yw',
      'https://private-user-images.githubusercontent.com/97237370/576989590-6a32395f-9437-4192-8faf-2951a9e84cbe.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTI5NDc5MTksIm5iZiI6MTc5Mjk0NzYxOSwicGF0aCI6Ii85NzIzNzM3MC81NzY5ODk1OTAtNmEzMjM5NWYtOTQzNy00MTkyLThmYWYtMjk1MWE5ZTg0Y2JlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjEwMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMDI1VDE3MDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg3NWJkMzE2ZDFlNWQ2OTdlYTM2YWM1ZjU3NDdjNGRlNWQ0MzU3NThiZDhlNjUwNzg3NTQxYzg2MTgxZWZhY2EmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.ld4nwCR7rwPZsbewujKx3kSQqupCN2dfHGH3wieA1H0',
      'https://private-user-images.githubusercontent.com/97237370/576998753-5d4e7d07-d0b4-4406-a4c9-ed7ba90e3fe4.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTI5NDc5MTksIm5iZiI6MTc5Mjk0NzYxOSwicGF0aCI6Ii85NzIzNzM3MC81NzY5OTg3NTMtNWQ0ZTdkMDctZDBiNC00NDA2LWE0YzktZWQ3YmE5MGUzZmU0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjEwMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMDI1VDE3MDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTliNjA1YTRkNDUwNTQ2M2FlYWYwYjhmMDE3NTYyNjcwMjVhNzU5MWY3OTI1ZWI5MDE1ODJmNjM4ZmFhMDEyNTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.WMGl8ljEU-4xH7JZUf8OooTLDEX8df-fGi4I7nANrU0',

    ],
    thumbnail:
      'https://private-user-images.githubusercontent.com/97237370/576999011-98703a66-0743-439f-a721-cef7afa6ab95.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTI5NDc5MTksIm5iZiI6MTc5Mjk0NzYxOSwicGF0aCI6Ii85NzIzNzM3MC81NzY5OTkwMTEtOTg3MDNhNjYtMDc0My00MzlmLWE3MjEtY2VmN2FmYTZhYjk1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjEwMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMDI1VDE3MDAxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdiMGJkZjY2N2RjNjYxYzE1YzRkNGZlOGU1YzVlYzk5NDAxZjI2ZWYyNzIwMTc3Y2Q2YzEwMzBiYzBmYzQ4ZjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.Zo5YOAUfWhbKykBDB9aYHzwI6VJRaMz-reM7AJ5QVO8',
    repoUrl: 'https://github.com/end-4/dots-hyprland',
    downloadUrl: 'https://github.com/end-4/dots-hyprland',
  },
  {
    id: 'gakuseei-ricelin-cachyos',
    name: 'Ricelin',
    author: 'Gakuseei',
    description:
      'A hand-written Quickshell Hyprland rice on CachyOS with a warm vermilion theme.',
    longDescription:
      "Ricelin is a personal Hyprland rice where the entire shell is hand-written in Quickshell, avoiding the usual Waybar + Rofi stack. It features a warm vermilion color palette, custom widgets, and a cohesive aesthetic that feels distinct from the typical Catppuccin/Tokyo Night crowd.",
    distro: 'CachyOS',
    wm: 'Hyprland',
    tags: ['dark', 'colorful', 'minimal', 'wayland', 'tiling', 'rice'],
    screenshots: [
      'https://github.com/Gakuseei/Ricelin/raw/main/assets/hero.png',
    ],
    thumbnail:
      'https://github.com/Gakuseei/Ricelin/raw/main/assets/hero.png',
    repoUrl: 'https://github.com/Gakuseei/Ricelin',
    downloadUrl: 'https://github.com/Gakuseei/Ricelin',
  },
  {
    id: 'snowarch-inir-niri',
    name: 'iNiR',
    author: 'snowarch',
    description:
      'A feature-rich Niri shell. A complete Quickshell desktop environment for the Niri compositor.',
    longDescription:
      "iNiR is a Niri shell built with Quickshell, offering a full desktop environment experience on top of the scrollable-tiling compositor. It includes a bar, launcher, notifications, and other integrated components. One of the most starred Niri-related projects on GitHub.",
    distro: 'Arch',
    wm: 'Niri',
    tags: ['dark', 'blur', 'rounded', 'wayland', 'tiling', 'rice'],
    screenshots: [
      'https://github.com/snowarch/iNiR/raw/main/docs/images/iris-2.32-principal.webp',
      'https://github.com/snowarch/iNiR/raw/main/docs/images/iris-2.31-desktop.webp',
      'https://github.com/snowarch/iNiR/raw/main/docs/images/iris-2.31-dock.webp',
    ],
    thumbnail:
      'https://github.com/snowarch/iNiR/raw/main/docs/images/iris-2.32-principal.webp',
    repoUrl: 'https://github.com/snowarch/iNiR',
    downloadUrl: 'https://github.com/snowarch/iNiR',
  },
  {
    id: 'gh0stzk-dotfiles-bspwm-arch',
    name: 'gh0stzk dotfiles',
    author: 'gh0stzk',
    description:
      'A BSPWM environment with 18 themes and a theme selector to change on the fly.',
    longDescription:
      "One of the most comprehensive BSPWM rices available. Ships with 18 built-in themes, a visual theme switcher that applies changes instantly without restarting, a unified color system across the terminal, bar, launcher, and system utilities, plus a full Zsh and Neovim setup. X11-based, for users who prefer the traditional tiling workflow.",
    distro: 'Arch',
    wm: 'i3',
    tags: ['dark', 'colorful', 'x11', 'tiling', 'rice'],
    screenshots: [
      'https://user-images.githubusercontent.com/67278339/280174054-8f56d12d-4efa-4024-99e1-4679591b45ca.gif',
    ],
    thumbnail:
      'https://user-images.githubusercontent.com/67278339/280174054-8f56d12d-4efa-4024-99e1-4679591b45ca.gif',
    repoUrl: 'https://github.com/gh0stzk/dotfiles',
    downloadUrl: 'https://github.com/gh0stzk/dotfiles',
  },
];

export const DISTROS: Distro[] = ['Arch', 'Fedora', 'Debian', 'Ubuntu', 'CachyOS'];
export const WMS: WM[] = ['Hyprland', 'Niri', 'i3', 'Sway', 'KDE', 'GNOME'];

export const ALL_TAGS: Tag[] = Array.from(
  new Set(dotfileProjects.flatMap((p) => p.tags)),
).sort() as Tag[];