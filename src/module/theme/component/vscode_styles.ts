import { getBreadcrumbs } from '@module/theme/component/breadcrumbs';
import { getDiffEditor } from '@module/theme/component/diff_editor';
import { getEditor } from '@module/theme/component/editor';
import { getMenu } from '@module/theme/component/menu';
import { getTerminal } from '@module/theme/component/terminal';
import { getTitleBar } from '@module/theme/component/title_bar';

import { getActivityBar } from './activity_bar';
import { getButton } from './button';
import { getDropdown } from './dropdown';
import { getGit } from './git';
import { getGutter } from './gutter';
import { getInput } from './input';
import { getList } from './list';
import { getNotifications } from './notifications';
import { getOverviewRuler } from './overview_ruler';
import { getPeekView } from './peek_view';
import { getScrollbar } from './scrollbar';
import { getSidebar } from './sidebar';
import { getStatusBar } from './status_bar';
import { getTab } from './tab';
import { getWidget } from './widget';

import type { Palette } from '@global/type/color_scheme_type';

const getVscodeStyles = (colors: Palette) => {
  const { gray, base, blue } = colors;

  return {
    foreground: gray.gray_400,
    focusBorder: base.transparent,
    'progressBar.background': blue.blue_600,

    errorForeground: gray.gray_400,

    'badge.background': blue.blue_700,
    'badge.foreground': gray.gray_100,

    ...getEditor(colors),
    ...getTitleBar(colors),
    ...getMenu(colors),
    ...getBreadcrumbs(colors),
    ...getButton(colors),
    ...getDropdown(colors),
    ...getInput(colors),
    ...getScrollbar(colors),
    ...getList(colors),
    ...getActivityBar(colors),
    ...getSidebar(colors),
    ...getTerminal(colors),
    ...getOverviewRuler(colors),
    ...getGutter(colors),
    ...getWidget(colors),
    ...getPeekView(colors),
    ...getStatusBar(colors),
    ...getNotifications(colors),
    ...getGit(colors),
    ...getDiffEditor(colors),
    ...getTab(colors)
  };
};

export { getVscodeStyles };