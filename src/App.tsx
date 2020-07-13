import React from "react";
import {
    SpeciesSelector,
    ISpeciesSelectorOption,
} from "./components/SpeciesSelector";
import {
    TraitSelectorSpecies,
    ITraitSelectorOption,
} from "./components/TraitSelectorSpecies";
import { TraitSelectorGeneric } from "./components/TraitSelectorGeneric";
import { CareerSelector } from "./components/CareerSelector";

import { Text, text } from "./context";
import { defaultCharacter, Icharacter } from "./data/defaultCharacter";

import "./App.css";

class App extends React.Component<{}, Icharacter> {
    constructor(props: Icharacter) {
        super(props);
        this.state = defaultCharacter;
        this.setSpecies = this.setSpecies.bind(this);
        this.setTraitsSpecies = this.setTraitsSpecies.bind(this);
        this.setTraitsGeneric = this.setTraitsGeneric.bind(this);
    }

    setSpecies(newSpecies: ISpeciesSelectorOption, action: any) {
        if (newSpecies.value !== this.state.species) {
            const newCharacterState = Object.assign(this.state, {
                species: newSpecies.value,
            });
            this.setState(newCharacterState);
        }
    }

    setTraitsSpecies(newTraits: ITraitSelectorOption[]) {
        this.setState({ speciesTraits: newTraits });
    }
    setTraitsGeneric(newTraits: ITraitSelectorOption[]) {
        this.setState({ genericTraits: newTraits });
    }

    render() {
        return (
            <Text.Provider value={text}>
                <main>
                    <SpeciesSelector handleChange={this.setSpecies} />
                    <h4>Stat Block</h4>
                    <h4>Size selector (if applicable)</h4>
                    <TraitSelectorSpecies
                        species={this.state.species}
                        handleChange={this.setTraitsSpecies}
                    />
                    <TraitSelectorGeneric
                        handleChange={this.setTraitsGeneric}
                    />
                    <CareerSelector>Careers</CareerSelector>
                </main>
            </Text.Provider>
        );
    }
}

export default App;
