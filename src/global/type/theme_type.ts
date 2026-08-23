import type { Palette } from '@global/type/color_scheme_type';

type ThemeType = {
  colors: Palette;
  type: 'dark' | 'light';
  name: string;
};

export type { ThemeType };