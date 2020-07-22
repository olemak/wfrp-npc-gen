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
import { SizeSelector } from "./components/Size/SizeSelector";
import { StatBlock } from "./components/Stats/StatBlock";
import { Istats } from "./data/species";

class App extends React.Component<{}, Icharacter> {
    constructor(props: Icharacter) {
        super(props);
        this.state = defaultCharacter;
        this.setSpecies = this.setSpecies.bind(this);
        this.setTraitsSpecies = this.setTraitsSpecies.bind(this);
        this.setTraitsGeneric = this.setTraitsGeneric.bind(this);
        this.setSize = this.setSize.bind(this);
        this.setStatModifiers = this.setStatModifiers.bind(this);
    }

    setSpecies(newSpecies: ISpeciesSelectorOption, action: any) {
        if (newSpecies.value !== this.state.value) {
            this.setState({ ...newSpecies });
        }
    }

    setStatModifiers(statModifiers: Istats) {
        this.setState({ statModifiers });
    }

    setTraitsSpecies(newTraits: ITraitSelectorOption[], baseStats: Istats) {
        const newTraitNames: string[] = newTraits.map((trait) => trait.label);

        if (newTraitNames.length !== this.state.traits.length) {
            this.setState({ traits: newTraitNames, baseStats });
        }
    }

    setTraitsGeneric(newTraits: ITraitSelectorOption[]) {
        const newTraitNames: string[] = newTraits.map((trait) => trait.label);

        if (newTraits.length !== this.state.generic.length) {
            this.setState({ generic: newTraitNames });
        }
    }

    setSize(newSize: any) {
        this.setState({ size: newSize });
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
                    <StatBlock
                        species={this.state.label}
                        baseStats={this.state.baseStats}
                        statModifiers={this.state.statModifiers}
                        improvements={this.state.statModifiers}
                        handleChange={this.setStatModifiers}
                    />
                    <SizeSelector
                        speciesId={this.state.value}
                        sizeValue={this.state.size}
                        handleChange={this.setSize}
                        key={this.state.value}
                    />
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
