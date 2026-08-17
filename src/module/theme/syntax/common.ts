import {
  gray,
  cyan,
  blue,
  amber,
  emerald
} from '../../../global/theme/color';

const common = [
  {
    name: 'Comment',
    scope: [
      'comment',
      'string.comment',
      'punctuation.definition.comment'
    ],
    settings: {
      foreground: gray.gray_600
    }
  },
  {
    name: 'String',
    scope: ['string', 'punctuation.section.embedded source'],
    settings: {
      foreground: emerald.emerald_600
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
      foreground: emerald.emerald_200
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
      foreground: cyan.cyan_600
    }
  },
  {
    name: 'Variable, number, Built-in constants, separators like ; or ,',
    scope: [
      'variable',
      'variable.parameter',
      'variable.parameter.function-call',
      'variable.other',
      'variable.language',
      'punctuation.separator',
      'punctuation.terminator',
      'punctuation.section',
      'punctuation.accessor'
    ],
    settings: {
      foreground: gray.gray_300
    }
  },
  {
    name: 'Function name and arguments',
    scope: 'entity.name.function',
    settings: {
      foreground: gray.gray_300
    }
  },
  {
    name: 'Tag',
    scope: 'entity.name.tag',
    settings: {
      fontStyle: 'bold',
      foreground: blue.blue_600
    }
  },
  {
    name: 'Type',
    scope: ['entity.name.type', 'entity.other.inherited-class'],
    settings: {
      fontStyle: 'bold',
      foreground: cyan.cyan_600
    }
  },
  {
    name: 'Tag attribute',
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: amber.amber_600
    }
  },
  {
    name: 'Tag start/end',
    scope: [
      'punctuation.definition.tag.end',
      'punctuation.definition.tag.begin',
      'punctuation.definition.tag'
    ],
    settings: {
      fontStyle: 'bold',
      foreground: blue.blue_800
    }
  },
  {
    name: 'Storage, keyword',
    scope: [
      'storage',
      'storage.type',
      'keyword',
      'keyword.operator'
    ],
    settings: {
      fontStyle: 'bold',
      foreground: blue.blue_600
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
      foreground: cyan.cyan_600
    }
  }
];

export { common };