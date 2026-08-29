import type { Palette } from '@global/type/color_scheme_type';

const getCss = (colors: Palette) => {
  const { gray, syntax } = colors;

  return [
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
      name: 'Css if and media',
      scope: ['meta.at-rule.if.scss', 'support.constant.media.css'],
      settings: {
        foreground: gray.gray_300
      }
    },
    {
      name: 'Sass punctuation',
      scope: ['meta.property-value.scss'],
      settings: {
        foreground: gray.gray_300
      }
    },
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
        foreground: syntax.blue
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
        foreground: syntax.cyan
      }
    },
    {
      name: '',
      scope: 'support.type.property-name',
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'Css regex character',
      scope: 'constant.character.escape.scss',
      settings: {
        foreground: syntax.emerald
      }
    },
    {
      name: 'CSS constants and entities',
      scope: ['support.constant.property-value.css', 'entity.name.tag.css'],
      settings: {
        fontStyle: 'normal',
        foreground: syntax.blue
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
        foreground: syntax.green
      }
    },
    {
      name: 'CSS classes',
      scope: ['entity.other.attribute-name.class.css', 'entity.other.attribute-name.parent-selector-suffix.css'],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.green
      }
    },
    {
      name: 'CSS Name variable',
      scope: 'variable.scss',
      settings: {
        fontStyle: 'bold',
        foreground: syntax.amber
      }
    },
    {
      name: 'CSS keywords',
      scope: [
        'keyword.other.unit.rem.css',
        'keyword.other.unit.percentage.css',
        'keyword.other.unit.s.css',
        'keyword.other.unit.vh.css',
        'support.constant.font-name.css'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'CSS functions',
      scope: [
        'support.function.transform.css',
        'support.function.transform.scss',
        'support.function.calc.css',
        'support.function.calc.scss',
        'support.function.misc.css',
        'support.function.misc.scss',
        'source.css support.function',
        'source.scss support.function'
      ],
      settings: {
        foreground: syntax.purple
      }
    },
    {
      name: 'Sass Include Forced via Property List',
      scope: [
        'meta.at-rule.include.scss meta.property-name.scss',
        'meta.property-list.scss source.css.scss',
        'meta.property-list.scss',
        'meta.at-rule.include.scss',
        'meta.property-name.scss'
      ],
      settings: {
        foreground: syntax.purple
      }
    },
    {
      name: 'Sass font-face',
      scope: ['meta.at-rule.fontface.scss', 'keyword.control.at-rule.fontface.scss'],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'Css unit',
      scope: ['keyword.other.unit.percentage.css'],
      settings: {
        foreground: syntax.blue
      }
    }
  ];
};

export { getCss };