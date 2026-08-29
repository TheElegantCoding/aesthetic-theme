import { getCommon } from '@module/theme/syntax/common';
import { getCss } from '@module/theme/syntax/css';
import { getHtmlSyntax } from '@module/theme/syntax/html';
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
    semanticHighlighting: true,
    semanticTokenColors: {
      // function: colors.syntax.purple,
      // method: colors.syntax.purple,
      parameter: colors.gray.gray_300,
      variable: colors.gray.gray_300,
      'function.declaration': { foreground: colors.gray.gray_300 }
      // 'method.declaration': { foreground: colors.gray.gray_300 }
    },
    tokenColors: [
      ...getCommon(colors),
      ...getJsTs(colors),
      ...getCss(colors),
      ...getJson(colors),
      ...getMarkdown(colors),
      ...getHtmlSyntax(colors)
    ]
  };
};

export { createTheme };