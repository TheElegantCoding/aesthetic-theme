import type { Palette } from '@global/type/color_scheme_type';

const commonSyntax = (colors: Palette) => {
  const { gray, syntax } = colors;

  return [
    {
      name: 'String',
      scope: ['string'],
      settings: {
        foreground: syntax.green
      }
    },
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: gray.gray_500
      }
    },
    {
      name: 'Storage, keyword and tags',
      scope: [
        'storage',
        'storage.type',
        'keyword',
        'keyword.operator',
        'punctuation.definition.tag'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Keyword Operator Logical, Arrow, Ternary, Comparison',
      scope: [
        'keyword.operator.logical',
        'storage.type.function',
        'keyword.operator.bitwise',
        'keyword.operator.ternary',
        'keyword.operator.comparison',
        'keyword.operator.relational',
        'keyword.operator.or.regexp',
        'keyword.operator.optional'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Number, Boolean, Undefined, Null',
      scope: [
        'variable.other.constant',
        'punctuation.definition.constant',
        'constant.language',
        'constant.numeric',
        'support.constant',
        'constant.other.caps'
      ],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'Function Definition',
      scope: [
        'entity.name.function',
        'variable.other.enummember',
        'meta.function-call',
        'meta.function-call entity.name.function',
        'variable.function',
        'meta.definition.method entity.name.function',
        'meta.object-literal entity.name.function'
      ],
      settings: {
        foreground: syntax.purple
      }
    },
    {
      name: 'Function Argument',
      scope: [
        'variable.parameter.function.language.special',
        'variable.parameter',
        'meta.function.parameters punctuation.definition.variable',
        'meta.function.parameter variable'
      ],
      settings: {
        foreground: syntax.amber
      }
    },
    {}
    // {
    //   name: 'Regular Expressions and Escape Characters',
    //   scope: [
    //     'string.regexp',
    //     'source.regexp',
    //     'constant.character.escape'
    //   ],
    //   settings: {
    //     foreground: syntax.emerald
    //   }
    // },
    // {
    //   name: 'Constant color',
    //   scope: [
    //     'constant',
    //     'constant.language',
    //     'constant.numeric'
    //   ],
    //   settings: {
    //     foreground: syntax.cyan
    //   }
    // },
    // {
    //   scope: ['variable.parameter.ts', 'variable.other.property.ts'],
    //   settings: {
    //     foreground: gray.gray_300
    //   }
    // },
    // {
    //   name: 'Tag',
    //   scope: 'entity.name.tag',
    //   settings: {
    //     fontStyle: 'bold',
    //     foreground: syntax.blue
    //   }
    // },
    // {
    //   name: 'Type',
    //   scope: ['entity.name.type', 'entity.other.inherited-class'],
    //   settings: {
    //     fontStyle: 'bold',
    //     foreground: syntax.cyan
    //   }
    // },
    // {
    //   name: 'Tag open and close',
    //   scope: [
    //     'meta.tag',
    //     'punctuation.definition.tag.begin',
    //     'punctuation.definition.tag.end'
    //   ],
    //   settings: {
    //     foreground: alpha(syntax.blue, 0.6)
    //   }
    // },
    // {
    //   name: 'Library class/type',
    //   scope: [
    //     'support.type',
    //     'support.class',
    //     'support.function'
    //   ],
    //   settings: {
    //     foreground: syntax.cyan
    //   }
    // }
    // {
    //   name: 'Function parameters and their usage',
    //   scope: ['variable.parameter'],
    //   settings: {
    //     foreground: syntax.amber
    //   }
    // },
    // {
    //   name: 'Tag attribute',
    //   scope: 'entity.other.attribute-name',
    //   settings: {
    //     foreground: syntax.amber
    //   }
    // }
  ];
};

export { commonSyntax };