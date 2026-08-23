import type { Palette } from '@global/type/color_scheme_type';

const getJsTs = (colors: Palette) => {
  const { gray, cyan } = colors;

  return [
    {
      name: 'TS types',
      scope: 'support.type.primitive.ts',
      settings: {
        fontStyle: 'bold',
        foreground: cyan.cyan_600
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
      scope: 'support.variable.property.importmeta.tsx',
      settings: {
        foreground: gray.gray_300
      }
    }
  ];
};

export { getJsTs };