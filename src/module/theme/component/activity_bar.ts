import type { Palette } from '@global/type/color_scheme_type';

const getActivityBar = (colors: Palette) => {
  const {
    base,
    blue,
    gray,
    background
  } = colors;

  return {
    'activityBar.foreground': gray.gray_200,
    'activityBar.background': background.background_950,
    'activityBar.dropBackground': background.background_950,
    'activityBar.inactiveForeground': gray.gray_600,
    'activityBarBadge.background': blue.blue_700,
    'activityBarBadge.foreground': gray.gray_200,
    'activityBar.border': base.transparent
  };
};

export { getActivityBar };