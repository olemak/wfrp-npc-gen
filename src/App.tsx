import React from "react";
import {
    SpeciesSelector,
    ISpeciesSelectorOption,
} from "./components/SpeciesSelector";
import { Text, text } from "./context";
import { CareerSelector } from "./components/CareerSelector";
import { TraitSelector } from "./components/TraitSelector";
import { defaultCharacter, Icharacter } from "./data/defaultCharacter";

import "./App.css";

class App extends React.Component<{}, Icharacter> {
    constructor(props: Icharacter) {
        super(props);
        this.state = defaultCharacter;
        this.setSpecies = this.setSpecies.bind(this);
    }

    setSpecies(newSpecies: ISpeciesSelectorOption, action: any) {
        if (newSpecies.value !== this.state.species) {
            const newCharacterState = Object.assign(this.state, {
                species: newSpecies.value,
            });
            this.setState(newCharacterState);
        }
    }

    render() {
        return (
            <Text.Provider value={text}>
                <main>
                    <SpeciesSelector handleChange={this.setSpecies} />
                    <h4>Stat Block</h4>
                    <h4>Size selector (if applicable)</h4>
                    <TraitSelector species={this.state.species} />
                    <TraitSelector />
                    <CareerSelector>Careers</CareerSelector>
                </main>
            </Text.Provider>
        );
    }
}

export default App;
