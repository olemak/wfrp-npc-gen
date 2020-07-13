import * as React from "react";
import {
    TraitSelectorSpecies,
    ITraitSelectorOption,
} from "./TraitSelectorSpecies";

export default {
    title: "Trait Selector",
    component: TraitSelectorSpecies,
};

const setTraitsSpecies = (newTraits: ITraitSelectorOption[]) => {
    console.log(newTraits);
};

export const Default = () => (
    <TraitSelectorSpecies species="human" handleChange={setTraitsSpecies} />
);
