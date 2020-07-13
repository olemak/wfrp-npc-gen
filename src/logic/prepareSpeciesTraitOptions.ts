import { traitsManifest } from "./../data/traits/traitsManifest";
import allSpecies from "../data/species/index";
import { speciesName } from "../data/species/index";
import { ITraitSelectorOption } from "../components/TraitSelector";

export function prepareSpeciesTraitOptions(
    species: speciesName;
): ITraitSelectorOption[] {
    /*
    const currentSpeciesOptions = allSpecies[species];
    const fixed = traitsManifest.filter((trait) => {
        if (currentSpeciesOptions.fixed.includes(trait.label)) {
            return Object.assign(trait, { isFixed: true });
        }
    });
    const optional = traitsManifest.filter((trait) =>
        currentSpeciesOptions.optional.includes(trait.label)
    );

    return { fixed, optional };

    */

    const options = [
        { value: "prejudice", label: "Prejudice", isFixed: true },
        { value: "handweapon", label: "Hand Weapon" },
        { value: "disease", label: "Disease", isFixed: true },
        { value: "ranged", label: "Ranged Attack" },
        { value: "spellcaster", label: "Spellcaster" },
    ];

    return options;
}
