import { Icareer } from "./../CareerList";
export const mystic: Icareer = {
    value: "mystic",
    label: "Mystic - Prospector, Miner, Master Miner, Mine Foreman",
    tier: [
        {
            label: "Fortune Teller",
            status: ["Brass", 1],
            skills: [
                "charm",
                ["entertain", "Fortune Telling"],
                "dodge",
                "gossip",
                "haggle",
                "intuition",
                "perception",
                "sleightofhand",
            ],
            advances: ["I", "Dex", "Fel"],
            talents: ["attractive", "luck", "secondsight", "suave"],
            trappings: ["Deck of Cards or Dice", "Cheap Jewellery"],
        },
        {
            label: "Mystic",
            status: ["Brass", 2],
            skills: [
                "bribery",
                "cool",
                ["entertain", "Prophesy"],
                "evaluate",
                "intimidate",
                ["melee", "Basic"],
                ["lore", "Astrology"],
            ],
            advances: ["WP"],
            talents: [
                "detectartefact",
                "holyvisions",
                "sixthsense",
                "wellprepared",
            ],
            trappings: ["Selection of Amulets"],
        },
        {
            label: "Sage",
            status: ["Brass", 3],
            skills: [
                ["art", "Writing"],
                "charmanimal",
                ["entertain", "Storytelling"],
                ["language", "any"],
            ],
            advances: ["Ag"],
            talents: ["nosefortrouble", "pettymagic", "readwrite", "witch"],
            trappings: ["Trade Tools (Writing)"],
        },
        {
            label: "Seer",
            status: ["Brass", 4],
            skills: [
                ["lore", "Prophesy"],
                ["channelling", "Azyr"],
            ],
            advances: ["Int"],
            talents: [
                ["arcanemagic", "Celestial"],
                "magicalsense",
                "menacing",
                "strongminded",
            ],
            trappings: ["Trade Tools (Astrology)"],
        },
    ],
};
