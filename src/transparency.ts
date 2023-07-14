import chroma from "chroma-js";

const alpha = (color: string, alpha: number) => {
  return chroma(color).alpha(alpha).hex();
};

export default {
  semiClearTransparency: (color: string) => alpha(color, 0.2),
  moderateTransparency: (color: string) => alpha(color, 0.35),
  halfwayTransparency: (color: string) => alpha(color, 0.5),
  lowTransparency: (color: string) => alpha(color, 0.75),
};
