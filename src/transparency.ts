import chroma from "chroma-js";

const alpha = (color: string, alpha: number) => {
	return chroma(color).alpha(alpha).hex();
};

export default {
	nearlyTransparent: (color: string) => alpha(color, 0.15),
	quarterTransparent: (color: string) => alpha(color, 0.25),
	halfwayTransparent: (color: string) => alpha(color, 0.5),
	nearlySolid: (color: string) => alpha(color, 0.75),
};
