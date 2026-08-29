import type { Palette } from '@global/type/color_scheme_type';

const getHtmlSyntax = (colors: Palette) => {
  const {
    amber
  } = colors;

  return [{
    name: 'HTML deprecated tag',
    scope: 'invalid.deprecated.entity.other.attribute-name.html',
    settings: {
      foreground: amber.amber_600
    }
  }];
};

export { getHtmlSyntax };