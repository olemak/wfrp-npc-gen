import * as React from "react";
import "./statBlock.css";
import { Istats } from "../data/species/index";

interface IStatBlock {
    species: string;
    improvements: any;
    baseStats: any;
    statModifiers: any;
    handleChange: (statModifiers: Istats) => void;
}

export const StatBlock = ({
    species,
    improvements,
    baseStats,
    statModifiers,
    handleChange,
}: IStatBlock) => {
    const [showRows, setShowRows] = React.useState(true);
    const keys: string[] = Object.keys(improvements);

    const toggle = () => {
        setShowRows(!showRows);
    };

    const calculateStats = (key: string): React.ReactNode => {
        return baseStats[key] + improvements[key];
    };

    const randomizeStatModifiers = () => {
        const newStatMods = Object.assign({}, statModifiers);

        const x = () =>
            Math.floor(Math.random() * 11) - Math.floor(Math.random() * 9);

        keys.map((key) => (newStatMods[key] = x()));

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
                    <strong>{calculateStats(key)}</strong>
                </div>
            ))}

            <div className="stat-block__controls">
                <strong
                    onClick={toggle}
                    className={showRows ? "collapse" : "expand"}
                >
                    {showRows ? "Collapse" : "Expand"}
                </strong>
                <span>&#8678; Base Stats</span>
                <span>
                    &#8678;{" "}
                    <strong onClick={randomizeStatModifiers}>Random</strong>
                </span>
                <span>&#8678; Sum</span>
            </div>
        </section>
    );
};
