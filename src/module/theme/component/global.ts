import { gray, base, blue } from '@global/style/color';
import { breadcrumbs } from '@module/theme/component/breadcrumbs';
import { diffEditor } from '@module/theme/component/diff_editor';
import { editor } from '@module/theme/component/editor';
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

const vscodeStyles = {
  foreground: gray.gray_400,
  focusBorder: base.transparent,
  'progressBar.background': blue.blue_600,

  errorForeground: gray.gray_400,

  'badge.background': blue.blue_700,
  'badge.foreground': gray.gray_100,

  ...editor,
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

export { vscodeStyles };