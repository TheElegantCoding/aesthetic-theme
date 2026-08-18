import { gray, base, background } from '@global/theme/color';
import { alpha } from '@global/util/alpha';

const sidebar = {
  'sideBar.background': background.background_900,
  'sideBar.foreground': gray.gray_400,
  'sideBar.border': background.background_700,
  'sideBarTitle.foreground': gray.gray_400,
  'sideBarSectionHeader.background': background.background_800,
  'sideBarSectionHeader.foreground': gray.gray_200,
  'sideBar.dropBackground': background.background_600,
  'sideBarSectionHeader.border': background.background_700,

  'list.inactiveSelectionBackground': alpha(gray.gray_600, 0.4),
  'list.inactiveSelectionForeground': gray.gray_300,
  'list.hoverBackground': alpha(gray.gray_700, 0.35),
  'list.hoverForeground': gray.gray_300,
  'list.activeSelectionBackground': alpha(gray.gray_600, 0.4),
  'list.activeSelectionForeground': gray.gray_300,
  'list.dropBackground': base.transparent
};

export { sidebar };