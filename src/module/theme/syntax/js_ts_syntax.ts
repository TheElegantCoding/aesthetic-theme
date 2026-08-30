import type { Palette } from '@global/type/color_scheme_type';

const jsTsSyntax = (colors: Palette) => {
  const { gray, syntax } = colors;

  return [
    {
      name: 'js/ts new and instanceof keywords',
      scope: [
        'keyword.operator.new',
        'keyword.operator.expression.instanceof',
        'keyword.operator.expression.keyof',
        'keyword.operator.delete'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Vite variable meta',
      scope: 'support.variable.property.importmeta.ts',
      settings: {
        fontStyle: 'bold',
        foreground: syntax.lightBlue
      }
    },
    {
      name: 'Object literal keys',
      scope: ['meta.object-literal.key', 'meta.object-literal.key.ts'],
      settings: {
        foreground: gray.gray_400
      }
    },
    {
      name: 'Property other',
      scope: ['variable.other.property'],
      settings: {
        foreground: syntax.lightBlue
      }
    },
    {
      name: 'Export function',
      scope: ['variable.other.readwrite.alias.ts'],
      settings: {
        foreground: gray.gray_300
      }
    },
    {
      name: 'Typeof and operator type annotation',
      scope: ['keyword.operator.expression.typeof', 'keyword.operator.type.annotation.ts'],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    }
  ];
};

export { jsTsSyntax };