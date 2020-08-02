import { speciesName, Istats } from "./species/index";
import { Size } from "../components/Size/SizeEnum";
import { selectedCareersType } from "../components/Career/CareerSelector";
import { effectTalentNameType } from "../components/Talent/Talents";

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
    statsBase: Istats;
    statsRandom: Istats;
    statsAdvances: Istats;
    careerSet: selectedCareersType;
    effectTalents: effectTalentNameType[];
    editView: boolean;
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
    name: "New Character Name",
    value: "human",
    label: "Human",
    size: Size.AVERAGE,
    traits: [],
    generic: [],
    careers: [],
    statsBase: {
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
    statsRandom: nullStats,
    statsAdvances: nullStats,
    careerSet: [
        {
            careerId: null,
            careerTiers: [true, false, false, false],
        },
        {
            careerId: null,
            careerTiers: [true, false, false, false],
        },
        {
            careerId: null,
            careerTiers: [true, false, false, false],
        },
    ],
    effectTalents: [],
    editView: true,
};
