# Pull Request

## What this PR does

One or two sentences. Link the related issue if there is one. For example: "Adds the HYPER·AERO rice to the gallery. Closes #12."

## Type of change

- [ ] Bug fix
- [ ] New rice added to `src/data/dotfiles.ts`
- [ ] UI or styling change
- [ ] New site theme added to `src/index.css` and `src/data/themes.ts`
- [ ] Refactor or cleanup with no visual change
- [ ] Documentation or issue template change
- [ ] Other (describe above)

## Checklist

- [ ] `npm run build` passes locally (dis runs `tsc -b` and `vite build`)
- [ ] `npm run lint` passes locally (Oxlint)
- [ ] `npm run format` has been run (Prettier)
- [ ] I have tested this on the dev server at `http://localhost:5173`

## If this PR adds a rice

- [ ] The entry follows the `DotfileProject` schema in `src/types/dotfiles.ts`
- [ ] `distro` is one of `Arch`, `Fedora`, `Debian`, `Ubuntu`, `CachyOS`
- [ ] `wm` is one of `Hyprland`, `Niri`, `i3`, `Sway`, `KDE`, `GNOME`
- [ ] Every tag in `tags` exists in the `Tag` union. If a new tag is needed, it has already been added to the union in a separate or combined commit
- [ ] `thumbnail` and every entry in `screenshots` use GitHub raw URLs (`raw.githubusercontent.com`), not `github.com/.../blob/...`
- [ ] The repository is public
- [ ] The screenshots are mine or I have permission to use them
- [ ] The project is actively maintained (last commit within ~12 months)

## If this PR changes UI or theming

- [ ] I have checked the change in the `light` and `dark` themes
- [ ] I have checked the change in at least one custom theme (Catppuccin, Dracula, Nordic, etc.)
- [ ] I have checked the change on a narrow viewport (mobile width)
- [ ] If I added a theme, its color tokens are complete (base-100, base-200, base-300, base-content, primary, primary-content, secondary, accent, neutral, info, success, warning, error)

## Screenshots or recordings

If the PR changes the UI, paste before/after screenshots or a short recording. Drag images directly into this box.

## Anything else

Notes for the reviewer. Edge cases, things you were not sure about, follow-ups you want to do later.