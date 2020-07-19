import { traitName } from "../traits/traitsManifest";
import { dwarf } from "./dwarf";
import { human } from "./human";
import { halfling } from "./halfling";
import { Size } from "../../components/Size/SizeEnum";

export type speciesName = "human" | "dwarf" | "halfling";

export interface Istats {
    WS: number;
    BS: number;
    S: number;
    T: number;
    I: number;
    Ag: number;
    Dex: number;
    Int: number;
    WP: number;
    Fel: number;
}

export interface ISpecies {
    value: speciesName;
    label?: string;
    baseStats: Istats;
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
