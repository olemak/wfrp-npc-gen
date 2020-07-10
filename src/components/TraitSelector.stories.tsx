import * as React from "react";
import { SpeciesSelector } from "./SpeciesSelector";

export default {
    title: "Trait Selector",
    component: SpeciesSelector,
};

const mockHumanRacialTraits = [
    { value: "prejudice", label: "Prejudice (choose one)", isFixed: true },
    { value: "handweapon", label: "Hand Weapon", isFixed: true },
    { value: "disease", label: "Disease" },
    { value: "ranged", label: "Ranged Attack" },
    { value: "spellcaster", label: "Spellcaster" },
];

export const Default = () => (
    <SpeciesSelector options={mockHumanRacialTraits} />
);
