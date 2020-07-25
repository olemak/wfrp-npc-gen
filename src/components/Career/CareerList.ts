import { skillName } from "../Skills/SkillList";

import { miner } from "./careers/miner";
import { mystic } from "./careers/mystic";
import { talentName } from "../Talent/Talent";

type skillTuple = [skillName, string];

type talentTuple = [talentName, string];
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
    label: string | null;
    value: string | null;
    tier: Itier[];
}

export const nullCareer: Icareer = {
    value: null,
    label: null,
    tier: [
        {
            label: "",
            status: ["Brass", 0],
            skills: [],
            advances: [],
            talents: [],
            trappings: [],
        },
        {
            label: "",
            status: ["Brass", 0],
            skills: [],
            advances: [],
            talents: [],
            trappings: [],
        },
        {
            label: "",
            status: ["Brass", 0],
            skills: [],
            advances: [],
            talents: [],
            trappings: [],
        },
        {
            label: "",
            status: ["Brass", 0],
            skills: [],
            advances: [],
            talents: [],
            trappings: [],
        },
    ],
};

export const careerList = [miner, mystic];
