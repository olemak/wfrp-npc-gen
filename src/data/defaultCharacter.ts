import { ITraitSelectorOption } from "../components/TraitSelectorSpecies";
import { ISpeciesSelectorOption } from "../components/SpeciesSelector";

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
    species: ISpeciesSelectorOption;
    size?: string;
    speciesTraits: ITraitSelectorOption[];
    genericTraits: ITraitSelectorOption[];
    careers: string[];
    statModifiers: Istats;
}
export const defaultCharacter: Icharacter = {
    name: "New Character",
    species: { label: "Human", value: "human" },
    size: "medium",
    speciesTraits: [],
    genericTraits: [],
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
