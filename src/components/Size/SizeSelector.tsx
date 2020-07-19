import * as React from "react";
import { Size } from "./SizeEnum";
import { Text } from "../../context/";
import allSpecies, { speciesName, ISpecies } from "../../data/species";

import "./size.css";

interface ISizeSelectorProps {
    speciesId: speciesName;
}

interface ISizeRangeSelectorProps {
    min?: Size;
    max?: Size;
}

const SizeRangeSelector = ({ min, max }: ISizeRangeSelectorProps) => {
    const RangeOptions = ({ min, max }: { min: Size; max: Size }) => {
        const text = React.useContext(Text);
        let options: React.ReactNode[] = [];
        let i = min;
        while (i++ <= max) {
            options.push(<option value={i} label={text.npc.sizeStrings[i]} />);
        }
        return <datalist id="sizeoptions">{options}</datalist>;
    };

    if (min && max) {
        return (
            <section>
                <RangeOptions min={min} max={max} />
                <input type="range" list="sizeoptions" />
            </section>
        );
    }
    return null;
};

export const SizeSelector = ({ speciesId }: ISizeSelectorProps) => {
    const text = React.useContext(Text);

    const currentSpecies: ISpecies = allSpecies[speciesId];
    const size = currentSpecies.size ?? Size.AVERAGE;
    const { minSize, maxSize } = currentSpecies;

    return (
        <section className="size">
            <h4>{text.npc.sizeStrings[size]}</h4>
            <SizeRangeSelector min={minSize} max={maxSize} />
        </section>
    );
};
