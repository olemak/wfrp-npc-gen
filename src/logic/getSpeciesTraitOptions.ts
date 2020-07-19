import allSpecies, { speciesName, Istats } from "../data/species";
import { traitsManifest, traitName } from "../data/traits/traitsManifest";
import { ITraitSelectorOption } from "../components/TraitSelectorSpecies";

export function getSpeciesTraitOptions(
    speciesId: speciesName
): {
    optional: ITraitSelectorOption[];
    fixed: ITraitSelectorOption[];
    baseStats: Istats;
} {
    const fixed = traitsManifest.filter((trait) =>
        allSpecies[speciesId].fixed.some(
            (value: traitName) => value === trait.value
        )
    );
    const optional = traitsManifest.filter((trait) =>
        allSpecies[speciesId].optional.some(
            (value: traitName) => value === trait.value
        )
    );

    const baseStats = allSpecies[speciesId].baseStats;

    return { fixed, optional, baseStats };
}
