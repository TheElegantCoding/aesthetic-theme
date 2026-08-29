import { alpha } from '@global/util/alpha';

import type { Palette } from '@global/type/color_scheme_type';

const getEditor = (colors: Palette) => {
  const {
    red,
    gray,
    blue,
    base,
    green,
    yellow,
    purple,
    background
  } = colors;

  const selectionBase = alpha(gray.gray_600, 0.4);
  const subSelectionBase = alpha(gray.gray_500, 0.4);
  const selectionBorder = base.transparent;

  return {
    'editor.background': background.background_950,
    'editor.foreground': gray.gray_300,
    'editorCursor.foreground': gray.gray_300,
    'editorCursor.background': gray.gray_950,

    'editorGroup.border': gray.gray_400,
    'editorGroupHeader.border': base.transparent,

    'editorError.foreground': red.red_500,
    'editorWarning.foreground': yellow.yellow_500,
    'editorInfo.foreground': blue.blue_500,

    'editor.selectionBackground': selectionBase,
    'editor.inactiveSelectionBackground': subSelectionBase,
    'editorWhitespace.foreground': gray.gray_800,

    'editor.selectionHighlightBackground': selectionBase,
    'editor.selectionHighlightBorder': selectionBorder,

    'editor.findMatchBackground': selectionBase,
    'editor.findMatchBorder': selectionBorder,
    'editor.findMatchHighlightBackground': selectionBase,
    'editor.findMatchHighlightBorder': selectionBorder,
    'editor.rangeHighlightBackground': subSelectionBase,
    'editor.rangeHighlightBorder': selectionBorder,

    'editor.wordHighlightStrongBackground': selectionBase,
    'editor.wordHighlightBackground': selectionBase,
    'editor.wordHighlightBorder': selectionBorder,
    'editor.wordHighlightStrongBorder': selectionBorder,

    'editor.foldBackground': selectionBase,
    'editor.lineHighlightBackground': alpha(gray.gray_600, 0.3),
    'editorBracketMatch.background': alpha(gray.gray_700, 0.35),
    'editorIndentGuide.background': gray.gray_800,
    'editorGutter.foldingControlForeground': gray.gray_300,

    'editorLink.activeForeground': blue.blue_500,

    'editorMarkerNavigation.background': background.background_950,
    'editorMarkerNavigationError.background': red.red_600,
    'editorMarkerNavigationInfo.background': blue.blue_600,
    'editorMarkerNavigationWarning.background': yellow.yellow_600,

    'merge.currentHeaderBackground': alpha(green.green_500, 0.35),
    'merge.currentContentBackground': alpha(green.green_500, 0.35),
    'merge.incomingHeaderBackground': alpha(purple.purple_500, 0.35),
    'merge.incomingContentBackground': alpha(purple.purple_600, 0.35),
    'merge.commonHeaderBackground': alpha(gray.gray_600, 0.35),
    'merge.commonContentBackground': alpha(gray.gray_700, 0.35)
  };
};

export { getEditor };