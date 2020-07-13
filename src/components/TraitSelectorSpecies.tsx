import * as React from "react";
import Select from "react-select";
import { allSpecies, speciesName } from "../data/species";
import { traitsManifest } from "../data/traits/traitsManifest";
import { text } from "../context/index";

export interface ITraitSelectorOption {
    value: string;
    label: string;
    isFixed?: boolean;
}
interface ISpeciesTraitSelectorProps {
    species: speciesName;
    handleChange: (newTraits: ITraitSelectorOption[]) => void;
}

function getSpeciesTraitOptions(
    speciesId: speciesName
): { optional: ITraitSelectorOption[]; fixed: ITraitSelectorOption[] } {
    const fixed = traitsManifest.filter((trait) =>
        allSpecies[speciesId].fixed.some((id) => id === trait.value)
    );
    const optional = traitsManifest.filter((trait) =>
        allSpecies[speciesId].optional.some((id) => id === trait.value)
    );

    return { fixed, optional };
}

export const TraitSelectorSpecies = ({
    species,
    handleChange,
}: ISpeciesTraitSelectorProps) => {
    const options: {
        optional: ITraitSelectorOption[];
        fixed: ITraitSelectorOption[];
    } = getSpeciesTraitOptions(species);

    const setTraitsSpecies = (value: any, action: any) => {
        console.log(options.fixed);
        handleChange(options.fixed.concat(value));
    };

    return (
        <section>
            <div>
                <strong>
                    {text.npc.FixedSpeciesTraits}: &nbsp;&nbsp;&nbsp;&nbsp;
                </strong>
                {options.fixed.map((fixedOption) => (
                    <span key={fixedOption.value}>
                        {fixedOption.label}&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                ))}
            </div>
            <Select
                options={options.optional}
                placeholder={text.npc.OptionalSpeciesTraits}
                onChange={setTraitsSpecies}
                isMulti
            />
            <br />
        </section>
    );
};
