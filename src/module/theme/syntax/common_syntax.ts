import type { Palette } from '@global/type/color_scheme_type';

const commonSyntax = (colors: Palette) => {
  const { gray, syntax } = colors;

  return [
    {
      name: 'String',
      scope: [
        'string',
        'constant.other.symbol',
        'constant.other.key',
        'meta.attribute-selector',
        'string constant.character'
      ],
      settings: {
        foreground: syntax.green
      }
    },
    {
      name: 'Comment',
      scope: [
        'comment',
        'punctuation.definition.comment',
        'comment.block.documentation',
        'comment.block.documentation punctuation'
      ],
      settings: {
        foreground: gray.gray_500
      }
    },
    {
      name: 'Numeric, Boolean, Undefined, Null',
      scope: [
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
      name: 'Storage, keyword and tags',
      scope: [
        'storage',
        'storage.type',
        'keyword',
        'keyword.operator',
        'punctuation.definition.tag',
        'punctuation.assignment'
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
      name: 'Import, Export, From, Default',
      scope: [
        'keyword.control.module.js',
        'keyword.control.import',
        'keyword.control.export',
        'keyword.control.from',
        'keyword.control.default',
        'meta.import keyword.other'
      ],
      settings: {
        foreground: syntax.blue
      }
    },
    {
      name: 'Regular Expressions and Escape Characters',
      scope: ['string.regexp'],
      settings: {
        foreground: syntax.emerald
      }
    },
    {
      name: 'Type, Class, Interface, Enum, EnumMember, TypeParameter',
      scope: [
        'entity.name.type',
        'entity.name.class',
        'entity.name.interface',
        'entity.name.enum',
        'entity.name.enum-member',
        'entity.name.type.parameter'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'Type primitive, Type built-in, Type literal, Type alias',
      scope: [
        'support.type',
        'support.type.primitive',
        'support.type.builtin',
        'support.type.literal',
        'support.function.construct',
        'support.class',
        'support.type.enum',
        'support.type.alias'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'Function call',
      scope: ['meta.function-call', 'punctuation.section.embedded'],
      settings: {
        foreground: syntax.purple
      }
    },
    {
      name: 'Variable others',
      scope: ['variable.other.object'],
      settings: {
        foreground: gray.gray_300
      }
    },
    {
      name: 'Punctuation',
      scope: [
        'punctuation.accessor',
        'punctuation.operation',
        'punctuation.separator',
        'meta.brace.round',
        'meta.brace.square',
        'punctuation.colon',
        'punctuation.definition.section',
        'punctuation.section',
        'punctuation.definition.template-expression',
        'punctuation.definition.arguments',
        'punctuation.definition.parameters'
      ],
      settings: {
        foreground: gray.gray_300
      }
    },
    {
      name: 'Constant color',
      scope: [
        'constant',
        'constant.language',
        'constant.numeric'
      ],
      settings: {
        foreground: syntax.cyan
      }
    }
  ];
};

export { commonSyntax };