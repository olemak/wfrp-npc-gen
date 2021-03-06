import * as React from "react";
import Select from "react-select";
import { Text } from "../context";
import { species } from "../data/species/manifest";
import { speciesName } from "../data/species";

export interface ISpeciesSelectorOption {
    value: speciesName;
    label: string;
}

interface ISpeciesSelectorProps {
    handleChange: (species: ISpeciesSelectorOption, action: any) => void;
    value: ISpeciesSelectorOption;
}

export const SpeciesSelector = ({
    handleChange,
    value,
}: ISpeciesSelectorProps) => {
    const text = React.useContext(Text);

    const setSpecies = (value: any, action: any) => {
        handleChange(value, action);
    };

    return (
        <Select
            options={species}
            value={value}
            onChange={setSpecies}
            placeholder={text.npc.selectSpecies}
        />
    );
};
