const alpha = (color: string, opacity: number) => {
  const maxOpacity = 0;
  const base16 = 16;
  const hex = 255;
  const hexOpacity = Math.round(Math.min(Math.max(opacity || 1, maxOpacity), 1) * hex);

  return color + hexOpacity.toString(base16).toUpperCase();
};

export { alpha };