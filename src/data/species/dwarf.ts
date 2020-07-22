import { ISpecies } from ".";

// TODO: Update Dwarf with actual values
export const dwarf: ISpecies = {
    value: "dwarf",
    label: "Dwarf",
    baseStats: {
        M: 3,
        WS: 40,
        BS: 30,
        S: 30,
        T: 40,
        I: 30,
        Ag: 20,
        Dex: 40,
        Int: 30,
        WP: 50,
        Fel: 20,
    },
    fixed: [
        "animosity",
        "hatred",
        "magicresistance",
        "nightvision",
        "prejudice",
        "weapon",
    ],
    optional: ["fury", "ranged"],
};
