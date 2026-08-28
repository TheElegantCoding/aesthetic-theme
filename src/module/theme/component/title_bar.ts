import type { Palette } from '@global/type/color_scheme_type';

const getTitleBar = (colors: Palette) => {
  const { gray, base, background } = colors;

  return {
    'titleBar.background': background.background_950,
    'titleBar.activeBackground': background.background_950,
    'titleBar.activeForeground': gray.gray_400,
    'titleBar.inactiveBackground': background.background_950,
    'titleBar.inactiveForeground': gray.gray_400,
    'titleBar.border': base.transparent
  };
};

export { getTitleBar };