import { getCommon } from '@module/theme/syntax/common';
import { getCss } from '@module/theme/syntax/css';
import { getJsTs } from '@module/theme/syntax/js_ts';
import { getJson } from '@module/theme/syntax/json';
import { getMarkdown } from '@module/theme/syntax/markdown';

import { getVscodeStyles } from './component/vscode_styles';

import type { ThemeType } from '@global/type/theme_type';

const createTheme = ({ colors, type, name }: ThemeType) => {
  return {
    name,
    type,
    colors: getVscodeStyles(colors),
    tokenColors: [
      ...getJsTs(colors),
      ...getCommon(colors),
      ...getCss(colors),
      ...getJson(colors),
      ...getMarkdown(colors)
    ]
  };
};

export { createTheme };