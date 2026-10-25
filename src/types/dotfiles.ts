export type Distro = 'Arch' | 'Fedora' | 'Debian' | 'Ubuntu' | 'CachyOS';

export type WM = 'Hyprland' | 'Niri' | 'i3' | 'Sway' | 'KDE' | 'GNOME';

export type Tag =
  | 'dark'
  | 'light'
  | 'minimal'
  | 'colorful'
  | 'tiling'
  | 'wayland'
  | 'x11'
  | 'rice'
  | 'clean'
  | 'blur'
  | 'rounded'
  | 'material'
  | 'catppuccin'
  | 'gruvbox'
  | 'tokyo-night'
  | 'nord';

export interface DotfileProject {
  id: string;
  name: string;
  author: string;
  description: string;
  longDescription?: string;
  distro: Distro;
  wm: WM;
  tags: Tag[];
  screenshots: string[];
  thumbnail: string;
  repoUrl?: string;
  downloadUrl?: string;
  featured?: boolean;
  components?: string[];
  hidden?: boolean;
}