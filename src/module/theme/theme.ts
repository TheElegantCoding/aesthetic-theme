import { apacheSyntax } from '@module/theme/syntax/apache_syntax';
import { commonSyntax } from '@module/theme/syntax/common_syntax';
import { cssSyntax } from '@module/theme/syntax/css_syntax';
import { envSyntax } from '@module/theme/syntax/env_syntax';
import { graphqlSyntax } from '@module/theme/syntax/graphql_syntax';
import { htmlSyntax } from '@module/theme/syntax/html_syntax';
import { jsTsSyntax } from '@module/theme/syntax/js_ts_syntax';
import { jsonSyntax } from '@module/theme/syntax/json_syntax';
import { markdownSyntax } from '@module/theme/syntax/markdown_syntax';
import { rustSyntax } from '@module/theme/syntax/rust_syntax';
import { sqlSyntax } from '@module/theme/syntax/sql_syntax';
import { ymlSyntax } from '@module/theme/syntax/yml_syntax';

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
      parameter: colors.gray.gray_300,
      'parameter.declaration': colors.syntax.amber,
      'property.declaration': colors.syntax.lightBlue,
      'variable.defaultLibrary': { foreground: colors.syntax.cyan, fontStyle: 'bold' },
      'property.defaultLibrary': { foreground: colors.syntax.cyan, fontStyle: 'bold' },
      variable: colors.gray.gray_300
    },
    tokenColors: [
      ...commonSyntax(colors),
      ...markdownSyntax(colors),
      ...htmlSyntax(colors),
      ...cssSyntax(colors),
      ...jsonSyntax(colors),
      ...jsTsSyntax(colors),
      ...envSyntax(colors),
      ...rustSyntax(colors),
      ...ymlSyntax(colors),
      ...apacheSyntax(colors),
      ...graphqlSyntax(colors),
      ...sqlSyntax(colors)
    ]
  };
};

export { createTheme };