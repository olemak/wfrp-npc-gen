import * as React from "react";
import Select from "react-select";
import { genericTraitOptions } from "../data/traits/genericTraitOptions";
import { text } from "../context";
import { ITraitSelectorOption } from "./TraitSelectorSpecies";

interface ITraitSelectorGeneric {
    handleChange: (newTraits: ITraitSelectorOption[]) => void;
    editView: boolean;
}

export const TraitSelectorGeneric = ({
    handleChange,
    editView,
}: ITraitSelectorGeneric) => {
    const setTraitsGeneric = (value: any, action: any) => {
        if (value) {
            handleChange(value);
        } else {
            handleChange([]);
        }
    };

    if (editView) {
        return (
            <section style={{ marginBottom: "3rem" }}>
                <Select
                    options={genericTraitOptions}
                    placeholder={text.npc.GenericTraits}
                    onChange={setTraitsGeneric}
                    isMulti
                />
            </section>
        );
    }

    if (!editView) {
        return <h4>Generic Traits</h4>;
    }
    return null;
};
