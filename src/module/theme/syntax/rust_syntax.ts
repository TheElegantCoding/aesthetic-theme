import type { Palette } from '@global/type/color_scheme_type';

const rustSyntax = (colors: Palette) => {
  const { gray, syntax } = colors;

  return [
    {
      name: 'rust punctuation',
      scope: ['keyword.operator.access.dot.rust'],
      settings: {
        foreground: gray.gray_300
      }
    },
    {
      name: 'rust macros',
      scope: ['entity.name.function.macro.rust'],
      settings: {
        foreground: syntax.purple
      }
    },
    {
      name: 'variable.other.rust',
      scope: ['variable.other.rust'],
      settings: {
        foreground: syntax.amber
      }
    }
  ];
};

export { rustSyntax };