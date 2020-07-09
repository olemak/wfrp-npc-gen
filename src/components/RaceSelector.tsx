import * as React from "react";
import Select from "react-select";
import { Text } from "../App";

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
            <h3>{text.npc.selectRace}</h3>
            <Select options={options} />
        </section>
    );
};
