import { gray, cyan } from '../../../global/theme/color';

const jsTs = [
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

export { jsTs };