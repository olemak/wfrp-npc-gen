import * as React from "react";
import Select from "react-select";
import { Text } from "../context";
import { species } from "../data/species/manifest";

export interface ISpeciesSelectorOption {
    value: string;
    label: string;
}

interface ISpeciesSelectorProps {
    handleChange: (species: ISpeciesSelectorOption, action: any) => void;
}

export const SpeciesSelector = ({ handleChange }: ISpeciesSelectorProps) => {
    const text = React.useContext(Text);

    const setSpecies = (value: any, action: any) => {
        handleChange(value, action);
    };

    return (
        <Select
            options={species}
            onChange={setSpecies}
            placeholder={text.npc.selectSpecies}
        />
    );
};
