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

    let careerCount = 1;
    if (careerSet[1].careerId) {
        careerCount++;
    }
    if (careerSet[2].careerId) {
        careerCount++;
    }

    const combatSkills = characterSkills?.filter(filterCombatSkills);
    const generalSkills = characterSkills?.filter(filterGeneralSkills);

    const skillItemPartial = (skill: IactiveSkill, i: number) => {
        if (skill) {
            const statName = skill.stat;

            const statValue =
                statsBase[statName] +
                statsRandom[statName] +
                statsAdvances[statName];

            const skillStat = statValue + skill.advances;

            return (
                <li key={`skill--${i}`}>
                    <span>{skill.label}</span>
                    <em>
                        {skill.stat} {statValue} + {skill.advances}
                    </em>
                    <strong>{skillStat}</strong>
                </li>
            );
        }
    };

    if (characterSkills) {
        return (
            <section className={`skill items career-count--${careerCount}`}>
                <ul>
                    <li className="combat-skill">
                        <h4>Combat skills</h4>
                    </li>
                    {combatSkills && combatSkills.map(skillItemPartial)}
                    <li className="other-skill">
                        <h4>Other skills</h4>
                    </li>
                    {generalSkills && generalSkills.map(skillItemPartial)}
                </ul>
            </section>
        );
    }

    return null;
};

function filterCombatSkills(skill: IactiveSkill | null) {
    if (skill) {
        if (
            skill.value === "dodge" ||
            skill.value === "melee" ||
            skill.value === "ranged" ||
            skill.value === "intimidate" ||
            skill.value === "cool"
        ) {
            return true;
        }
    }
    return false;
}
function filterGeneralSkills(skill: IactiveSkill | null) {
    if (skill) {
        if (
            skill.value !== "dodge" &&
            skill.value !== "melee" &&
            skill.value !== "ranged" &&
            skill.value !== "intimidate" &&
            skill.value !== "cool"
        ) {
            return true;
        }
    }
    return false;
}
