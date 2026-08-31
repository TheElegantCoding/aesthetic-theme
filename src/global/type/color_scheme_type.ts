type ColorType = Record<string, string>;

type Palette = {
  syntax: {
    blue: string;
    cyan: string;
    green: string;
    purple: string;
    emerald: string;
    amber: string;
    lightBlue: string;
  };
  base: ColorType;
  gray: ColorType;
  blue: ColorType;
  red: ColorType;
  green: ColorType;
  purple: ColorType;
  yellow: ColorType;
  emerald: ColorType;
  background: ColorType;
};

export type { Palette, ColorType };