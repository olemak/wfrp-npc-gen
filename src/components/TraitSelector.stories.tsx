import * as React from "react";
import { TraitSelector } from "./TraitSelector";

export default {
    title: "Trait Selector",
    component: TraitSelector,
};

const mockHumanRacialTraits = [
    { value: "prejudice", label: "Prejudice (choose one)", isFixed: true },
    { value: "handweapon", label: "Hand Weapon", isFixed: true },
    { value: "disease", label: "Disease" },
    { value: "ranged", label: "Ranged Attack" },
    { value: "spellcaster", label: "Spellcaster" },
];

export const Default = () => (
    <TraitSelector options={mockHumanRacialTraits}>
        Species Traits
    </TraitSelector>
);
