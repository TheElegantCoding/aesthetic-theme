import type { Palette } from '@global/type/color_scheme_type';

const jsTsSyntax = (colors: Palette) => {
  const { syntax } = colors;

  return [{
    name: 'Vite variable meta',
    scope: 'support.variable.property.importmeta.ts',
    settings: {
      fontStyle: 'bold',
      foreground: syntax.lightBlue
    }
  }, {
    name: 'Typeof and operator type annotation',
    scope: ['keyword.operator.expression.typeof', 'keyword.operator.type.annotation.ts'],
    settings: {
      fontStyle: 'bold',
      foreground: syntax.cyan
    }
  }];
};

export { jsTsSyntax };