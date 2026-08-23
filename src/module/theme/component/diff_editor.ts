import { alpha } from '@global/util/alpha';

import type { Palette } from '@global/type/color_scheme_type';

const getDiffEditor = (colors: Palette) => {
  const { red, gray, yellow } = colors;

  return {
    'diffEditor.border': gray.gray_400,
    'diffEditor.insertedTextBackground': alpha(yellow.yellow_600, 0.35),
    'diffEditor.insertedTextBorder': gray.gray_400,
    'diffEditor.removedTextBackground': alpha(red.red_600, 0.35),
    'diffEditor.removedTextBorder': gray.gray_400
  };
};

export { getDiffEditor };