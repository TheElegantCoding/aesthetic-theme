import {
  cyan,
  gray,
  blue,
  amber,
  emerald
} from '../../../global/theme/color';

const css = [
  {
    name: 'CSS Class and Support - Property Name',
    scope: [
      'source.css support.type.property-name',
      'source.sass support.type.property-name',
      'source.scss support.type.property-name',
      'source.less support.type.property-name',
      'source.stylus support.type.property-name',
      'source.postcss support.type.property-name'
    ],
    settings: {
      foreground: blue.blue_600
    }
  },
  {
    name: 'CSS Class and Support - Property Value',
    scope: [
      'constant.numeric.css',
      'source.css support.constant.property-value',
      'source.sass support.constant.property-value',
      'source.scss support.constant.property-value',
      'source.less support.constant.property-value',
      'source.stylus support.constant.property-value',
      'source.postcss support.constant.property-value'
    ],
    settings: {
      foreground: gray.gray_300
    }
  },
  {
    name: 'CSS tag names',
    scope: [
      'source.css entity.name.tag',
      'source.sass entity.name.tag',
      'source.scss entity.name.tag',
      'source.less entity.name.tag',
      'source.stylus entity.name.tag',
      'punctuation.separator.key-value.scss'
    ],
    settings: {
      foreground: gray.gray_300
    }
  },
  {
    name: 'CSS and sass pseudo elements',
    scope: [
      'entity.other.attribute-name.pseudo-element.css',
      'entity.other.attribute-name.pseudo-class.css',
      'entity.name.tag.reference.scss'
    ],
    settings: {
      fontStyle: 'bold',
      foreground: cyan.cyan_600
    }
  },
  {
    name: 'Css regex character',
    scope: 'constant.character.escape.scss',
    settings: {
      foreground: emerald.emerald_200
    }
  },
  {
    name: 'CSS constants and entities',
    scope: ['support.constant.property-value.css', 'entity.name.tag.css'],
    settings: {
      foreground: cyan.cyan_600
    }
  },
  {
    name: 'CSS Font',
    scope: [
      'support.constant.font-name',
      'meta.attribute-selector.scss',
      'meta.definition.variable'
    ],
    settings: {
      foreground: emerald.emerald_600
    }
  },
  {
    name: 'CSS punctuation',
    scope: [
      'support.type.property-name.media.css',
      'meta.property-name.media-query.scss',
      'punctuation.definition.attribute-selector.end.bracket.square.scss',
      'punctuation.definition.attribute-selector.begin.bracket.square.scss',
      'punctuation.definition.media-query.begin.bracket.round.scss',
      'punctuation.definition.media-query.end.bracket.round.scss'
    ],
    settings: {
      foreground: gray.gray_300
    }
  },
  {
    name: 'CSS classes',
    scope: ['entity.other.attribute-name.class.css', 'entity.other.attribute-name.parent-selector-suffix.css'],
    settings: {
      fontStyle: 'bold',
      foreground: emerald.emerald_600
    }
  },
  {
    name: 'CSS Name variable',
    scope: 'variable.scss',
    settings: {
      fontStyle: 'bold',
      foreground: amber.amber_600
    }
  },
  {
    name: 'CSS keywords',
    scope: [
      'keyword.other.unit.rem.css',
      'keyword.other.unit.percentage.css',
      'keyword.other.unit.s.css',
      'keyword.other.unit.vh.css'
    ],
    settings: {
      fontStyle: 'bold',
      foreground: cyan.cyan_600
    }
  },
  {
    name: 'Css if and media',
    scope: ['meta.at-rule.if.scss', 'support.constant.media.css'],
    settings: {
      foreground: gray.gray_300
    }
  }
];

export { css };