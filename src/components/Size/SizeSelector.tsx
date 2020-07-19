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
}: ISizeSelectorProps) => {
    const text = React.useContext(Text);

    const currentSpecies: ISpecies = allSpecies[speciesId];
    const { size, minSize, maxSize } = currentSpecies;
    const speciesSize = size ?? Size.AVERAGE;
    const [sizeState, setSizeState] = React.useState(speciesSize);

    const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSize = event.target.valueAsNumber;
        setSizeState(newSize);
        handleChange(newSize);
    };

    React.useEffect(() => {
        handleChange(speciesSize);
    }, [handleChange, speciesSize]);

    return (
        <section className="size">
            <strong
                style={{ display: "inline-block", minWidth: "136px" }}
            >{`Size: ${text.npc.sizeStrings[sizeState]} `}</strong>
            {minSize && maxSize && (
                <input
                    type="range"
                    min={minSize}
                    max={maxSize}
                    step={1}
                    value={sizeState}
                    onChange={handleSizeChange}
                />
            )}
            <br />
            <br />
        </section>
    );
};
