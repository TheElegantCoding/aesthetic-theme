import type { Palette } from '@global/type/color_scheme_type';

const apacheSyntax = (colors: Palette) => {
  const { syntax } = colors;

  return [{
    name: 'Apache tag',
    scope: ['entity.tag.apacheconf'],
    settings: {
      foreground: syntax.cyan
    }
  }, {
    name: 'Apache mime types',
    scope: ['entity.mime-type.apacheconf'],
    settings: {
      foreground: syntax.green
    }
  }];
};

export { apacheSyntax };