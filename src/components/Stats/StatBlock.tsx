import * as React from "react";
import "./statBlock.css";
import { Istats } from "../../data/species/index";
import { nullStats } from "../../data/defaultCharacter";
import { statName } from "../Skills/SkillList";

interface IStatBlock {
    species: string;
    improvements: any;
    baseStats: any;
    statModifiers: any;
    traits: any;
    handleChange: (statModifiers: Istats) => void;
}

export const StatBlock = ({
    species,
    improvements,
    baseStats,
    statModifiers,
    traits,
    handleChange,
}: IStatBlock) => {
    const [showRows, setShowRows] = React.useState(true);
    const [statsEffected, setStatsEffected] = React.useState(nullStats);
    const keys: string[] = Object.keys(improvements);

    const toggle = () => {
        setShowRows(!showRows);
    };

    const calculateStatModifiers = (traits: any) => {};

    React.useEffect(() => {
        console.log("Received new traits");
        console.log(statsEffected);
        calculateStatModifiers(traits);

        setStatsEffected(nullStats);
    }, [traits, statsEffected]);

    const listAffectedStat = (key: string) => {
        return statsEffected[key as statName];
    };

    const calculateStats = (key: string): React.ReactNode => {
        return baseStats[key] + improvements[key];
    };

    const randomizeStatModifiers = () => {
        const newStatMods = Object.assign({}, statModifiers);

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
                >
                    <strong>{key}</strong>
                    <span>{baseStats[key]}</span>
                    <span>{improvements[key]}</span>
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
