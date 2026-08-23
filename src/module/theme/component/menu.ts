import type { Palette } from '@global/type/color_scheme_type';

const getMenu = (colors: Palette) => {
  const { base, gray, background } = colors;

  return {
    'menu.background': background.background_800,
    'menu.border': base.transparent,
    'menu.foreground': gray.gray_300,
    'menu.selectionBackground': background.background_700,
    'menu.selectionForeground': gray.gray_300,
    'menu.separatorBackground': background.background_600,
    'menu.selectionBorder': base.transparent,
    'menubar.selectionBorder': base.transparent
  };
};

export { getMenu };