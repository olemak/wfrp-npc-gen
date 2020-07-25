import * as React from "react";
import "./wounds.css";
import { Istats } from "../../data/species";
import { effectTalentNameType } from "../Talent/Talents";
import { Size } from "../Size/SizeEnum";
import { Text } from "../../context";

interface IWounds {
    stats: Istats;
    talents: effectTalentNameType[];
    size: Size;
}

export const Wounds = ({ stats, talents }: IWounds) => {
    const text = React.useContext(Text);
    let wounds: number;

    wounds = 10;

    return (
        <span className="character__wounds">{`${wounds} ${text.npc.wounds}`}</span>
    );
};
