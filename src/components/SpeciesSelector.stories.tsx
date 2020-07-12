import * as React from "react";
import { SpeciesSelector } from "./SpeciesSelector";

export default {
    title: "Species Selector",
    component: SpeciesSelector,
};

const mockSetSpecies = (e: any) => {
    console.log(e);
};

export const Default = () => <SpeciesSelector handleChange={mockSetSpecies} />;
