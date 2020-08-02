import * as React from "react";
import { SpeciesSelector } from "./SpeciesSelector";

export default {
    title: "Species Selector",
    component: SpeciesSelector,
};

const mockSetSpecies = (e: any) => {
    console.log(e);
};

export const Default = () => (
    <SpeciesSelector
        value={{ value: "human", label: "Human" }}
        handleChange={mockSetSpecies}
        editView={true}
    />
);
