import { speciesName, Istats } from "./species/index";
import { Size } from "../components/Size/SizeEnum";

export interface Icharacter {
    name: string;
    label: string;
    value: speciesName;
    size: Size;
    sizeMin?: Size;
    sizeMax?: Size;
    wounds?: number;
    move?: number;
    traits: string[];
    generic: any[];
    careers: string[];
    baseStats: Istats;
    statModifiers: Istats;
    statImprovements: Istats[];
}

export const nullStats: Istats = {
    M: 0,
    WS: 0,
    BS: 0,
    S: 0,
    T: 0,
    I: 0,
    Ag: 0,
    Dex: 0,
    Int: 0,
    WP: 0,
    Fel: 0,
};

export const defaultCharacter: Icharacter = {
    name: "New Character",
    value: "human",
    label: "Human",
    size: Size.AVERAGE,
    traits: [],
    generic: [],
    careers: [],
    baseStats: {
        M: 4,
        WS: 30,
        BS: 30,
        S: 30,
        T: 30,
        I: 30,
        Ag: 30,
        Dex: 30,
        Int: 30,
        WP: 30,
        Fel: 30,
    },
    statModifiers: Object.assign({}, nullStats),
    statImprovements: [],
};
