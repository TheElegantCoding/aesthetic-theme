import { alpha } from '@global/util/alpha';

import type { Palette } from '@global/type/color_scheme_type';

const htmlSyntax = (colors: Palette) => {
  const { syntax, gray } = colors;

  return [
    {
      name: 'HTML deprecated tag',
      scope: 'invalid.deprecated.entity.other.attribute-name.html',
      settings: {
        foreground: syntax.amber
      }
    },
    {
      name: 'html/pug (jade) escaped characters and entities',
      scope: ['constant.character.entity'],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'Tags',
      scope: 'entity.name.tag',
      settings: {
        foreground: syntax.blue
      }
    },
    {
      name: 'Attributes',
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: syntax.amber
      }
    },
    {
      name: 'HTML punctuation start and end',
      scope: ['punctuation.definition.tag.begin', 'punctuation.definition.tag.end'],
      settings: {
        foreground: alpha(syntax.blue, 0.6)
      }
    },
    {
      name: 'HTML comments',
      scope: ['comment.block.html'],
      settings: {
        foreground: gray.gray_500
      }
    }
  ];
};

export { htmlSyntax };