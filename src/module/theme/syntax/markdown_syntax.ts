import type { Palette } from '@global/type/color_scheme_type';

const markdownSyntax = (colors: Palette) => {
  const { syntax, gray } = colors;

  return [
    {
      name: 'Markdown headings',
      scope: ['entity.name.section.markdown', 'punctuation.definition.heading.markdown'],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'Markdown heading setext',
      scope: ['markup.heading.setext'],
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'Markdown puntuation definition bold',
      scope: 'punctuation.definition.bold.markdown',
      settings: {
        foreground: syntax.blue
      }
    },
    {
      name: 'Markdown List Begin Punctuation',
      scope: ['punctuation.definition.list.begin.markdown'],
      settings: {
        foreground: syntax.blue
      }
    },
    {
      name: 'Markdown Inline Raw',
      scope: ['markup.inline.raw.markdown', 'markup.inline.raw.string.markdown'],
      settings: {
        foreground: syntax.emerald
      }
    },
    {
      name: 'Markdown List Punctuation Definition',
      scope: 'punctuation.definition.list.markdown',
      settings: {
        foreground: gray.gray_400
      }
    },
    {
      name: 'Markdown Punctuation Definition String',
      scope: [
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'punctuation.definition.metadata.markdown'
      ],
      settings: {
        foreground: gray.gray_400
      }
    },
    {
      name: 'Markdown Punctuation Definition Link',
      scope: [
        'punctuation.definition.metadata.markdown',
        'punctuation.definition.link.title.begin.markdown',
        'punctuation.definition.link.title.end.markdown'
      ],
      settings: {
        foreground: gray.gray_400
      }
    },
    {
      name: 'Markdown Underline Link/Image',
      scope: 'markup.underline.link.markdown,markup.underline.link.image.markdown',
      settings: {
        foreground: syntax.blue
      }
    },
    {
      name: 'Markdown Link Title/Description',
      scope: 'string.other.link.title.markdown,string.other.link.description.markdown',
      settings: {
        foreground: syntax.emerald
      }
    },
    {
      name: 'Markdown Quote',
      scope: ['markup.quote.markdown'],
      settings: {
        fontStyle: 'italic',
        foreground: syntax.purple
      }
    },
    {
      name: 'Markdown Quote Punctuation',
      scope: ['punctuation.definition.quote.begin.markdown'],
      settings: {
        foreground: syntax.purple
      }
    },
    {
      name: 'Markdown italic',
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic'
      }
    },
    {
      name: 'Markdown separator',
      scope: 'meta.separator.markdown',
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Markdown italic',
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic',
        foreground: syntax.cyan
      }
    },
    {
      name: 'Markdown bold',
      scope: 'markup.bold.markdown',
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Markdown strikethrough',
      scope: 'markup.strikethrough.markdown',
      settings: {
        foreground: syntax.amber
      }
    },
    {
      name: 'Markdown code punctuation',
      scope: ['markup.fenced_code.block.markdown'],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Markdown code',
      scope: ['fenced_code.block.language.markdown'],
      settings: {
        foreground: syntax.cyan
      }
    }
    //   name: 'Markdown reference constant',
    //   scope: 'constant.other.reference.link.markdown',
    //   settings: {
    //     foreground: syntax.cyan
    //   }
    // },
    // {
    //   name: 'Markdown code definition and language',
    //   scope: [
    //     'fenced_code.block.language.markdown',
    //     'punctuation.definition.raw.markdown',
    //     'punctuation.definition.fenced.markdown'
    //   ],
    //   settings: {
    //     fontStyle: 'bold',
    //     foreground: syntax.cyan
    //   }
    // },
    // {
    //   name: 'Markdown List',
    //   scope: [
    //     'markup.list.unnumbered.markdown',
    //     'markup.list.numbered.markdown',
    //     'punctuation.definition.list_item.markdown'
    //   ],
    //   settings: {
    //     fontStyle: 'bold',
    //     foreground: syntax.blue
    //   }
    // },

  ];
};

export { markdownSyntax };