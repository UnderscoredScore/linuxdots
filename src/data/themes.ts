export interface SiteTheme {
  id: string;
  name: string;
  description: string;
}

export const SITE_THEMES: SiteTheme[] = [
  { id: 'light', name: 'Light', description: 'Clean white default' },
  { id: 'dark', name: 'Dark', description: 'Standard dark' },
  { id: 'catppuccin', name: 'Catppuccin', description: 'Soft pastel mocha' },
  { id: 'dracula', name: 'Dracula', description: 'High-contrast purple' },
  { id: 'nordic', name: 'Nordic', description: 'Cool muted blue-gray' },
  { id: 'sweet', name: 'Sweet', description: 'Flashy dark purple' },
  { id: 'arc', name: 'Arc', description: 'Classic flat dark' },
  { id: 'vimix', name: 'Vimix', description: 'Subtle material' },
  { id: 'whitesur', name: 'WhiteSur', description: 'macOS-inspired clean' },
  { id: 'orchis', name: 'Orchis', description: 'Modern material rounded' },
];