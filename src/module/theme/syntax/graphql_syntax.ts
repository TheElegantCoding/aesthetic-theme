import type { Palette } from '@global/type/color_scheme_type';

const graphqlSyntax = (colors: Palette) => {
  const { syntax } = colors;

  return [
    {
      name: 'GraphQL function name',
      scope: ['entity.name.function.graphql'],
      settings: {
        foreground: syntax.purple
      }
    },
    {
      name: 'GraphQL variable',
      scope: ['variable.parameter.graphql'],
      settings: {
        foreground: syntax.amber
      }
    },
    {
      name: 'GraphQL object type',
      scope: ['meta.type.object.graphql'],
      settings: {
        foreground: syntax.lightBlue
      }
    }
  ];
};

export { graphqlSyntax };