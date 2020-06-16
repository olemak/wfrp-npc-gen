import * as React from "react";
import { RaceTraitSelector } from "./RaceTraitSelector";

export default {
    title: "Racial Trait Selector",
    component: RaceTraitSelector,
};

const mockHumanRacialTraits = [
    { value: "prejudice", label: "Prejudice (choose one)", isFixed: true },
    { value: "handweapon", label: "Hand Weapon", isFixed: true },
    { value: "disease", label: "Disease" },
    { value: "ranged", label: "Ranged Attack" },
    { value: "spellcaseter", label: "Spellcaster" },
];

export const Default = () => (
    <RaceTraitSelector options={mockHumanRacialTraits} />
);
