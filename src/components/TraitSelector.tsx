import * as React from "react";
import Select from "react-select";

interface ISelectorOption {
    value: string;
    label: string;
    isFixed?: boolean;
}
interface ISelectorProps {
    options: ISelectorOption[];
}

export const Selector = ({ options }: ISelectorProps) => {
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
