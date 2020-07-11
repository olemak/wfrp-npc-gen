import * as React from "react";
import Select from "react-select";
import { Text } from "../context";

export interface ISpeciesSelectorOption {
    value: string;
    label: string;
}

interface ISpeciesSelectorProps {
    options: ISpeciesSelectorOption[];
    handleChange: (species: ISpeciesSelectorOption, action: any) => void;
}

export const SpeciesSelector = ({
    options,
    handleChange,
}: ISpeciesSelectorProps) => {
    const text = React.useContext(Text);

    const setSpecies = (value: any, action: any) => {
        // console.log(value, action);
        handleChange(value, action);
    };

    return (
        <section className="species-selection">
            <h3>{text.npc.selectSpecies}</h3>
            <Select options={options} onChange={setSpecies} />
        </section>
    );
};
