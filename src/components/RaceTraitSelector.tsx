import * as React from "react";
import Select from "react-select";

interface IRaceTraitSelectorOption {
    value: string;
    label: string;
    isFixed?: boolean;
}
interface IRaceTraitSelectorProps {
    options: IRaceTraitSelectorOption[];
}

export const RaceTraitSelector = ({ options }: IRaceTraitSelectorProps) => {
    return (
        <>
            <div>
                {options
                    .filter((option) => option.isFixed)
                    .map((fixedOption) => (
                        <span>{fixedOption.label}</span>
                    ))}
            </div>
            <Select
                options={options.filter((option) => !option.isFixed)}
                isMulti
            />
        </>
    );
};
