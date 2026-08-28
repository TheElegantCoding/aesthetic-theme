import type { Palette } from '@global/type/color_scheme_type';

const getButton = (colors: Palette) => {
  const { blue, gray } = colors;

  return {
    'button.background': blue.blue_800,
    'button.foreground': gray.gray_200,
    'button.hoverBackground': blue.blue_700,
    'button.secondaryBackground': gray.gray_600,
    'button.secondaryForeground': gray.gray_100,
    'button.secondaryHoverBackground': gray.gray_500,

    'textLink.foreground': blue.blue_500
  };
};

export { getButton };