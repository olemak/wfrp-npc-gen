import * as React from "react";
import Select from "react-select";
// import { Character } from "../context";

interface ITraitSelectorOption {
    value: string;
    label: string;
    isFixed?: boolean;
}
interface ITraitSelectorProps {
    options?: ITraitSelectorOption[];
    children: React.ReactNode;
}

export const TraitSelector = ({ options, children }: ITraitSelectorProps) => {
    //  const characterContext = React.useContext(Character);
    if (options) {
        return (
            <section>
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
            </section>
        );
    }
    return <h3>{children}</h3>;
};
