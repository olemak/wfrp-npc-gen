import * as React from "react";
import "./statBlock.css";

interface IStatBlock {
    species: string;
    improvements: any;
    baseStats: any;
}

export const StatBlock = ({ species, improvements, baseStats }: IStatBlock) => {
    const [showRows, setShowRows] = React.useState(true);
    const keys: string[] = Object.keys(improvements);

    const toggle = () => {
        setShowRows(!showRows);
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
                    <strong>
                        {calculateStats(baseStats, improvements, key)}
                    </strong>
                </div>
            ))}

            <div className="stat-block__controls">
                <strong
                    onClick={toggle}
                    className={showRows ? "collapse" : "expand"}
                >
                    {showRows ? "Collapse" : "Expand"}
                </strong>

                <strong>Randomize</strong>
            </div>
        </section>
    );
};
function calculateStats(
    baseStats: any,
    improvements: any,
    key: string
): React.ReactNode {
    return baseStats[key] + improvements[key];
}
