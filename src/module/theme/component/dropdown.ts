import type { Palette } from '@global/type/color_scheme_type';

const getDropdown = (colors: Palette) => {
  const { base, gray, background } = colors;

  return {
    'dropdown.background': background.background_700,
    'dropdown.border': base.transparent,
    'dropdown.foreground': gray.gray_100
  };
};

export { getDropdown };