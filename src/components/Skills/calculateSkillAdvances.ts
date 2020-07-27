import { careerSkillAdvances } from "./getCharacterSkills";
import { Iskill, skillList } from "./SkillList";

interface IcalculateSkillAdvances {
    rawCareerAdvances: careerSkillAdvances[];
}

export interface IactiveSkill extends Iskill {
    advances: number;
}

const findSkillData = (career: any) => {
    if (career?.advances.length) {
        // eslint-disable-next-line array-callback-return
        return career.advances.map((advance: any) => {
            const skillData: Iskill | undefined = skillList.find((skill) => {
                return skill.value === advance || skill.value === advance[0];
            });

            return Object.assign({}, skillData, {
                advances: 5 * career.maxTier,
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
