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

export const calculateSkillAdvances = ({
    rawCareerAdvances,
}: IcalculateSkillAdvances) => {
    let calculatedSkills: IactiveSkill[] = rawCareerAdvances.map(findSkillData);

    if (rawCareerAdvances.some((advance) => advance.maxTier)) {
        return calculatedSkills.flat();
    }
    return null;
};
