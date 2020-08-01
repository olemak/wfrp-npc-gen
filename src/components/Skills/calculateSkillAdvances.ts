import { careerSkillAdvances } from "./getCharacterSkills";
import { Iskill, skillList } from "./SkillList";

interface IcalculateSkillAdvances {
    rawCareerAdvances: careerSkillAdvances[];
}

export interface IactiveSkill extends Iskill {
    advances: number;
}

interface IskillName {
    label?: string;
}

const findSkillData = (career: any) => {
    if (career?.advances.length) {
        // eslint-disable-next-line array-callback-return
        return career.advances.map((advance: any) => {
            let skillData: Iskill | undefined = skillList.find((skill) => {
                return skill.value === advance || skill.value === advance[0];
            });

            if (typeof advance === "object") {
                skillData = Object.assign({}, skillData, {
                    label: `${skillData?.label} (${advance[1]})`,
                });
            }

            return Object.assign({}, skillData, {
                advances: 6 * career.maxTier,
            });
        });
    }
};

function sortSkills(a: any, b: any) {
    const skillA = a.label.toUpperCase(); // ignore upper and lowercase
    const skillB = b.label.toUpperCase(); // ignore upper and lowercase
    if (skillA < skillB) {
        return -1;
    }
    if (skillA > skillB) {
        return 1;
    }

    // names must be equal
    return 0;
}

export const calculateSkillAdvances = ({
    rawCareerAdvances,
}: IcalculateSkillAdvances) => {
    let calculatedSkills: IactiveSkill[] = rawCareerAdvances.map(findSkillData);

    if (rawCareerAdvances.some((advance) => advance.maxTier)) {
        return calculatedSkills.flat().sort(sortSkills);
    }
    return null;
};
