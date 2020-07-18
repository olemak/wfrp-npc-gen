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
import { traitName } from "./data/traits/traitsManifest";

class App extends React.Component<{}, Icharacter> {
    constructor(props: Icharacter) {
        super(props);
        this.state = defaultCharacter;
        this.setSpecies = this.setSpecies.bind(this);
        this.setTraitsSpecies = this.setTraitsSpecies.bind(this);
        this.setTraitsGeneric = this.setTraitsGeneric.bind(this);
    }

    setSpecies(newSpecies: ISpeciesSelectorOption, action: any) {
        if (newSpecies.value !== this.state.value) {
            this.setState({ ...newSpecies });
        }
    }

    setTraitsSpecies(newTraits: ITraitSelectorOption[]) {
        const newTraitNames: string[] = newTraits.map((trait) => trait.label);

        if (newTraitNames.length !== this.state.traits.length) {
            this.setState({ traits: newTraitNames });
        }
    }

    setTraitsGeneric(newTraits: ITraitSelectorOption[]) {
        const newTraitNames: string[] = newTraits.map((trait) => trait.label);

        if (newTraits.length !== this.state.generic.length) {
            this.setState({ generic: newTraitNames });
        }
    }

    render() {
        return (
            <Text.Provider value={text}>
                <main>
                    <SpeciesSelector
                        value={{
                            value: this.state.value,
                            label: this.state.label,
                        }}
                        handleChange={this.setSpecies}
                    />
                    <h4>Stat Block</h4>
                    <h4>Size selector (if applicable)</h4>
                    <TraitSelectorSpecies
                        species={{
                            value: this.state.value,
                            label: this.state.label,
                        }}
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
