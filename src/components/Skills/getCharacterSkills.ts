import { selectedCareersType } from "../Career/CareerSelector";
import { Icareer } from "./../Career/CareerList";
import { skillName } from "./SkillList";
import { skillTuple } from "../Career/CareerList";

export type careerSkillType = skillName | skillTuple | undefined;

export interface careerSkillAdvances {
    advances: careerSkillType[];
    maxTier: number;
}

export const getCharacterSkills = (
    careerSet: selectedCareersType,
    careers: Icareer[]
) => {
    let firstCareer: careerSkillAdvances = { maxTier: 0, advances: [] };
    const firstCareerData = careers.find(
        (career) => career.value === careerSet[0].careerId
    );
    //    let secondCareer:any = null;
    //    let thirdCareer:any = null;

    if (careerSet[0].careerId && firstCareerData) {
        firstCareer.maxTier = careerSet[0].careerTiers.filter(
            (tier) => tier
        ).length;
        firstCareer.advances = firstCareerData.tier
            // eslint-disable-next-line array-callback-return
            .map((tier, i) => {
                if (i < firstCareer.maxTier) {
                    return tier.skills;
                }
            })
            .flat()
            .filter((x) => x);
    }

    const rawCareerAdvances = [firstCareer];

    return rawCareerAdvances;
};
