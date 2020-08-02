import * as React from "react";
import "./name.css";

interface IName {
    handleChange: (name: string) => void;
    value: string;
}

export const Name = ({ value, handleChange }: IName) => {
    const setName = (event: any) => {
        handleChange(event.target.value);
    };

    const handleFocus = (event: any) => event.target.select();

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
};
