import * as React from "react";
import Select from "react-select";
import { Text } from "../context";
import { species as options } from "../data/species/manifest";

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
        <section className="species-selection">
            <h3>{text.npc.selectSpecies}</h3>
            <Select options={options} onChange={setSpecies} />
        </section>
    );
};
