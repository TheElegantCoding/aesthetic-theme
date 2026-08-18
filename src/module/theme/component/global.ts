import {
  red,
  gray,
  base,
  blue,
  yellow,
  background
} from '@global/theme/color';
import { alpha } from '@global/util/alpha';
import { breadcrumbs } from '@module/theme/component/breadcrumbs';
import { diffEditor } from '@module/theme/component/diff_editor';
import { menu } from '@module/theme/component/menu';
import { terminal } from '@module/theme/component/terminal';
import { titleBar } from '@module/theme/component/title_bar';

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
  foreground: gray.gray_400,
  focusBorder: base.transparent,
  'progressBar.background': blue.blue_600,

  'editor.background': background.background_900,
  'editor.foreground': gray.gray_100,

  errorForeground: gray.gray_400,

  'badge.background': blue.blue_700,
  'badge.foreground': gray.gray_100,

  'editor.foldBackground': alpha(gray.gray_700, 0.35),
  'editor.selectionBackground': alpha(gray.gray_700, 0.4),
  'editor.inactiveSelectionBackground': alpha(gray.gray_700, 0.4),
  'editor.selectionHighlightBackground': alpha(gray.gray_700, 0.5),
  'editor.wordHighlightStrongBackground': alpha(gray.gray_700, 0.5),
  'editor.wordHighlightBackground': alpha(gray.gray_700, 0.5),
  'editor.findMatchBackground': alpha(gray.gray_700, 0.5),
  'editor.findMatchHighlightBackground': alpha(gray.gray_700, 0.5),
  'editor.lineHighlightBackground': alpha(gray.gray_700, 0.2),
  'editorBracketMatch.background': alpha(gray.gray_700, 0.35),
  'editor.wordHighlightBorder': gray.gray_400,
  'editor.wordHighlightStrongBorder': gray.gray_400,
  'editor.selectionHighlightBorder': gray.gray_400,

  'editorCursor.foreground': gray.gray_300,
  'editorError.foreground': red.red_500,

  'editorGroup.border': gray.gray_400,
  'editorGroupHeader.border': base.transparent,
  'editorIndentGuide.background': gray.gray_700,
  'editorInfo.foreground': blue.blue_600,

  'editorLink.activeForeground': blue.blue_400,

  'editorMarkerNavigation.background': background.background_900,
  'editorMarkerNavigationError.background': red.red_600,
  'editorMarkerNavigationInfo.background': blue.blue_600,
  'editorMarkerNavigationWarning.background': yellow.yellow_600,

  'editorWarning.foreground': yellow.yellow_600,
  'editorWhitespace.foreground': gray.gray_900,

  ...titleBar,
  ...menu,
  ...breadcrumbs,
  ...button,
  ...dropdown,
  ...input,
  ...scrollbar,
  ...list,
  ...activityBar,
  ...sidebar,
  ...tab,
  ...terminal,
  ...overviewRuler,
  ...gutter,
  ...widget,
  ...peekView,
  ...statusBar,
  ...notifications,
  ...git,
  ...diffEditor
};

export { global };