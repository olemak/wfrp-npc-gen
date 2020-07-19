import { speciesName } from "./species/index";
import { Size } from "../components/Size/SizeEnum";

interface Istats {
    M: number;
    WS: number;
    BS: number;
    S: number;
    T: number;
    I: number;
    Ag: number;
    Dex: number;
    Int: number;
    WP: number;
    Fel: number;
}

export interface Icharacter {
    name: string;
    label: string;
    value: speciesName;
    size: Size;
    sizeMin?: Size;
    sizeMax?: Size;
    traits: string[];
    generic: string[];
    careers: string[];
    statModifiers: Istats;
}
export const defaultCharacter: Icharacter = {
    name: "New Character",
    value: "human",
    label: "Human",
    size: Size.AVERAGE,
    traits: [],
    generic: [],
    careers: [],
    statModifiers: {
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
    },
};
