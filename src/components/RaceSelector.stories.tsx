import * as React from "react";
import { RaceSelector } from "./RaceSelector";

export default {
    title: "Race Selector",
    component: RaceSelector,
};

const mockRaces = [
    { value: "human", label: "Human" },
    { value: "dwarf", label: "Dwarf" },
    { value: "halfling", label: "Halfling" },
    { value: "high-elf", label: "High Elf" },
    { value: "wood-elf", label: "Wood Elf" },
];

export const Default = () => <RaceSelector options={mockRaces} />;
