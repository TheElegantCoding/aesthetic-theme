type ColorType = Record<string, string>;

type Palette = {
  syntax: {
    blue: string;
    cyan: string;
    lightCyan: string;
    green: string;
    purple: string;
    emerald: string;
    amber: string;
    lightBlue: string;
  };
  base: ColorType;
  gray: ColorType;
  blue: ColorType;
  cyan: ColorType;
  lime: ColorType;
  rose: ColorType;
  red: ColorType;
  sky: ColorType;
  amber: ColorType;
  green: ColorType;
  indigo: ColorType;
  purple: ColorType;
  orange: ColorType;
  yellow: ColorType;
  emerald: ColorType;
  neutral: ColorType;
  background: ColorType;
};

export type { Palette, ColorType };