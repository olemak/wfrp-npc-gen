import * as React from "react";
import Select from "react-select";
import { genericTraitOptions } from "../data/traits/genericTraitOptions";
import { text } from "../context";

export const TraitSelectorGeneric = () => (
    <Select
        options={genericTraitOptions}
        placeholder={text.npc.GenericTraits}
        isMulti
    />
);
