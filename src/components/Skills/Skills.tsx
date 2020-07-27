import * as React from "react";
import "./skills.css";
import {
    // skillList,
    // skillName,
    Iskill,
} from "./SkillList";
import { selectedCareersType } from "../Career/CareerSelector";
import { careerList } from "./../Career/CareerList";
import { getCharacterSkills } from "./getCharacterSkills";
import { calculateSkillAdvances, IactiveSkill } from "./calculateSkillAdvances";
import { Istats } from "../../data/species";

interface ICharacterSkill extends Iskill {}
interface ISkills {
    careerSet: selectedCareersType;
    statsBase: Istats;
    statsRandom: Istats;
    statsAdvances: Istats;
}

export const Skills = ({
    careerSet,
    statsBase,
    statsRandom,
    statsAdvances,
}: ISkills) => {
    const selectedCareerIds = React.useMemo(
        () => careerSet.map((career) => career.careerId),
        [careerSet]
    );

    const characterSkills = React.useMemo(() => {
        const rawCareerAdvances = getCharacterSkills(
            careerSet,
            // eslint-disable-next-line array-callback-return
            careerList.filter(
                (career) =>
                    career.value && selectedCareerIds.includes(career.value)
            )
        );
        return calculateSkillAdvances({ rawCareerAdvances });
    }, [careerSet, selectedCareerIds]);
    /* 
        get character career skills:
         - need careerSet
         - need corresponding careerTiers
         
         THEN: map to skill list and compose list
         - need skillList 
         - figure out the skill advances
         
         Sort it
         Group it (COMBAT, SOCIAL, KNOWLEDGE (Lore or Trade), MAGIC, OTHER)
         List it
         Show Skill label (and specialization,if relevant), base state, base stat value, and SUM of those
    */

    const skillItemPartial = (skill: IactiveSkill) => {
        console.log(skill, statsBase, statsRandom, statsAdvances);

        const statName = skill.stat;

        const statValue =
            statsBase[statName] +
            statsRandom[statName] +
            statsAdvances[statName];

        const skillStat = statValue + skill.advances;

        return (
            <li key={`skill--${skill.value}`}>
                {skill.label} {skill.stat} {statValue} + {skill.advances} :{" "}
                <strong>{skillStat}</strong>
            </li>
        );
    };

    return (
        <section className="items">
            <h3>Skills</h3>
            <ul>{characterSkills && characterSkills.map(skillItemPartial)}</ul>
        </section>
    );
};
