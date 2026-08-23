import type { Palette } from '@global/type/color_scheme_type';

const getTitleBar = (colors: Palette) => {
  const { gray, base, background } = colors;

  return {
    'titleBar.background': background.background_900,
    'titleBar.activeBackground': background.background_900,
    'titleBar.activeForeground': gray.gray_200,
    'titleBar.inactiveBackground': background.background_900,
    'titleBar.inactiveForeground': gray.gray_200,
    'titleBar.border': base.transparent
  };
};

export { getTitleBar };