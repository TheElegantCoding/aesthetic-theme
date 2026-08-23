import {
  red,
  gray,
  blue,
  base,
  green,
  yellow,
  purple,
  background
} from '@global/style/color';
import { alpha } from '@global/util/alpha';

const editor = {
  'editor.background': background.background_900,
  'editor.foreground': gray.gray_100,
  'editorCursor.foreground': gray.gray_300,
  'editorCursor.background': gray.gray_950,

  'editorGroup.border': gray.gray_400,
  'editorGroupHeader.border': base.transparent,

  'editorError.foreground': red.red_500,
  'editorWarning.foreground': yellow.yellow_500,
  'editorInfo.foreground': blue.blue_500,

  'editor.selectionBackground': alpha(gray.gray_700, 0.4),
  'editor.inactiveSelectionBackground': alpha(gray.gray_700, 0.4),
  'editorWhitespace.foreground': gray.gray_800,

  'editor.selectionHighlightBackground': alpha(gray.gray_700, 0.5),
  'editor.selectionHighlightBorder': gray.gray_400,

  'editor.findMatchBackground': alpha(gray.gray_700, 0.5),
  'editor.findMatchHighlightBackground': alpha(gray.gray_700, 0.5),
  'editor.findMatchBorder': gray.gray_400,
  'editor.findMatchHighlightBorder': gray.gray_400,
  'editor.rangeHighlightBackground': alpha(gray.gray_700, 0.5),

  'editor.wordHighlightStrongBackground': alpha(gray.gray_700, 0.5),
  'editor.wordHighlightBackground': alpha(gray.gray_700, 0.5),
  'editor.wordHighlightBorder': gray.gray_400,
  'editor.wordHighlightStrongBorder': gray.gray_400,

  'editor.foldBackground': alpha(gray.gray_700, 0.35),
  'editor.lineHighlightBackground': alpha(gray.gray_700, 0.2),
  'editorBracketMatch.background': alpha(gray.gray_700, 0.35),
  'editorIndentGuide.background': gray.gray_700,
  'editorGutter.foldingControlForeground': gray.gray_300,

  'editorLink.activeForeground': blue.blue_500,

  'editorMarkerNavigation.background': background.background_900,
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

export { editor };