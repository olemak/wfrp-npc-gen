import * as React from "react";
import "./statBlock.css";
import { Istats } from "../../data/species/index";
import { nullStats } from "../../data/defaultCharacter";
import { statName } from "../Skills/SkillList";
import { effectTalentNameType } from "../Talent/Talents";

interface IStatBlock {
    species: string;
    statsBase: any;
    statsRandom: any;
    statsAdvances: any;
    traits: any;
    generic: any;
    handleChange: (statModifiers: Istats) => void;
    handleAdvance: (statModifiers: Istats) => void;
    effectTalents: effectTalentNameType[];
}

export const StatBlock = ({
    statsBase,
    statsAdvances,
    statsRandom,
    traits,
    generic,
    handleChange,
    handleAdvance,
    effectTalents,
}: IStatBlock) => {
    const [showRows, setShowRows] = React.useState(true);
    const [statsEffected, setStatsEffected] = React.useState(nullStats);
    const keys: string[] = Object.keys(nullStats);

    const toggle = () => {
        setShowRows(!showRows);
    };

    const getTalentEffects = (trait: effectTalentNameType): any => {
        switch (trait) {
            case "Fleet Footed":
                return ["M", 1];
            case "Coolheaded":
                return ["WP", 5];
            case "Lightning Reflexes":
                return ["Ag", 5];
            case "Marksman":
                return ["BS", 5];
            case "Nimble Fingered":
                return ["Dex", 5];
            case "Savvy":
                return ["Int", 5];
            case "Sharp":
                return ["I", 5];
            case "Suave":
                return ["Fel", 5];
            case "Very Resilient":
                return ["T", 5];
            case "Very Strong":
                return ["S", 5];
            case "Warrior Born":
                return ["WS", 5];
            case "Hardy":
                return null;
            default:
                break;
        }
    };

    const calculateStatModifiers = (traits: any, generic: any) => {
        const newModifiers: any = Object.assign({}, nullStats);
        const getEffects = (trait: any) => trait.effect;
        const traitsWithEffect = traits.concat(generic).filter(getEffects);

        const talentEffectsOnStats: any = effectTalents.map(getTalentEffects);

        const traitEffects = [].concat(...traitsWithEffect.map(getEffects));

        const effects = traitEffects.concat(talentEffectsOnStats);

        for (let effect of effects) {
            if (effect) {
                const stat: statName = effect[0];
                newModifiers[stat] += effect[1];
            }
        }

        return newModifiers;
    };

    React.useEffect(() => {
        setStatsEffected(calculateStatModifiers(traits, generic));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [traits, generic, effectTalents]);

    React.useEffect(() => {
        handleAdvance(statsEffected);
    }, [handleAdvance, statsEffected]);

    const listAffectedStat = (key: string) => {
        return statsEffected[key as statName];
    };

    const calculateStats = (key: string): React.ReactNode => {
        return statsBase[key] + statsRandom[key] + statsAdvances[key];
    };

    const randomizeStatModifiers = () => {
        const newStatMods = Object.assign({}, statsRandom);

        const x = () =>
            Math.floor(Math.random() * 11) - Math.floor(Math.random() * 9);

        keys.map((key) => (key === "M" ? 0 : (newStatMods[key] = x())));

        handleChange(newStatMods);
    };

    return (
        <section
            className={`stat-block stat-block--${
                showRows ? "expanded" : "collapsed"
            }`}
        >
            {keys.map((key) => (
                <div
                    className={`stat-block__values ${
                        showRows ? "expanded" : "collapsed"
                    }`}
                    key={`stat-key--${key}`}
                >
                    <strong>{key}</strong>
                    <span>{statsBase[key]}</span>
                    <span>{statsRandom[key]}</span>
                    <span>{listAffectedStat(key)}</span>

                    <strong className="stat-block__sums">
                        {calculateStats(key)}
                    </strong>
                </div>
            ))}

            <div className="stat-block__controls">
                <strong
                    onClick={toggle}
                    className={showRows ? "collapse" : "expand"}
                >
                    {showRows ? (
                        <span>Collapse &#8679;</span>
                    ) : (
                        <span> &#8681;</span>
                    )}
                </strong>
                <span>&#8678; Base Stats</span>
                <span
                    className="stat-block__randomize"
                    onClick={randomizeStatModifiers}
                >
                    Randomize
                </span>
                <span>&#8678; Advances</span>
                <span>&#8678; Sum</span>
            </div>
        </section>
    );
};
