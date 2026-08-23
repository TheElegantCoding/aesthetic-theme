import type { Palette } from '@global/type/color_scheme_type';

const getGit = (colors: Palette) => {
  const {
    red,
    gray,
    green,
    purple,
    yellow
  } = colors;

  return {
    'gitDecoration.addedResourceForeground': green.green_500,
    'gitDecoration.untrackedResourceForeground': green.green_700,
    'gitDecoration.deletedResourceForeground': red.red_500,
    'gitDecoration.stageDeletedResourceForeground': red.red_700,
    'gitDecoration.modifiedResourceForeground': yellow.yellow_500,
    'gitDecoration.submoduleResourceForeground': yellow.yellow_700,
    'gitDecoration.stageModifiedResourceForeground': yellow.yellow_800,
    'gitDecoration.conflictingResourceForeground': purple.purple_500,
    'gitDecoration.ignoredResourceForeground': gray.gray_500,

    'editorCodeLens.foreground': gray.gray_400
  };
};

export { getGit };