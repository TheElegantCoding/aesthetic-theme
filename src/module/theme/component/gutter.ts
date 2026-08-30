import type { Palette } from '@global/type/color_scheme_type';

const getGutter = (colors: Palette) => {
  const {
    red,
    gray,
    green,
    yellow,
    background
  } = colors;

  return {
    'editorGutter.addedBackground': green.green_500,
    'editorGutter.background': background.background_950,
    'editorGutter.deletedBackground': red.red_500,
    'editorGutter.foldingControlForeground': gray.gray_400,
    'editorGutter.modifiedBackground': yellow.yellow_500,
    'editorGutter.commentRangeForeground': gray.gray_600,
    'editorGutter.itemHoverBackground': background.background_800,
    'editorLineNumber.activeForeground': gray.gray_300,
    'editorLineNumber.foreground': gray.gray_500
  };
};

export { getGutter };