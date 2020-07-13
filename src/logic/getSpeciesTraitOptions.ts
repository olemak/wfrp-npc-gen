import { allSpecies, speciesName } from "../data/species";
import { traitsManifest } from "../data/traits/traitsManifest";
import { ITraitSelectorOption } from "../components/TraitSelectorSpecies";

export function getSpeciesTraitOptions(
    speciesId: speciesName
): { optional: ITraitSelectorOption[]; fixed: ITraitSelectorOption[] } {
    const fixed = traitsManifest.filter((trait) =>
        allSpecies[speciesId].fixed.some((id) => id === trait.value)
    );
    const optional = traitsManifest.filter((trait) =>
        allSpecies[speciesId].optional.some((id) => id === trait.value)
    );

    return { fixed, optional };
}
