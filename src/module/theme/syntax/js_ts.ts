import type { Palette } from '@global/type/color_scheme_type';

const getJsTs = (colors: Palette) => {
  const { gray, syntax } = colors;

  return [
    {
      name: 'TS types',
      scope: 'support.type.primitive.ts',
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'Template string',
      scope: 'meta.template.expression.ts',
      settings: {
        foreground: gray.gray_300
      }
    },
    {
      name: 'Vite variable meta',
      scope: 'support.variable.property.importmeta.ts',
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'New expression constructor',
      scope: [
        'keyword.operator.new + entity.name.type',
        'keyword.operator.new + support.class',
        'meta.new entity.name.type',
        'meta.new support.class'
      ],
      settings: {
        foreground: syntax.cyan
      }
    }
  ];
};

export { getJsTs };