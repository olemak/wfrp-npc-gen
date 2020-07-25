import { Icareer } from "./../CareerList";
export const mystic: Icareer = {
    value: "mystic",
    label: "Mystic - Fortune Teller, Mystic, Sage, Seer",
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
            talents: ["Attractive", "Luck", "Second Sight", "Suave"],
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
                "Detect Artefact",
                "Holy Visions",
                "Sixth Sense",
                "Well-prepared",
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
            talents: [
                "Nose for Trouble",
                "Petty Magic",
                "Read/Write",
                "Witch!",
            ],
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
                ["Arcane Magic (Lore)", "Celestial"],
                "Magical Sense",
                "Menacing",
                "Strong-minded",
            ],
            trappings: ["Trade Tools (Astrology)"],
        },
    ],
};
