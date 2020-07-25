import * as React from "react";
import "./talents.css";
import { selectedCareersType } from "../Career/CareerSelector";
import { nullCareer } from "../Career/CareerList";
import { careerList } from "./../Career/CareerList";

interface ITalents {
    careerSet: selectedCareersType;
}

export const Talents = ({ careerSet }: ITalents) => {
    const [careers, setCareers] = React.useState([
        nullCareer,
        nullCareer,
        nullCareer,
    ]);

    const findCareers = () => {
        for (let careerIndex in careers) {
            const currentCareerName = careerSet[careerIndex].careerId;
            if (
                currentCareerName &&
                currentCareerName !== careers[careerIndex].value
            ) {
                const newCareer = careerList.find(
                    (career) => career.value === currentCareerName
                );
                if (newCareer) {
                    let newCareers = [...careers];
                    newCareers[careerIndex] = newCareer;
                    setCareers(newCareers);
                } else {
                    console.error(
                        `Could not find a career matching ${currentCareerName}`
                    );
                }
            }
        }
    };

    const characterTalents = () => {
        let traits: any = [];

        for (let careerIndex in careerSet) {
            for (let tierIndex in careerSet[careerIndex].careerTiers) {
                const currentTalent =
                    careerSet[careerIndex].careerTiers[tierIndex];

                if (currentTalent) {
                    traits.push(
                        ...careers[careerIndex].tier[tierIndex].talents
                    );
                }
            }
        }

        const cleanTraitNames = traits.map((trait: any) => {
            if (typeof trait === "string") {
                return trait;
            } else {
                return trait[0].replace(/\(([^)]+)\)/, `(${trait[1]})`);
            }
        });

        return Array.from(new Set(cleanTraitNames.sort()));
    };

    React.useEffect(findCareers, [careerSet]);

    const activeTalents = characterTalents();

    const TalentPartial = (talent: any) => (
        <li key={`active-talent--${talent.replace(/\s/g, "").toLowerCase()}`}>
            {talent}
        </li>
    );

    if (activeTalents.length > 0) {
        return (
            <section className="character__talents">
                <h3>Talents</h3>
                <ul>{activeTalents.map(TalentPartial)}</ul>
            </section>
        );
    }
    return null;
};
