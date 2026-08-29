import type { Palette } from '@global/type/color_scheme_type';

const haskellSyntax = (colors: Palette) => {
  const { gray, syntax } = colors;

  return [{
    name: 'haskell storage type',
    scope: 'keyword.other.type.haskell',
    settings: {
      foreground: syntax.cyan
    }
  }];
};

export { haskellSyntax };