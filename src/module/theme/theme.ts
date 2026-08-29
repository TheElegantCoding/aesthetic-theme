import { commonSyntax } from '@module/theme/syntax/common_syntax';
import { cssSyntax } from '@module/theme/syntax/css_syntax';
import { htmlSyntax } from '@module/theme/syntax/html_syntax';
import { getJsTs } from '@module/theme/syntax/js_ts';
import { jsonSyntax } from '@module/theme/syntax/json_syntax';
import { laravelSyntax } from '@module/theme/syntax/laravel_syntax';
import { markdownSyntax } from '@module/theme/syntax/markdown_syntax';

import { getVscodeStyles } from './component/vscode_styles';

import type { ThemeType } from '@global/type/theme_type';

const createTheme = ({ colors, type, name }: ThemeType) => {
  return {
    name,
    type,
    colors: getVscodeStyles(colors),
    semanticHighlighting: true,
    semanticTokenColors: {
      // 'variable.constant': colors.syntax.cyan
      // function: colors.syntax.purple,
      // method: colors.syntax.purple,
      // parameter: colors.gray.gray_300,
      // variable: colors.gray.gray_300,
      // 'function.declaration': { foreground: colors.gray.gray_300 }
      // 'method.declaration': { foreground: colors.gray.gray_300 }
    },
    tokenColors: [
      ...commonSyntax(colors),
      ...markdownSyntax(colors),
      ...htmlSyntax(colors),
      ...cssSyntax(colors),
      ...laravelSyntax(colors),
      ...jsonSyntax(colors)
      // ...getJsTs(colors),
    ]
  };
};

export { createTheme };