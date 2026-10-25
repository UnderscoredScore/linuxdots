# Contributing to LinuxDots

Thanks for your interest in contributing! This project curates and showcases desktop dotfiles from the Linux community.

## How to Contribute

### Adding a Dotfile Project

1. Fork the repository.
2. Add your project entry to `src/data/dotfiles.ts`.
3. Follow the existing `DotfileProject` type structure:
   - `id`: unique kebab-case identifier
   - `name`: project display name
   - `author`: your handle
   - `description`: one-line summary
   - `longDescription`: optional detailed description
   - `distro`: one of `Arch`, `Fedora`, `Debian`, `Ubuntu`
   - `wm`: one of `Hyprland`, `Niri`, `i3`, `Sway`, `KDE`, `GNOME`
   - `tags`: relevant tags (see `Tag` type)
   - `screenshots`: array of image URLs (at least one)
   - `thumbnail`: preview image URL
   - `repoUrl`: optional link to your dotfiles repo
   - `featured`: optional boolean
4. Make sure images are high-quality and representative of the setup.
5. Submit a pull request.

### Reporting Issues

Open an issue with:
- What you expected
- What actually happened
- Browser and OS
- Screenshots if applicable

### Code Style

- Run `npm run lint` and `npm run format` before committing.
- Follow the existing component patterns.

## Questions?

Open a discussion or reach out via GitHub.