import type { Palette } from '@global/type/color_scheme_type';

type ThemeType = {
  colors: Palette;
  type: 'dark' | 'light';
  name: string;
  semanticClass?: string;
  author?: string;
  maintainers?: string[];
};

export type { ThemeType };