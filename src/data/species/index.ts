import { human } from "./human";
import { dwarf } from "./dwarf";

export type speciesName = "human" | "dwarf";

export const allSpecies = {
    human,
    dwarf,
};

export default allSpecies;
