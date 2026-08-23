import type { Palette } from '@global/type/color_scheme_type';

const getScrollbar = (colors: Palette) => {
  const { base, background } = colors;

  return {
    'scrollbar.shadow': base.black,
    'scrollbarSlider.background': background.background_800,
    'scrollbarSlider.hoverBackground': background.background_700,
    'scrollbarSlider.activeBackground': background.background_600
  };
};

export { getScrollbar };