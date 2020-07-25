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
import {
    CareerSelector,
    selectedCareersType,
} from "./components/Career/CareerSelector";

import { Text, text } from "./context";
import { defaultCharacter, Icharacter } from "./data/defaultCharacter";

import "./App.css";
import { SizeSelector } from "./components/Size/SizeSelector";
import { StatBlock } from "./components/Stats/StatBlock";
import { Istats } from "./data/species";
import { Wounds } from "./components/Wounds/Wounds";
import { Skills } from "./components/Skills/Skills";
import { Talents, effectTalentNameType } from "./components/Talent/Talents";

class App extends React.Component<{}, Icharacter> {
    constructor(props: Icharacter) {
        super(props);
        this.state = defaultCharacter;
        this.setSpecies = this.setSpecies.bind(this);
        this.setTraitsSpecies = this.setTraitsSpecies.bind(this);
        this.setTraitsGeneric = this.setTraitsGeneric.bind(this);
        this.setSize = this.setSize.bind(this);
        this.setStatModifiers = this.setStatModifiers.bind(this);
        this.setCareers = this.setCareers.bind(this);
        this.setEffectTalents = this.setEffectTalents.bind(this);
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
        this.setState({ generic: newTraits });
    }

    setSize(newSize: any) {
        this.setState({ size: newSize });
    }

    setCareers(selectedCareers: selectedCareersType) {
        this.setState({ careerSet: selectedCareers });
    }

    setEffectTalents(effectTalents: any[]) {
        this.setState({ effectTalents });
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
                        traits={this.state.traits}
                        generic={this.state.generic}
                        handleChange={this.setStatModifiers}
                        effectTalents={this.state.effectTalents}
                    />
                    <section className="character__details">
                        <SizeSelector
                            speciesId={this.state.value}
                            sizeValue={this.state.size}
                            handleChange={this.setSize}
                            key={this.state.value}
                        />
                        <Wounds />
                    </section>

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

                    <CareerSelector
                        handleChange={this.setCareers}
                        careerSet={this.state.careerSet}
                    >
                        Careers
                    </CareerSelector>
                    <Skills />
                    <Talents
                        careerSet={this.state.careerSet}
                        handleChange={this.setEffectTalents}
                        talentsWithEffectInApp={this.state.effectTalents}
                    />
                </main>
            </Text.Provider>
        );
    }
}

export default App;
