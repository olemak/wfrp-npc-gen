import { ISpecies } from ".";
import { Size } from "../../components/Size/SizeEnum";

// TODO: (Human) remove debug size values

export const human: ISpecies = {
    label: "Human",
    value: "human",
    size: Size.AVERAGE,
    minSize: Size.LITTLE,
    maxSize: Size.ENORMOUS,
    fixed: ["prejudice", "weapon"],
    optional: ["disease", "ranged", "spellcaster"],
};
