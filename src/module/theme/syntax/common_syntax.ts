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
        'variable.other.constant',
        'punctuation.definition.constant',
        'constant.language',
        'constant.numeric',
        'support.constant',
        'constant.other.caps'
      ],
      settings: {
        foreground: syntax.amber
      }
    },
    {
      name: 'Storage, keyword and tags',
      scope: [
        'storage.type',
        'meta.var.expr storage.type',
        'storage.modifier',
        'keyword',
        'keyword.control',
        'keyword.other.important',
        'keyword.control.module.js',
        'keyword.control.import',
        'keyword.control.export',
        'keyword.control.from',
        'keyword.control.default',
        'keyword.operator',
        'meta.import keyword.other',
        'keyword.control.as'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Operator, Misc',
      scope: [
        'keyword.other',
        'keyword.operator.bitwise.shift',
        'punctuation.accessor',
        'expression.embbeded.vue punctuation.definition.tag',
        'punctuation.separator.key-value',
        'text.html.twig meta.tag.inline.any.html',
        'meta.tag.template.value.twig meta.function.arguments.twig',
        'meta.directive.vue punctuation.separator.key-value.html',
        'punctuation.definition.constant.markdown',
        'text.html.vue-html meta.tag',
        'meta.attribute.directive',
        'punctuation.definition.keyword',
        'punctuation.terminator.rule',
        'punctuation.definition.entity',
        'punctuation.separator.inheritance.php',
        'keyword.other.template',
        'keyword.other.substitution',
        'entity.name.operator',
        'meta.property-list punctuation.separator.key-value',
        'meta.at-rule.mixin punctuation.separator.key-value',
        'meta.at-rule.function variable.parameter.url',
        'meta.embedded.inline.phpx punctuation.definition.tag.begin.html',
        'meta.embedded.inline.phpx punctuation.definition.tag.end.html'
      ],
      settings: {
        foreground: gray.gray_300
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
        'keyword.operator.or.regexp'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Methods',
      scope: [
        'meta.class-method.js entity.name.function.js',
        'entity.name.method.js',
        'variable.function.constructor',
        'keyword.other.special-method',
        'storage.type.cs'
      ],
      settings: {
        foreground: syntax.purple
      }
    },
    {
      name: 'Object Key',
      scope: [
        'meta.object-literal.key',
        'entity.name.type.hcl',
        'string.alias.graphql',
        'string.unquoted.graphql',
        'string.unquoted.alias.graphql',
        'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
        'meta.block entity.name.label'
      ],
      settings: {
        foreground: syntax.lightBlue
      }
    },
    {
      name: 'Object Property',
      scope: [
        'variable.other.property',
        'support.variable.property',
        'support.variable.property.dom',
        'meta.function-call variable.other.object.property'
      ],
      settings: {
        foreground: syntax.lightBlue
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
    {
      name: 'Class, Support, DOM, etc',
      scope: [
        'support.class',
        'support.type',
        'support.orther.namespace.use.php',
        'meta.use.php',
        'support.other.namespace.php',
        'support.type.sys-types',
        'support.variable.dom',
        'support.function',
        'support.constant.math',
        'support.type.object.module',
        'support.constant.json',
        'entity.name.namespace',
        'meta.import.qualifier'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'Variable declaration',
      scope: ['variable.other.readwrite.alias', 'variable.other.constant.object'],
      settings: {
        foreground: gray.gray_300
      }
    },
    {
      name: 'Regular Expressions and Escape Characters',
      scope: ['string.regexp'],
      settings: {
        foreground: syntax.emerald
      }
    }
  ];
};

export { commonSyntax };