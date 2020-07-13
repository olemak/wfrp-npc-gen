import * as React from "react";
import Select from "react-select";
import { genericTraitOptions } from "../data/traits/genericTraitOptions";
import { text } from "../context";
import { ITraitSelectorOption } from "./TraitSelectorSpecies";

interface ITraitSelectorGeneric {
    handleChange: (newTraits: ITraitSelectorOption[]) => void;
}

export const TraitSelectorGeneric = ({
    handleChange,
}: ITraitSelectorGeneric) => {
    const setTraitsGeneric = (value: any, action: any) => {
        if (value) {
            handleChange(value);
        } else {
            handleChange([]);
        }
    };

    return (
        <Select
            options={genericTraitOptions}
            placeholder={text.npc.GenericTraits}
            onChange={setTraitsGeneric}
            isMulti
        />
    );
};
