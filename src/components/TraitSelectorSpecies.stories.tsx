import * as React from "react";
import { TraitSelectorSpecies } from "./TraitSelectorSpecies";

export default {
    title: "Trait Selector",
    component: TraitSelectorSpecies,
};

export const Default = () => <TraitSelectorSpecies species="human" />;
