import * as React from "react";
import "./name.css";

interface IName {
    handleChange: (name: string) => void;
    value: string;
    editView: boolean;
}

export const Name = ({ editView, value, handleChange }: IName) => {
    const setName = (event: any) => {
        handleChange(event.target.value);
    };

    const handleFocus = (event: any) => event.target.select();

    if (editView) {
        return (
            <input
                className="character__name"
                type="text"
                placeholder="Please enter the character's name"
                value={value}
                onChange={setName}
                onFocus={handleFocus}
                autoFocus
            />
        );
    }

    return <h2>{value}</h2>;
};
