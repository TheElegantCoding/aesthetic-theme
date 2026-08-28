import type { Palette } from '@global/type/color_scheme_type';

const getBreadcrumbs = (colors: Palette) => {
  const { gray, neutral, background } = colors;

  return {
    'breadcrumb.background': background.background_950,
    'breadcrumb.focusForeground': gray.gray_100,
    'breadcrumb.foreground': neutral.neutral_400
  };
};

export { getBreadcrumbs };