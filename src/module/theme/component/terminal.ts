import { gray, background } from '@global/theme/color';
import { alpha } from '@global/util/alpha';

const terminal = {
  'terminal.border': gray.gray_500,
  'terminal.background': background.background_900,
  'terminal.foreground': gray.gray_200,
  'terminal.selectionBackground': alpha(gray.gray_500, 0.35),
  'terminalCursor.background': gray.gray_300,
  'terminal.inactiveSelectionBackground': alpha(gray.gray_500, 0.35),
  'terminalCursor.foreground': gray.gray_300,

  'terminal.ansiBlack': '#000000',
  'terminal.ansiRed': '#cd3131',
  'terminal.ansiGreen': '#0dbc79',
  'terminal.ansiYellow': '#e5e510',
  'terminal.ansiBlue': '#2472c8',
  'terminal.ansiMagenta': '#bc3fbc',
  'terminal.ansiCyan': '#11a8cd',
  'terminal.ansiWhite': '#e5e5e5',

  'terminal.ansiBrightBlack': '#666666',
  'terminal.ansiBrightRed': '#f14c4c',
  'terminal.ansiBrightGreen': '#23d18b',
  'terminal.ansiBrightYellow': '#f5f543',
  'terminal.ansiBrightBlue': '#3b8eea',
  'terminal.ansiBrightMagenta': '#d670d6',
  'terminal.ansiBrightCyan': '#29b8db',
  'terminal.ansiBrightWhite': '#e5e5e5'

};

export { terminal };