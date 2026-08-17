import {
  red,
  gray,
  base,
  blue,
  yellow,
  neutral,
  background
} from '../../../global/theme/color';
import { alpha } from '../../../global/util/alpha';
import { activityBar } from './activity_bar';
import { button } from './button';
import { dropdown } from './dropdown';
import { git } from './git';
import { gutter } from './gutter';
import { input } from './input';
import { list } from './list';
import { notifications } from './notifications';
import { overviewRuler } from './overview_ruler';
import { peekView } from './peek_view';
import { scrollbar } from './scrollbar';
import { sidebar } from './sidebar';
import { statusBar } from './status_bar';
import { tab } from './tab';
import { widget } from './widget';

const global = {
  'badge.background': blue.blue_700,
  'badge.foreground': gray.gray_100,

  'breadcrumb.background': background.background_900,
  'breadcrumb.focusForeground': gray.gray_100,
  'breadcrumb.foreground': gray.gray_400,

  'diffEditor.border': gray.gray_400,
  'diffEditor.insertedTextBackground': alpha(yellow.yellow_600, 0.35),
  'diffEditor.insertedTextBorder': gray.gray_500,
  'diffEditor.removedTextBackground': alpha(red.red_600, 0.35),
  'diffEditor.removedTextBorder': gray.gray_500,

  'editor.background': background.background_900,
  'editor.foldBackground': alpha(blue.blue_600, 0.2),
  'editor.foreground': gray.gray_100,
  'editor.inactiveSelectionBackground': alpha(blue.blue_900, 0.45),
  'editorBracketMatch.background': background.background_600,

  'editor.selectionBackground': alpha(neutral.neutral_600, 0.5),
  'editor.selectionHighlightBackground': alpha(neutral.neutral_600, 0.5),
  'editor.wordHighlightStrongBackground': alpha(neutral.neutral_600, 0.5),
  'editor.wordHighlightBackground': alpha(neutral.neutral_600, 0.5),
  'editor.findMatchBackground': alpha(neutral.neutral_600, 0.5),
  'editor.findMatchHighlightBackground': alpha(neutral.neutral_600, 0.5),
  'editor.lineHighlightBackground': alpha(background.background_800, 0.5),
  'editor.wordHighlightBorder': neutral.neutral_400,
  'editor.wordHighlightStrongBorder': neutral.neutral_400,
  'editor.selectionHighlightBorder': neutral.neutral_400,

  'editorCodeLens.foreground': gray.gray_400,

  'editorCursor.foreground': gray.gray_300,
  'editorError.foreground': red.red_500,

  'editorGroup.border': gray.gray_400,
  'editorGroupHeader.border': base.transparent,
  'editorIndentGuide.background': gray.gray_900,
  'editorInfo.foreground': blue.blue_600,

  'editorLineNumber.activeForeground': gray.gray_400,
  'editorLineNumber.foreground': gray.gray_600,
  'editorLink.activeForeground': blue.blue_400,
  'editorMarkerNavigation.background': background.background_900,

  'editorMarkerNavigationError.background': red.red_600,
  'editorMarkerNavigationInfo.background': blue.blue_600,
  'editorMarkerNavigationWarning.background': yellow.yellow_600,

  'editorWarning.foreground': yellow.yellow_600,
  'editorWhitespace.foreground': gray.gray_900,

  errorForeground: gray.gray_400,
  focusBorder: base.transparent,
  foreground: gray.gray_400,

  'progressBar.background': blue.blue_600,

  'titleBar.background': background.background_900,
  'titleBar.activeBackground': background.background_900,
  'titleBar.activeForeground': gray.gray_200,
  'titleBar.inactiveBackground': background.background_900,
  'titleBar.inactiveForeground': gray.gray_200,
  'titleBar.border': base.transparent,

  'menu.background': background.background_800,
  'menu.border': base.transparent,
  'menu.foreground': gray.gray_300,
  'menu.selectionBackground': background.background_700,
  'menu.selectionForeground': gray.gray_300,
  'menu.separatorBackground': background.background_600,

  ...button,
  ...dropdown,
  ...input,
  ...scrollbar,
  ...list,
  ...activityBar,
  ...sidebar,
  ...tab,
  ...overviewRuler,
  ...gutter,
  ...widget,
  ...peekView,
  ...statusBar,
  ...notifications,
  ...git
};

export { global };