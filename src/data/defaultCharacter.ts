import { speciesName } from "./species/index";
import { traitName } from "./traits/traitsManifest";

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
    traits: string[];
    generic: string[];
    careers: string[];
    statModifiers: Istats;
}
export const defaultCharacter: Icharacter = {
    name: "New Character",
    value: "human",
    label: "Human",
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
