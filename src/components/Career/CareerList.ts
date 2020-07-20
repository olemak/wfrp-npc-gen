import { skillName } from "../Skills/SkillList";

export { miner } from "./careers/miner";

type skillTuple = [skillName, string];

// TODO: Make talentList and talentName type
type talentName = string;
type talentTuple = [string, string];
type careerTalents = talentName | talentTuple;
type careerSkills = skillName | skillTuple;

interface Itier {
    label: string;
    status: [string, number];
    skills: careerSkills[];
    talents: careerTalents[];
    trappings: string[];
}

export interface Icareer {
    label: string;
    value: string;
    tier: Itier[];
}
