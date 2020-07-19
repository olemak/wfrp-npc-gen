import allSpecies, { speciesName } from "../data/species";
import { Size } from "../components/Size/SizeEnum";

export function getSpeciesSizeOptions(
    speciesId: speciesName
): {
    size?: Size;
    minSize?: Size;
    maxSize?: Size;
} {
    const { size, minSize, maxSize } = allSpecies[speciesId];

    return { size, minSize, maxSize };
}
