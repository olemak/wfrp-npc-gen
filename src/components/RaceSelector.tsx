import * as React from "react";
import Select from "react-select";

interface IRaceSelectorOption {
    value: string;
    label: string;
}
interface IRaceSelectorProps {
    options: IRaceSelectorOption[];
}

export const RaceSelector = ({ options }: IRaceSelectorProps) => {
    return <Select options={options} />;
};
