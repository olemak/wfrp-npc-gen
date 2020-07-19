import { ISpecies } from ".";
import { Size } from "../../components/Size/SizeEnum";

export const halfling: ISpecies = {
    label: "Halfling",
    value: "halfling",
    baseStats: {
        WS: 20,
        BS: 40,
        S: 20,
        T: 30,
        I: 30,
        Ag: 30,
        Dex: 40,
        Int: 30,
        WP: 40,
        Fel: 40,
    },
    size: Size.SMALL,
    fixed: ["nightvision", "weapon"],
    optional: ["ranged", "stealthy"],
};
