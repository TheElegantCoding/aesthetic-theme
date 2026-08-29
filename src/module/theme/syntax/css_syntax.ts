/* eslint-disable max-lines */
import type { Palette } from '@global/type/color_scheme_type';

const cssSyntax = (colors: Palette) => {
  const { gray, syntax } = colors;

  return [
    {
      name: 'Css html selector',
      scope: [
        'entity.name.tag.css',
        'entity.name.tag.scss',
        'entity.name.tag.less'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'Css id selector',
      scope: [
        'entity.other.attribute-name.id.css',
        'entity.other.attribute-name.id.scss',
        'entity.other.attribute-name.id.less'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.amber
      }
    },
    {
      name: 'CSS Property Name',
      scope: [
        'meta.property-name.scss',
        'support.type.property-name.css',
        'support.type.property-name.scss',
        'support.type.property-name.less'
      ],
      settings: {
        foreground: syntax.blue
      }
    },
    {
      name: 'Css class',
      scope: [
        'entity.other.attribute-name.class.css',
        'entity.other.attribute-name.class.scss',
        'entity.other.attribute-name.class.less',
        'string.unquoted.less'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.green
      }
    },
    {
      name: 'CSS Name variable',
      scope: [
        'variable.scss',
        'variable.less',
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
      scope: [
        'support.constant.property-value.css',
        'support.constant.property-value.scss',
        'support.constant.property-value.less',
        'meta.property-value.scss',
        'meta.property-value.css',
        'meta.property-value.less'
      ],
      settings: {
        fontStyle: 'normal',
        foreground: syntax.cyan
      }
    },
    {
      name: 'CSS/SCSS/LESS Operators & Units',
      scope: [
        'keyword.other.unit.percentage.css',
        'keyword.other.unit.percentage.scss',
        'keyword.other.unit.percentage.less',
        'keyword.other.unit.deg',
        'keyword.other.unit.s',
        'keyword.other.unit.vh.css',
        'keyword.other.unit.vh.scss',
        'keyword.other.unit.vh.less',
        'keyword.other.unit.em.css',
        'keyword.other.unit.em.scss',
        'keyword.other.unit.em.less',
        'keyword.other.unit.rem.css',
        'keyword.other.unit.rem.scss',
        'keyword.other.unit.rem.less',
        'keyword.other.unit.vw.css',
        'keyword.other.unit.vw.scss',
        'keyword.other.unit.vw.less',
        'keyword.other.unit.fr.css',
        'keyword.other.unit.fr.scss',
        'keyword.other.unit.fr.less',
        'keyword.other.unit.ms.css',
        'keyword.other.unit.ms.scss',
        'keyword.other.unit.ms.less',
        'keyword.other.unit.vmin.css',
        'keyword.other.unit.vmin.scss',
        'keyword.other.unit.vmin.less',
        'keyword.other.unit.vmax.css',
        'keyword.other.unit.vmax.scss',
        'keyword.other.unit.vmax.less',
        'keyword.other.unit.ch.css',
        'keyword.other.unit.ch.scss',
        'keyword.other.unit.ch.less',
        'keyword.other.unit.ex.css',
        'keyword.other.unit.ex.scss',
        'keyword.other.unit.ex.less',
        'keyword.other.unit.mm.css',
        'keyword.other.unit.mm.scss',
        'keyword.other.unit.mm.less',
        'keyword.other.unit.cm.css',
        'keyword.other.unit.cm.scss',
        'keyword.other.unit.cm.less',
        'keyword.other.unit.in.css',
        'keyword.other.unit.in.scss',
        'keyword.other.unit.in.less',
        'keyword.other.unit.pt.css',
        'keyword.other.unit.pt.scss',
        'keyword.other.unit.pt.less',
        'keyword.other.unit.pc.css',
        'keyword.other.unit.pc.scss',
        'keyword.other.unit.pc.less',
        'keyword.other.unit.q.css',
        'keyword.other.unit.q.scss',
        'keyword.other.unit.q.less',
        'keyword.other.unit.turn.css',
        'keyword.other.unit.turn.scss',
        'keyword.other.unit.turn.less',
        'keyword.other.unit.grad.css',
        'keyword.other.unit.grad.scss',
        'keyword.other.unit.grad.less',
        'keyword.other.unit.rad.css',
        'keyword.other.unit.rad.scss',
        'keyword.other.unit.rad.less',
        'keyword.other.unit.sass',
        'keyword.other.unit.less',
        'keyword.other.unit.px.css',
        'keyword.other.unit.px.scss',
        'keyword.other.unit.px.less',
        'constant.other.color.rgb-value.hex.css',
        'constant.other.color.rgb-value.hex.scss',
        'constant.other.color.rgb-value.hex.less',
        'keyword.other.unit.scss'
      ],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'CSS/SCSS/LESS keyword operator bold',
      scope: [
        'keyword.operator.css',
        'keyword.operator.scss',
        'keyword.operator.less'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'css color standard name',
      scope: [
        'support.constant.color.w3c-extended-color-name.css',
        'support.constant.color.w3c-extended-color-name.scss',
        'support.constant.color.w3c-extended-color-name.less',
        'support.constant.color.w3c-standard-color-name.css',
        'support.constant.color.w3c-standard-color-name.scss',
        'support.constant.color.w3c-standard-color-name.less'
      ],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'css attribute-name.id (vendored properties)',
      scope: [
        'support.type.vendored.property-name.css',
        'support.type.vendored.property-name.scss',
        'support.type.vendored.property-name.less'
      ],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'CSS and sass/less pseudo elements',
      scope: [
        'entity.other.attribute-name.pseudo-element.css',
        'entity.other.attribute-name.pseudo-element.scss',
        'entity.other.attribute-name.pseudo-element.less',
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.attribute-name.parent.less',
        'entity.other.attribute-name.pseudo-class.scss',
        'entity.other.attribute-name.pseudo-class.less',
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
        'support.function.transform.css',
        'support.function.transform.scss',
        'support.function.transform.less',
        'support.function.calc.css',
        'support.function.calc.scss',
        'support.function.calc.less',
        'support.function.misc.css',
        'support.function.misc.scss',
        'support.function.misc.less',
        'source.css support.function',
        'source.scss support.function',
        'source.less support.function'
      ],
      settings: {
        foreground: syntax.purple
      }
    },
    {
      name: 'Css string',
      scope: [
        'string.quoted.double.css',
        'string.quoted.double.scss',
        'string.quoted.double.less',
        'string.quoted.single.css',
        'string.quoted.single.scss',
        'string.quoted.other.less',
        'string.quoted.single.less',
        'meta.attribute-selector.scss',
        'meta.attribute-selector.less',
        'meta.attribute-selector.css'
      ],
      settings: {
        foreground: syntax.green
      }
    },
    {
      name: 'Css font',
      scope: [
        'support.constant.font-name.css',
        'support.constant.font-name.scss',
        'support.constant.font-name.less'
      ],
      settings: {
        foreground: syntax.green
      }
    },
    {
      name: 'Css parameter',
      scope: [
        'variable.parameter.css',
        'variable.parameter.url.scss',
        'variable.parameter.url.less',
        'variable.parameter.scss',
        'variable.parameter.less'
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
      name: 'Css/Scss/less comments',
      scope: [
        'comment.block.css',
        'comment.block.scss',
        'comment.block.less',
        'comment.line.scss',
        'comment.line.less',
        'comment.line.double-slash.scss',
        'comment.line.double-slash.less',
        'comment.line.number-sign.less'
      ],
      settings: {
        foreground: gray.gray_500
      }
    },
    {
      name: 'Scss/Less control statements & at-rules',
      scope: [
        'keyword.control.at-rule.include.scss',
        'keyword.control.each.scss',
        'keyword.control.if.scss',
        'keyword.control.return.scss',
        'keyword.control.while.scss',
        'keyword.control.mixin.scss',
        'keyword.control.extend.scss',
        'keyword.control.else.scss',
        'keyword.control.at-rule.import.scss',
        'keyword.control.at-rule.use.scss',
        'keyword.control.at-rule.forward.scss',
        'keyword.control.at-rule.for.scss',
        'keyword.control.at-rule.while.scss',
        'keyword.control.at-rule.if.scss',
        'keyword.control.at-rule.else.scss',
        'keyword.control.at-rule.mixin.scss',
        'keyword.control.at-rule.extend.scss',
        'keyword.control.content.scss',
        'keyword.control.at-rule.charset.scss',
        'keyword.control.at-rule.function.scss',
        'keyword.control.at-rule.media.scss',
        'keyword.control.at-rule.fontface.scss',
        'keyword.control.at-rule.keyframes.scss',
        'keyword.control.less'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Css/Scss/Less operators',
      scope: [
        'keyword.operator.comparison.scss',
        'keyword.operator.comparison.less',
        'keyword.operator.scss',
        'keyword.operator.less',
        'keyword.operator.arithmetic.scss',
        'keyword.operator.arithmetic.less',
        'keyword.operator.attribute-selector.less',
        'keyword.operator.assignment.scss',
        'keyword.operator.assignment.less',
        'keyword.operator.logical.scss',
        'keyword.operator.logical.less'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Sass/Less Include Forced via Property List',
      scope: [
        'meta.property-name.scss',
        'meta.property-list.scss',
        'meta.property-name.less',
        'meta.property-list.less'
      ],
      settings: {
        foreground: syntax.purple
      }
    },
    {
      name: 'CSS/LESS punctuation',
      scope: [
        'punctuation.terminator.rule.scss',
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
        'meta.at-rule.if.scss',
        'meta.at-rule.if.less',
        'support.type.property-name.media.css',
        'support.type.property-name.media.scss',
        'support.type.property-name.media.less',
        'support.constant.media.css',
        'support.constant.media.scss',
        'support.constant.media.less',
        'meta.at-rule.else.scss',
        'meta.at-rule.else.less'
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
      scope: [
        'entity.name.tag.wildcard.scss',
        'entity.name.tag.wildcard.less',
        'entity.name.tag.wildcard.css'
      ],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'Css regex character',
      scope: [
        'constant.character.escape.scss',
        'constant.character.escape.css',
        'constant.character.escape.less'
      ],
      settings: {
        foreground: syntax.emerald
      }
    }
  ];
};

export { cssSyntax };