import React from "react";
import {
    SpeciesSelector,
    ISpeciesSelectorOption,
} from "./components/SpeciesSelector";
import { Text, text, Character, character } from "./context";
import { species } from "./data/species/manifest";
import { CareerSelector } from "./components/CareerSelector";
import { TraitSelector } from "./components/TraitSelector";

import "./App.css";

function App() {
    const [characterState, setCharacterState] = React.useState(character);

    const setSpecies = (newSpecies: ISpeciesSelectorOption, action: any) => {
        if (newSpecies.value !== characterState.species) {
            const newCharacterState = Object.assign(characterState, {
                species: newSpecies.value,
            });
            setCharacterState(newCharacterState);
        }
    };

    return (
        <Text.Provider value={text}>
            <Character.Provider value={characterState}>
                <main>
                    <SpeciesSelector
                        options={species}
                        handleChange={setSpecies}
                    />
                    <h4>Stat Block</h4>
                    <h4>Size selector (if applicable)</h4>
                    <TraitSelector>Species traits</TraitSelector>
                    <TraitSelector>Optional Traits</TraitSelector>
                    <CareerSelector>Careers</CareerSelector>
                </main>
            </Character.Provider>
        </Text.Provider>
    );
}

export default App;
