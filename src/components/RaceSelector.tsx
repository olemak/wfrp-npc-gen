import * as React from "react";
import Select from "react-select";
import { Text } from "../context";

interface IRaceSelectorOption {
    value: string;
    label: string;
}

interface IRaceSelectorProps {
    options: IRaceSelectorOption[];
}

export const RaceSelector = ({ options }: IRaceSelectorProps) => {
    const text = React.useContext(Text);
    return (
        <section className="race-selection">
            <h3>{text.npc.selectSpecies}</h3>
            <Select options={options} />
        </section>
    );
};
