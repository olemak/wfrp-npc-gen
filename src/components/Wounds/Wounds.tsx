import * as React from "react";
import "./wounds.css";
import { Istats } from "../../data/species";
import { effectTalentNameType } from "../Talent/Talents";
import { Size } from "../Size/SizeEnum";
import { Text } from "../../context";
import { calculateWounds } from "./../../logic/calculateWounds";

interface IWounds {
    statsBase: Istats;
    statsRandom: Istats;
    statsAdvances: Istats;
    talents: effectTalentNameType[];
    size: Size;
}

export const Wounds = ({
    statsBase,
    statsRandom,
    statsAdvances,
    talents,
    size,
}: IWounds) => {
    const text = React.useContext(Text);

    const isHardy: boolean = talents.includes("Hardy");
    const Toughness: number = Math.floor(
        (statsBase["T"] + statsRandom["T"] + statsAdvances["T"]) / 10
    );
    const WillPower: number = Math.floor(
        (statsBase["WP"] + statsRandom["WP"] + statsAdvances["WP"]) / 10
    );
    const Strength: number = Math.floor(
        (statsBase["S"] + statsRandom["S"] + statsAdvances["S"]) / 10
    );

    let wounds: number = calculateWounds(size, Toughness, WillPower, Strength);

    console.log(talents, isHardy);

    wounds += isHardy ? Toughness * Toughness : 0;

    return (
        <span className="wounds">
            {text.npc.wounds}:<span className="wounds__value">{wounds}</span>
        </span>
    );
};
