import { traitName } from "../traits/traitsManifest";
import { dwarf } from "./dwarf";
import { human } from "./human";
import { halfling } from "./halfling";
import { Size } from "../../components/Size/SizeEnum";

export type speciesName = "human" | "dwarf" | "halfling";

export interface ISpecies {
    value: speciesName;
    label?: string;
    size?: Size;
    minSize?: Size;
    maxSize?: Size;
    fixed: traitName[];
    optional: traitName[];
}

const allSpecies = {
    human,
    dwarf,
    halfling,
};

export default allSpecies;
