import {
  gray,
  blue,
  background
} from '../../../global/theme/color';
import { alpha } from '../../../global/util/alpha';

const terminal = {
  'panel.background': background.background_900,
  'panel.border': gray.gray_500,
  'panelTitle.activeBorder': gray.gray_500,
  'panelTitle.activeForeground': gray.gray_400,
  'panelTitle.inactiveForeground': gray.gray_600,
  'terminal.border': gray.gray_500,
  'terminal.foreground': gray.gray_300,
  'terminal.selectionBackground': alpha(blue.blue_700, 0.55),
  'terminalCursor.background': gray.gray_300,
  'terminalCursor.foreground': gray.gray_300
};

export { terminal };