import type { Palette } from '@global/type/color_scheme_type';

const getMarkdown = (colors: Palette) => {
  const { syntax, gray } = colors;

  return [
    {
      name: 'Markdown paragraph',
      scope: 'meta.paragraph.markdown',
      settings: {
        foreground: gray.gray_400
      }
    },
    {
      name: 'Markdown Titles',
      scope: ['entity.name.section.markdown', 'punctuation.definition.heading.markdown'],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
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
      name: 'Markdown string link',
      scope: [
        'string.other.link.title.markdown',
        'string.other.link.description.markdown',
        'markup.inline.raw.string.markdown'
      ],
      settings: {
        foreground: syntax.emerald
      }
    },
    {
      name: 'Markdown link',
      scope: ['markup.underline.link.markdown', 'markup.underline.link.image.markdown'],
      settings: {
        foreground: syntax.blue
      }
    },
    {
      name: 'Markdown reference constant',
      scope: 'constant.other.reference.link.markdown',
      settings: {
        foreground: syntax.cyan
      }
    },
    {
      name: 'Markdown code',
      scope: ['markup.fenced_code.block.markdown', 'markup.inline.raw.markdown'],
      settings: {
        foreground: syntax.blue
      }
    },
    {
      name: 'Markdown code definition and language',
      scope: [
        'fenced_code.block.language.markdown',
        'punctuation.definition.raw.markdown',
        'punctuation.definition.fenced.markdown'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.cyan
      }
    },
    {
      name: 'Markdown List',
      scope: [
        'markup.list.unnumbered.markdown',
        'markup.list.numbered.markdown',
        'punctuation.definition.list_item.markdown'
      ],
      settings: {
        fontStyle: 'bold',
        foreground: syntax.blue
      }
    },
    {
      name: 'Markdown quote',
      scope: ['markup.quote.markdown', 'punctuation.definition.quote.markdown'],
      settings: {
        fontStyle: 'italic',
        foreground: syntax.purple
      }
    },
    {
      name: 'Markdown tables',
      scope: ['meta.separator.markdown', 'punctuation.separator.table.markdown'],
      settings: {
        foreground: gray.gray_400
      }
    },
    {
      name: 'Code block text',
      scope: ['markup.fenced_code.block.markdown', 'text.html.markdown'],
      settings: {
        foreground: gray.gray_400
      }
    }
  ];
};

export { getMarkdown };