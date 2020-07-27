import { Icareer } from "../CareerList";
export const apothecary: Icareer = {
    value: "apothecary",
    label: "Apothecary",
    tier: [
        {
            label: "Apothecary’s Apprentice",
            status: ["Brass", 3],
            skills: [
                "consumealcohol",
                "heal",
                ["language", "Classical"],
                ["lore", "Chemistry"],
                ["lore", "Medicine)"],
                ["lore", "Plants"],
                ["trade", "Apothecary"],
                ["trade", "Poisoner"],
            ],
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
