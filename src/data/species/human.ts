import { ISpecies } from ".";
import { Size } from "../../components/Size/SizeEnum";

// TODO: (Human) remove debug size values and bodus traits (Brute, Champion)

export const human: ISpecies = {
    label: "Human",
    value: "human",
    baseStats: {
        M: 4,
        WS: 30,
        BS: 30,
        S: 30,
        T: 30,
        I: 30,
        Ag: 30,
        Dex: 30,
        Int: 30,
        WP: 30,
        Fel: 30,
    },
    size: Size.AVERAGE,
    minSize: Size.LITTLE,
    maxSize: Size.ENORMOUS,
    fixed: ["prejudice", "weapon"],
    optional: ["disease", "ranged", "spellcaster"],
};
