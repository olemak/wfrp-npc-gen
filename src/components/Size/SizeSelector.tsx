import * as React from "react";
import { Size } from "./SizeEnum";
import { Text } from "../../context/";
import allSpecies, { speciesName, ISpecies } from "../../data/species";

import "./size.css";

interface ISizeSelectorProps {
    speciesId: speciesName;
    handleChange: (newSize: Size) => void;
    sizeValue: Size;
}

export const SizeSelector = ({
    speciesId,
    handleChange,
    sizeValue,
}: ISizeSelectorProps) => {
    const text = React.useContext(Text);
    const currentSpecies: ISpecies = allSpecies[speciesId];
    const { minSize, maxSize } = currentSpecies;

    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(event.target.valueAsNumber);
    };

    return (
        <section className="size">
            <strong>{`Size: ${text.npc.sizeStrings[sizeValue]} `}</strong>
            {minSize && maxSize && (
                <input
                    type="range"
                    min={minSize}
                    max={maxSize}
                    step={1}
                    onChange={handleSizeChange}
                />
            )}
        </section>
    );
};
