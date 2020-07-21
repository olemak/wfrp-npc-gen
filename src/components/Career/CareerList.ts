import { skillName } from "../Skills/SkillList";

import { miner } from "./careers/miner";
import { mystic } from "./careers/mystic";

type skillTuple = [skillName, string];

// TODO: Make talentList and talentName type
type talentName = string;
type talentTuple = [string, string];
type careerTalents = talentName | talentTuple;
type careerSkills = skillName | skillTuple;
type statusName = "Brass" | "Silver" | "Gold";
type statusType = [statusName, number];
type statName =
    | "WS"
    | "BS"
    | "S"
    | "T"
    | "I"
    | "Ag"
    | "Dex"
    | "Int"
    | "WP"
    | "Fel";

interface Itier {
    label: string;
    status: statusType;
    skills: careerSkills[];
    talents: careerTalents[];
    trappings: string[];
    advances: statName[];
}

export interface Icareer {
    label: string;
    value: string;
    tier: Itier[];
}

export const careerList = [miner, mystic];
