import * as React from "react";
import Select from "react-select";
import { text } from "../context/index";
import { getSpeciesTraitOptions } from "../logic/getSpeciesTraitOptions";
import { ISpeciesSelectorOption } from "./SpeciesSelector";

export interface ITraitSelectorOption {
    value: string;
    label: string;
    isFixed?: boolean;
}
interface ISpeciesTraitSelectorProps {
    species: ISpeciesSelectorOption;
    handleChange: (newTraits: ITraitSelectorOption[]) => void;
}

export class TraitSelectorSpecies extends React.Component<
    ISpeciesTraitSelectorProps
> {
    options = getSpeciesTraitOptions(this.props.species.value);

    setTraitsSpecies = (value: any, action: any) => {
        this.props.handleChange(this.options.fixed.concat(value));
    };

    componentDidMount() {
        this.props.handleChange(this.options.fixed);
    }

    componentDidUpdate(prevProps: ISpeciesTraitSelectorProps) {
        if (prevProps.species !== this.props.species) {
            this.props.handleChange(this.options.fixed);
        }
    }

    render() {
        return (
            <section>
                <div>
                    <strong>
                        {text.npc.FixedSpeciesTraits}: &nbsp;&nbsp;&nbsp;&nbsp;
                    </strong>
                    {this.options.fixed.map((fixedOption) => (
                        <span key={fixedOption.value}>
                            {fixedOption.label}&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    ))}
                </div>
                <Select
                    options={this.options.optional}
                    placeholder={text.npc.OptionalSpeciesTraits}
                    onChange={this.setTraitsSpecies}
                    key={this.props.species.value}
                    isMulti
                />
                <br />
            </section>
        );
    }
}
