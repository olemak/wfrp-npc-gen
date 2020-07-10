import * as React from "react";
import Select from "react-select";
import { Text } from "../context";

interface ISpeciesSelectorOption {
    value: string;
    label: string;
}

interface ISpeciesSelectorProps {
    options: ISpeciesSelectorOption[];
}

export const SpeciesSelector = ({ options }: ISpeciesSelectorProps) => {
    const text = React.useContext(Text);
    return (
        <section className="species-selection">
            <h3>{text.npc.selectSpecies}</h3>
            <Select options={options} />
        </section>
    );
};
