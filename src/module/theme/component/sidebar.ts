import { alpha } from '@global/util/alpha';

import type { Palette } from '@global/type/color_scheme_type';

const getSidebar = (colors: Palette) => {
  const { gray, base, background } = colors;

  return {
    'sideBar.background': background.background_950,
    'sideBar.foreground': alpha(gray.gray_400, 0.8),
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
};

export { getSidebar };