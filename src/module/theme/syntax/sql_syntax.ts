import type { Palette } from '@global/type/color_scheme_type';

const sqlSyntax = (colors: Palette) => {
  const { syntax } = colors;

  return [{
    name: 'Keyword SQL',
    scope: 'keyword.other.DML',
    settings: {
      foreground: syntax.cyan
    }
  }];
};

export { sqlSyntax };