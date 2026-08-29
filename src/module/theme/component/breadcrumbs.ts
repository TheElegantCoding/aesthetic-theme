import type { Palette } from '@global/type/color_scheme_type';

const getBreadcrumbs = (colors: Palette) => {
  const { gray, background } = colors;

  return {
    'breadcrumb.background': background.background_950,
    'breadcrumb.focusForeground': gray.gray_200,
    'breadcrumb.foreground': gray.gray_400
  };
};

export { getBreadcrumbs };