import { gray, background } from '@global/theme/color';
import { alpha } from '@global/util/alpha';

const terminal = {
  'terminal.border': gray.gray_500,
  'terminal.background': background.background_900,
  'terminal.foreground': gray.gray_200,
  'terminal.selectionBackground': alpha(gray.gray_500, 0.35),
  'terminalCursor.background': gray.gray_300,
  'terminal.inactiveSelectionBackground': alpha(gray.gray_500, 0.35),
  'terminalCursor.foreground': gray.gray_300
};

export { terminal };