type ColorType = Record<string, string>;

type Pallete = {
  base: ColorType;
  gray: ColorType;
  blue: ColorType;
  cyan: ColorType;
  lime: ColorType;
  rose: ColorType;
  green: ColorType;
  indigo: ColorType;
  purple: ColorType;
  orange: ColorType;
  yellow: ColorType;
  emerald: ColorType;
  neutral: ColorType;
  background: ColorType;
};

export type { Pallete, ColorType };