import * as React from "react";
import Select from "react-select";
import { genericTraitOptions } from "./../data/traits/genericTraitOptions";
import { prepareSpeciesTraitOptions } from "../logic/prepareSpeciesTraitOptions";
import { speciesName } from "../data/species/index";

export interface ITraitSelectorOption {
    value: string;
    label: string;
    isFixed?: boolean;
}
interface ITraitSelectorProps {
    children: React.ReactNode;
    species?: speciesName;
}

export const TraitSelector = ({ children, species }: ITraitSelectorProps) => {
    const options = species
        ? prepareSpeciesTraitOptions(species)
        : genericTraitOptions;
    return (
        <section>
            <h3>{children}</h3>
            <Select options={options} isMulti />
        </section>
    );
};
