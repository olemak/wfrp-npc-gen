import * as React from "react";
import { SpeciesSelector } from "./SpeciesSelector";

export default {
    title: "Species Selector",
    component: SpeciesSelector,
};

const mockSpecies = [
    { value: "human", label: "Human" },
    { value: "dwarf", label: "Dwarf" },
    { value: "halfling", label: "Halfling" },
    { value: "high-elf", label: "High Elf" },
    { value: "wood-elf", label: "Wood Elf" },
];

const mockSetSpecies = (e: any) => {
    console.log(e);
};

export const Default = () => (
    <SpeciesSelector options={mockSpecies} handleChange={mockSetSpecies} />
);
