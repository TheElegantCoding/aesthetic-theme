import type { Palette } from '@global/type/color_scheme_type';

const jsTsSyntax = (colors: Palette) => {
  const { gray, syntax } = colors;

  return [{
    name: 'js/ts punctuation separator key-value',
    scope: 'punctuation.separator.key-value',
    settings: {
      foreground: gray.gray_300
    }
  }, {
    name: 'js/ts import keyword',
    scope: ['keyword.control.import.ts', 'keyword.control.from.ts'],
    settings: {
      foreground: syntax.blue
    }
  }

    // {
    //   name: 'TS types',
    //   scope: 'support.type.primitive.ts',
    //   settings: {
    //     fontStyle: 'bold',
    //     foreground: syntax.cyan
    //   }
    // },
    // {
    //   name: 'Template string',
    //   scope: 'meta.template.expression.ts',
    //   settings: {
    //     foreground: gray.gray_300
    //   }
    // },
    // {
    //   name: 'Vite variable meta',
    //   scope: 'support.variable.property.importmeta.ts',
    //   settings: {
    //     foreground: syntax.cyan
    //   }
    // },
    // {
    //   name: 'New expression constructor',
    //   scope: [
    //     'keyword.operator.new + entity.name.type',
    //     'keyword.operator.new + support.class',
    //     'meta.new entity.name.type',
    //     'meta.new support.class'
    //   ],
    //   settings: {
    //     foreground: syntax.cyan
    //   }
    // },
    // {
    //   name: 'Brace',
    //   scope: 'meta.brace.square',
    //   settings: {
    //     foreground: gray.gray_300
    //   }
    // },
    // {
    //   scope: [
    //     'variable.object.property.ts',
    //     'meta.field.declaration.ts',
    //     'meta.definition.property.ts'
    //   ],
    //   settings: {
    //     foreground: gray.gray_300
    //   }
    // },
    // {
    //   name: 'Numeric number',
    //   scope: 'constant.numeric.decimal',
    //   settings: {
    //     foreground: gray.gray_300
    //   }
    // },
    // {
    //   name: 'Object literal keys',
    //   scope: [
    //     'meta.object-literal.key',
    //     'meta.object-literal.key.ts',
    //     'meta.object.member',
    //     'meta.object.member.ts'
    //   ],
    //   settings: {
    //     foreground: gray.gray_400
    //   }
    // }
  ];
};

export { jsTsSyntax };