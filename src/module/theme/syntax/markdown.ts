import {
  sky,
  gray,
  cyan,
  blue,
  purple,
  yellow,
  emerald
} from '../../../global/theme/color';

const markdown = [
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
      foreground: cyan.cyan_500
    }
  },
  {
    name: 'Markdown italic',
    scope: 'markup.italic.markdown',
    settings: {
      fontStyle: 'italic',
      foreground: sky.sky_500
    }
  },
  {
    name: 'Markdown bold',
    scope: 'markup.bold.markdown',
    settings: {
      fontStyle: 'bold',
      foreground: blue.blue_500
    }
  },
  {
    name: 'Markdown strikethrough',
    scope: 'markup.strikethrough.markdown',
    settings: {
      foreground: yellow.yellow_600
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
      foreground: emerald.emerald_500
    }
  },
  {
    name: 'Markdown link',
    scope: ['markup.underline.link.markdown', 'markup.underline.link.image.markdown'],
    settings: {
      foreground: blue.blue_500
    }
  },
  {
    name: 'Markdown reference constant',
    scope: 'constant.other.reference.link.markdown',
    settings: {
      foreground: cyan.cyan_500
    }
  },
  {
    name: 'Markdown code',
    scope: 'markup.fenced_code.block.markdown',
    settings: {
      foreground: blue.blue_500
    }
  },
  {
    name: 'Markdown code definition',
    scope: ['fenced_code.block.language.markdown', 'punctuation.definition.raw.markdown'],
    settings: {
      fontStyle: 'bold',
      foreground: cyan.cyan_500
    }
  },
  {
    name: 'Markdown List',
    scope: ['markup.list.unnumbered.markdown', 'markup.list.numbered.markdown'],
    settings: {
      fontStyle: 'bold',
      foreground: blue.blue_500
    }
  },
  {
    name: 'Markdown quote',
    scope: 'markup.quote.markdown',
    settings: {
      fontStyle: 'italic',
      foreground: purple.purple_500
    }
  }
];

export { markdown };