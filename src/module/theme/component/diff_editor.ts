import { red, gray, yellow } from '@global/style/color';
import { alpha } from '@global/util/alpha';

const diffEditor = {
  'diffEditor.border': gray.gray_400,
  'diffEditor.insertedTextBackground': alpha(yellow.yellow_600, 0.35),
  'diffEditor.insertedTextBorder': gray.gray_400,
  'diffEditor.removedTextBackground': alpha(red.red_600, 0.35),
  'diffEditor.removedTextBorder': gray.gray_400
};

export { diffEditor };