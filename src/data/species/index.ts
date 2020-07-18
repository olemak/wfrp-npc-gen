import { traitName } from "../traits/traitsManifest";
import { dwarf } from "./dwarf";
import { human } from "./human";
import { halfling } from "./halfling";

export enum Size {
    TINY,
    LITTLE,
    SMALL,
    AVERAGE,
    LARGE,
    ENORMOUS,
    MONSTROUS,
}

export type speciesName = "human" | "dwarf" | "halfling";

export interface ISpecies {
    value: speciesName;
    label?: string;
    size?: Size | Size[];
    fixed: traitName[];
    optional: traitName[];
}

const allSpecies = {
    human,
    dwarf,
    halfling,
};

export default allSpecies;
