import type { Palette } from '@global/type/color_scheme_type';

const cssSyntax = (colors: Palette) => {
  const { gray, syntax } = colors;

  return [
    {
      name: 'Css html selector',
      scope: ['entity.name.tag.css'],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'Css id selector',
      scope: ['entity.other.attribute-name.id'],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.amber
      }
    },
    {
      name: 'CSS Property Name',
      scope: ['meta.property-name.scss', 'support.type.property-name'],
      settings: {
        foreground: syntax.blue
      }
    },
    {
      name: 'Css class',
      scope: ['entity.other.attribute-name.class', 'string.unquoted.less'],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.green
      }
    },
    {
      name: 'CSS Name variable',
      scope: [
        'variable.scss',
        'variable.css',
        'variable.less',
        'variable.argument.css',
        'support.other.variable.less',
        'punctuation.definition.variable.less',
        'variable.other.less'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.amber
      }
    },
    {
      name: 'CSS constants and entities',
      scope: ['support.constant.property-value', 'meta.property-value'],
      settings: {
        fontStyle: 'normal',
        foreground: syntax.cyan
      }
    },
    {
      name: 'Css units',
      scope: ['keyword.other.unit', 'constant.other.color.rgb-value.hex'],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'Css keyword operator bold',
      scope: [
        'keyword.operator.css',
        'keyword.operator.less',
        'keyword.operator.scss'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'css color standard name',
      scope: ['support.constant.color.w3c-extended-color-name', 'support.constant.color.w3c-standard-color-name'],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'css attribute-name.id (vendored properties)',
      scope: ['support.type.vendored.property-name'],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'CSS and sass/less pseudo elements',
      scope: [
        'entity.other.attribute-name.pseudo-element',
        'entity.other.attribute-name.parent',
        'entity.other.attribute-name.pseudo-class',
        'entity.name.tag.reference.css',
        'entity.name.tag.reference.scss',
        'entity.name.tag.reference.less'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'CSS functions',
      scope: [
        'support.function.transform',
        'support.function.calc',
        'support.function.misc'
      ],
      settings: {
        foreground: syntax.purple
      }
    },

    {
      name: 'Css font',
      scope: ['support.constant.font-name'],
      settings: {
        foreground: syntax.green
      }
    },
    {
      name: 'Css parameter',
      scope: [
        'variable.parameter.css',
        'variable.parameter.scss',
        'variable.parameter.url.css',
        'variable.parameter.url.scss'
      ],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'Scss forward / Less import',
      scope: ['keyword.control.at-rule.forward.scss', 'keyword.control.at-rule.import.less'],
      settings: {
        foreground: syntax.blue
      }
    },
    {
      name: 'Css control statements & at-rules',
      scope: ['keyword.control'],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Sass include',
      scope: ['meta.property-name.scss', 'meta.property-list'],
      settings: {
        foreground: syntax.purple
      }
    },
    {
      name: 'Css punctuation',
      scope: [
        'punctuation.terminator.rule.scss',
        'punctuation.separator.list.comma.css',
        'punctuation.separator.delimiter.scss',
        'punctuation.definition.begin.bracket.round.scss',
        'punctuation.section.function.begin.bracket.round.css',
        'punctuation.definition.end.bracket.round.scss',
        'punctuation.section.function.end.bracket.round.css',
        'punctuation.separator.key-value.scss',
        'punctuation.section.function.scss',
        'punctuation.definition.group.begin.less',
        'punctuation.definition.group.end.less',
        'punctuation.definition.block.begin.less',
        'punctuation.separator.less',
        'punctuation.definition.block.end.less',
        'punctuation.section.property-list.begin.bracket.curly.scss',
        'punctuation.section.property-list.end.bracket.curly.scss',
        'punctuation.definition.block.scss',
        'punctuation.terminator.rule.css',
        'punctuation.terminator.rule.less',
        'punctuation.separator.key-value.css',
        'punctuation.section.braces.end.less',
        'punctuation.section.braces.begin.less',
        'punctuation.separator.key-value.less',
        'punctuation.definition.block.begin.bracket.curly.scss',
        'punctuation.definition.block.end.bracket.curly.scss',
        'punctuation.definition.attribute-selector.end.bracket.square.scss',
        'punctuation.definition.attribute-selector.begin.bracket.square.scss',
        'punctuation.definition.media-query.begin.bracket.round.scss',
        'punctuation.definition.media-query.end.bracket.round.scss',
        'punctuation.section.property-list.begin.bracket.curly.css',
        'punctuation.section.property-list.end.bracket.curly.css',
        'punctuation.section.property-list.begin.bracket.curly.less',
        'punctuation.section.property-list.end.bracket.curly.less'
      ],
      settings: {
        foreground: gray.gray_300
      }
    },
    {
      name: 'Css if, else and media',
      scope: [
        'meta.at-rule.if',
        'support.type.property-name.media',
        'support.constant.media',
        'meta.at-rule.else'
      ],
      settings: {
        foreground: gray.gray_300
      }
    },
    {
      name: 'Css numbers',
      scope: [
        'constant.numeric.css',
        'constant.numeric.scss',
        'constant.numeric.less'
      ],
      settings: {
        foreground: gray.gray_300
      }
    },
    {
      name: 'Css wild card',
      scope: ['entity.name.tag.wildcard'],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'Css regex character',
      scope: ['constant.character.escape'],
      settings: {
        foreground: syntax.emerald
      }
    }
  ];
};

export { cssSyntax };