import { ISpecies } from ".";

// TODO: Update Dwarf with actual values
export const dwarf: ISpecies = {
    value: "dwarf",
    label: "Dwarf",
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
