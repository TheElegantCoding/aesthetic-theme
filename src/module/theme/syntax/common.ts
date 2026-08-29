import { alpha } from '@global/util/alpha';

import type { Palette } from '@global/type/color_scheme_type';

const getCommon = (colors: Palette) => {
  const { gray, syntax } = colors;

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
      scope: ['variable.parameter.ts', 'variable.other.property.ts'],
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
    }
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

export { getCommon };