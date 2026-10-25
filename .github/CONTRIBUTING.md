```markdown
# Contributing to LinuxDots

Thanks for wanting to help. LinuxDots is a curated gallery of Linux desktop rices for Hyprland, Niri, i3, Sway, KDE and GNOME, across Arch, Fedora, Debian and Ubuntu. There are two ways to contribute: submit your rice, or fix the site itself.

---

## Submitting a rice

You can do this two ways. Pick whichever is easier.

### Option 1: Open an issue (easiest)

Use the [Add dotfiles](https://github.com/UnderscoredScore/linuxdots/issues/new?template=add_dotfiles.yml) issue template. Fill in the form with project name, repo URL, distro, WM, tags and screenshot URLs. A maintainer will add it to the gallery.

### Option 2: Open a pull request (fastest)

1. Fork the repository.
2. Add an entry to [`src/data/dotfiles.ts`](src/data/dotfiles.ts).
3. Run `npm run build` and `npm run lint` locally. Both must pass.
4. Open a pull request against `main`.

---

## Rice submission rules

To keep the gallery useful, every listed rice must meet these:

- **Public repository.** GitHub, GitLab or Codeberg. Private repos cannot be listed.
- **Actively maintained.** Last commit within the last 12 months, or the repo clearly states it is finished and stable.
- **Real screenshots.** At least one image showing the actual desktop. No mockups, no wallpapers alone.
- **You own the screenshots** or have explicit permission to use them.
- **No malicious content.** No crypto miners, no telemetry, no auto-install scripts that touch the user system without consent.

Rices that install with `git clone` and `./install.sh` are ideal. Rices that require manual copy-pasting are fine but note it in `longDescription`.

---

## The `DotfileProject` schema

Every entry in `src/data/dotfiles.ts` matches this shape (see [`src/types/dotfiles.ts`](src/types/dotfiles.ts)):

```ts
{
  id: string;                    // unique, kebab-case, e.g. "glyph-hyprland-arch"
  name: string;                  // display name
  author: string;                // GitHub handle, no @
  description: string;           // one line, shown on the card
  longDescription?: string;      // optional, shown in the detail modal
  distro: Distro;                // "Arch" | "Fedora" | "Debian" | "Ubuntu" | "CachyOS"
  wm: WM;                        // "Hyprland" | "Niri" | "i3" | "Sway" | "KDE" | "GNOME"
  tags: Tag[];                   // see the Tag union below
  screenshots: string[];         // ordered list, first one is the hero
  thumbnail: string;             // usually screenshots[0], can be a smaller version
  repoUrl?: string;              // add the repo url of the rice (it's required btw)
  featured?: boolean;            // add this only if you are adding your own dot files and you want to be featured
  hidden?: boolean;              // set to true to keep the entry but hide it from the gallery
  components?: string[];         // reserved for the future Components section
}
```

### Valid values

**`distro`**: `Arch`, `Fedora`, `Debian`, `Ubuntu`, `CachyOS`

**`wm`**: `Hyprland`, `Niri`, `i3`, `Sway`, `KDE`, `GNOME`

**`tags`**: `dark`, `light`, `minimal`, `colorful`, `tiling`, `wayland`, `x11`, `rice`, `clean`, `blur`, `rounded`, `material`, `catppuccin`, `gruvbox`, `tokyo-night`, `nord`

If your rice needs a tag that is not in this list, open an issue first. We will add it to the union in `src/types/dotfiles.ts` so it is type-safe everywhere.

### Image URLs

Use **GitHub raw URLs**, not `github.com/.../blob/...` links. The blob URLs render HTML, not images.

Good:

```
https://raw.githubusercontent.com/Nebelung-cloud/glyph-rice/main/screenshots/desktop.png
```

Bad:

```
https://github.com/Nebelung-cloud/glyph-rice/blob/main/screenshots/desktop.png
```

For other hosts like Imgur or personal sites, make sure the URL serves the image directly, not a viewer page.

### Example entry

```ts
{
  id: 'glyph-hyprland-arch',
  name: 'Glyph',
  author: 'Nebelung-cloud',
  description:
    'A Nothing OS-inspired rice for Hyprland and Quickshell. Black, white dots, one red.',
  longDescription:
    'Glyph is a Hyprland and Quickshell desktop themed after Nothing OS. Dark and light palettes. GPL-3.0.',
  distro: 'Arch',
  wm: 'Hyprland',
  tags: ['dark', 'light', 'minimal', 'rounded', 'wayland', 'tiling', 'rice'],
  screenshots: [
    'https://raw.githubusercontent.com/Nebelung-cloud/glyph-rice/main/screenshots/desktop.png',
    'https://raw.githubusercontent.com/Nebelung-cloud/glyph-rice/main/screenshots/launcher.png',
  ],
  thumbnail:
    'https://raw.githubusercontent.com/Nebelung-cloud/glyph-rice/main/screenshots/desktop.png',
  repoUrl: 'https://github.com/Nebelung-cloud/glyph-rice',
},
```

---

## Fixing a bug or changing the UI

### Setup

```bash
git clone https://github.com/UnderscoredScore/linuxdots.git
cd linuxdots
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

### Before opening a PR

- `npm run build` must pass. This runs `tsc -b` (type check) and `vite build`.
- `npm run lint` must pass. This runs Oxlint.
- `npm run format` before committing. This runs Prettier.
- If you changed data, check the gallery renders, filters work, and the detail modal opens.
- If you changed UI, check both light and dark themes and at least one custom theme like Catppuccin or Dracula.

### Code style

- Prettier handles formatting. Do not hand-format.
- Oxlint handles linting. Do not disable rules inline without a comment explaining why.
- Components are functional. Use `type` (not `interface`) for props unless extending.
- No default exports except `App.tsx`. Everything else is named exports.
- Prefer daisyUI semantic classes like `bg-base-100`, `text-base-content`, `btn` and `card` over hardcoded colors so themes keep working.

---

## Reporting a bug

Use the [Bug report](https://github.com/UnderscoredScore/linuxdots/issues/new?template=bug_report.yml) template. Include:

- Page URL
- What you expected vs what happened
- Steps to reproduce
- Browser and version
- OS
- Console errors if any (DevTools, Console panel)

Screenshots help but are not required for obvious bugs.

---

## What we will not accept

- Rices that are not public repos
- Mockup or Fake screenshots instead of real ones (The screenshots should match the rice's looks)
- Self-promotion that does not match the schema (blog posts, yt channels, affiliate links etc.)
- Removal requests from anyone other than the repo owner or screenshot copyright holder

---

## Questions

Open a [discussion](https://github.com/UnderscoredScore/linuxdots/discussions) or an issue with the `question` label.
```