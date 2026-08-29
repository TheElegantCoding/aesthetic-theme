import { alpha } from '@global/util/alpha';

import type { Palette } from '@global/type/color_scheme_type';

const getCommon = (colors: Palette) => {
  const {
    gray,
    syntax,
    cyan,
    blue,
    amber,
    emerald
  } = colors;

  return [
    {
      name: 'Comment',
      scope: [
        'comment',
        'string.comment',
        'punctuation.definition.comment'
      ],
      settings: {
        foreground: gray.gray_500
      }
    },
    {
      name: 'String',
      scope: ['string', 'punctuation.section.embedded source'],
      settings: {
        foreground: syntax.green
      }
    },
    {
      name: 'Regular Expressions and Escape Characters',
      scope: [
        'string.regexp',
        'source.regexp',
        'constant.character.escape'
      ],
      settings: {
        foreground: syntax.emerald
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
    },
    {
      name: 'Variable, number, Built-in constants, separators like ; or ,',
      scope: [
        'variable',
        'variable.other',
        'variable.language',
        'punctuation.separator',
        'punctuation.terminator',
        'punctuation.section',
        'punctuation.accessor',
        'entity.name.function'
      ],
      settings: {
        foreground: gray.gray_300
      }
    },
    {
      name: 'Tag',
      scope: 'entity.name.tag',
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Type',
      scope: ['entity.name.type', 'entity.other.inherited-class'],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'Tag attribute',
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: syntax.amber
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
      name: 'Tag open and close',
      scope: [
        'meta.tag',
        'punctuation.definition.tag.begin',
        'punctuation.definition.tag.end'
      ],
      settings: {
        foreground: alpha(syntax.blue, 0.6)
      }
    },
    {
      name: 'Library class/type',
      scope: [
        'support.type',
        'support.class',
        'support.function'
      ],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'Function parameters and their usage',
      scope: ['variable.parameter'],
      settings: {
        foreground: syntax.amber
      }
    },
    {
      name: 'Function Calls',
      scope: [
        'meta.function-call entity.name.function',
        'meta.function-call support.function',
        'variable.function',
        'support.function.go'
      ],
      settings: {
        foreground: syntax.purple
      }
    },
    {
      name: 'Object properties and attributes globally',
      scope: [
        'variable.other.property',
        'support.type.property-name',
        'meta.property-name'
      ],
      settings: {
        foreground: syntax.lightBlue
      }
    },
    {
      name: 'Object properties and attributes inside objects',
      scope: 'meta.object-literal.key',
      settings: {
        foreground: gray.gray_400
      }
    }
  ];
};

export { getCommon };