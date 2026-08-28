import type { Palette } from '@global/type/color_scheme_type';

const getList = (colors: Palette) => {
  const {
    red,
    gray,
    base,
    blue,
    background
  } = colors;

  return {
    'list.dropBackground': base.black,
    'list.focusAndSelectionOutline': base.transparent,
    'list.focusBackground': background.background_700,
    'list.focusForeground': gray.gray_200,
    'list.focusOutline': base.transparent,
    'list.inactiveFocusBackground': background.background_800,

    'listFilterWidget.noMatchesOutline': red.red_600,
    'listFilterWidget.outline': gray.gray_900,
    'listFilterWidget.shadow': base.black,
    'list.highlightForeground': blue.blue_500,
    'list.filterWidget.background': background.background_800,
    'list.filterWidget.outline': gray.gray_400,
    'list.filterWidget.noMatchesOutline': red.red_600,

    'tree.indentGuidesStroke': gray.gray_800
  };
};

export { getList };