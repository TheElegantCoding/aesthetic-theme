import type { Palette } from '@global/type/color_scheme_type';

const getJson = (colors: Palette) => {
  const { cyan, blue } = colors;

  return [{
    name: 'JSON constants',
    scope: 'constant.language.json',
    settings: {
      foreground: cyan.cyan_600
    }
  }, {
    name: 'JSON name',
    scope: 'support.type.property-name.json',
    settings: {
      fontStyle: 'bold',
      foreground: blue.blue_600
    }
  }];
};

export { getJson };