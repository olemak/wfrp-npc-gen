import { ISpecies } from ".";

export const halfling: ISpecies = {
    label: "Halfling",
    value: "halfling",
    //   size: Size.SMALL,
    fixed: ["nightvision", "weapon"],
    optional: ["ranged", "stealthy"],
};
