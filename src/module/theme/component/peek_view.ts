import { alpha } from '@global/util/alpha';

import type { Palette } from '@global/type/color_scheme_type';

const getPeekView = (colors: Palette) => {
  const { gray, background } = colors;

  return {
    'peekView.border': gray.gray_500,
    'peekViewEditor.background': background.background_900,
    'peekViewEditorGutter.background': background.background_900,
    'peekViewResult.background': background.background_900,
    'peekViewResult.fileForeground': gray.gray_200,
    'peekViewResult.lineForeground': gray.gray_400,
    'peekViewResult.selectionForeground': gray.gray_200,
    'peekViewTitle.background': background.background_800,
    'peekViewTitleDescription.foreground': gray.gray_400,
    'peekViewTitleLabel.foreground': gray.gray_200,
    'peekViewResult.hoverBackground': alpha(gray.gray_700, 0.35),
    'peekViewEditor.matchHighlightBackground': alpha(gray.gray_600, 0.5),
    'peekViewResult.matchHighlightBackground': alpha(gray.gray_600, 0.5)
  };
};

export { getPeekView };