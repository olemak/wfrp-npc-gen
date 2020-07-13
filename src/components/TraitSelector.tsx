import * as React from "react";
import Select from "react-select";
import { allSpecies, speciesName } from "../data/species";
import { genericTraitOptions } from "../data/traits/genericTraitOptions";
import { traitsManifest } from "../data/traits/traitsManifest";
import { text } from "../context/index";

export interface ITraitSelectorOption {
    value: string;
    label: string;
    isFixed?: boolean;
}
interface ITraitSelectorProps {
    species?: speciesName;
}

function getSpeciesTraitOptions(
    speciesId: speciesName
): { optional: ITraitSelectorOption[]; fixed: ITraitSelectorOption[] } {
    const fixed = traitsManifest.filter((trait) =>
        allSpecies.human.fixed.some((id) => id === trait.value)
    );
    const optional = traitsManifest.filter((trait) =>
        allSpecies.human.optional.some((id) => id === trait.value)
    );

    return { fixed, optional };
}

export const TraitSelector = ({ species }: ITraitSelectorProps) => {
    if (!species) {
        return (
            <Select
                options={genericTraitOptions}
                placeholder={text.npc.GenericTraits}
                isMulti
            />
        );
    }

    const options: {
        optional: ITraitSelectorOption[];
        fixed: ITraitSelectorOption[];
    } = getSpeciesTraitOptions(species);

    return (
        <section>
            <div>
                <strong>
                    {text.npc.FixedSpeciesTraits}: &nbsp;&nbsp;&nbsp;&nbsp;
                </strong>
                {options.fixed.map((fixedOption) => (
                    <span>{fixedOption.label}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                ))}
            </div>
            <Select
                options={options.optional}
                placeholder={text.npc.OptionalSpeciesTraits}
                isMulti
            />
            <br />
        </section>
    );
};
