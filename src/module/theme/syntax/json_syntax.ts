import type { Palette } from '@global/type/color_scheme_type';

const jsonSyntax = (colors: Palette) => {
  const { syntax } = colors;

  return [
    {
      name: 'json boolean, null, number, string',
      scope: 'constant.language.json',
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'JSON key',
      scope: 'support.type.property-name.json',
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'JSON value',
      scope: 'string.quoted.double.json',
      settings: {
        foreground: syntax.green
      }
    }
  ];
};

export { jsonSyntax };