import { commonSyntax } from '@module/theme/syntax/common_syntax';
import { cssSyntax } from '@module/theme/syntax/css_syntax';
import { haskellSyntax } from '@module/theme/syntax/haskel_syntax';
import { htmlSyntax } from '@module/theme/syntax/html_syntax';
import { jsTsSyntax } from '@module/theme/syntax/js_ts_syntax';
import { jsonSyntax } from '@module/theme/syntax/json_syntax';
import { markdownSyntax } from '@module/theme/syntax/markdown_syntax';

import { getVscodeStyles } from './component/vscode_styles';

import type { ThemeType } from '@global/type/theme_type';

const createTheme = ({
  colors,
  type,
  name,
  author,
  maintainers,
  semanticClass
}: ThemeType) => {
  return {
    name,
    type,
    semanticClass,
    author,
    maintainers,
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
      ...jsonSyntax(colors),
      ...jsTsSyntax(colors),
      ...haskellSyntax(colors)
    ]
  };
};

export { createTheme };