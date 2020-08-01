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

    let secondCareer: careerSkillAdvances = { maxTier: 0, advances: [] };
    const secondCareerData = careers.find(
        (career) => career.value === careerSet[1].careerId
    );
    let thirdCareer: careerSkillAdvances = { maxTier: 0, advances: [] };
    const thirdCareerData = careers.find(
        (career) => career.value === careerSet[2].careerId
    );

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
            .filter((x) => x)
            .sort();
    }

    if (careerSet[1].careerId && secondCareerData) {
        secondCareer.maxTier = careerSet[1].careerTiers.filter(
            (tier) => tier
        ).length;
        secondCareer.advances = secondCareerData.tier
            // eslint-disable-next-line array-callback-return
            .map((tier: any, i: number) => {
                if (i < secondCareer.maxTier) {
                    return tier.skills;
                }
            })
            .flat()
            .filter((x: any) => x)
            .sort();
    }

    if (careerSet[2].careerId && thirdCareerData) {
        thirdCareer.maxTier = careerSet[2].careerTiers.filter(
            (tier) => tier
        ).length;
        thirdCareer.advances = thirdCareerData.tier
            // eslint-disable-next-line array-callback-return
            .map((tier: any, i: number) => {
                if (i < thirdCareer.maxTier) {
                    return tier.skills;
                }
            })
            .flat()
            .filter((x: any) => x)
            .sort();
    }

    console.log(firstCareer, secondCareer, thirdCareer);

    const rawCareerAdvances = [firstCareer, secondCareer, thirdCareer];

    return rawCareerAdvances;
};
/*
function onlyUnique(value: any, index: number, self: any) {
    return self.indexOf(value) === index;
}
*/
