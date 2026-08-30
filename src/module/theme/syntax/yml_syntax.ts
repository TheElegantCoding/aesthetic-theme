import type { Palette } from '@global/type/color_scheme_type';

const ymlSyntax = (_colors: Palette) => {
  return [{
    name: 'YAML sequence item',
    scope: 'punctuation.definition.block.sequence.item.yaml',
    settings: {
      fontStyle: 'bold'
    }
  }];
};

export { ymlSyntax };