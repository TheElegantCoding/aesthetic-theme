import type { Palette } from '@global/type/color_scheme_type';

const getHtmlSyntax = (colors: Palette) => {
  const { syntax } = colors;

  return [{
    name: 'HTML deprecated tag',
    scope: 'invalid.deprecated.entity.other.attribute-name.html',
    settings: {
      foreground: syntax.amber
    }
  }];
};

export { getHtmlSyntax };