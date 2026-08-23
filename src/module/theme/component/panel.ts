import type { Palette } from '@global/type/color_scheme_type';

const getPanel = (colors: Palette) => {
  const { gray, background } = colors;

  return {
    'panel.background': background.background_900,
    'panel.border': gray.gray_500,
    'panelTitle.activeBorder': gray.gray_500,
    'panelTitle.activeForeground': gray.gray_200,
    'panelTitle.inactiveForeground': gray.gray_600,
    'panelTitle.inactiveBackground': background.background_800
  };
};

export { getPanel };