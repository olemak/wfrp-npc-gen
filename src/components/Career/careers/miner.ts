import { Icareer } from "./../CareerList";
export const miner: Icareer = {
    value: "miner",
    label: "Miner - Prospector, Miner, Master Miner, Mine Foreman",
    tier: [
        {
            label: "Prospector",
            status: ["Brass", 2],
            skills: [
                "cool",
                "endurance",
                "intuition",
                ["lore", "Local"],
                ["melee", "Two-handed"],
                "outdoorsurvival",
                "perception",
                "swim",
            ],
            advances: ["S", "T", "WP"],
            talents: [
                "Rover",
                ["Strider (Terrain)", "Rocky"],
                "Sturdy",
                "Tenacious",
            ],
            trappings: ["Charcoal Stick", "Crude Map", "Pan", "Spade"],
        },
        {
            label: "Miner",
            status: ["Brass", 4],
            skills: [
                "climb",
                "consumealcohol",
                "evaluate",
                ["melee", "Basic"],
                ["secretsigns", "Miner"],
                ["trade", "Explosives"],
            ],
            advances: ["WS"],
            talents: [
                "Night Vision",
                "Strike Mighty Blow",
                "Strong Back",
                "Very Strong",
            ],
            trappings: [
                "Davrich Lamp",
                "Hand Weapon (Pick)",
                "Lamp Oil",
                "Leather Jack",
            ],
        },
        {
            label: "Master Miner",
            status: ["Brass", 5],
            skills: [
                "gossip",
                ["lore", "Geology"],
                ["stealth", "Underground"],
                ["trade", "Engineer"],
            ],
            advances: ["I"],
            talents: [
                "Careful Strike",
                ["Craftsman (Trade)", "Explosives)"],
                "Tinker",
                "Tunnel Rat",
            ],
            trappings: [
                "Great Weapon (Two-handed Pick)",
                "Helmet",
                "Trade Tools (Engineer)",
            ],
        },
        {
            label: "Mine Foreman",
            status: ["Silver", 4],
            skills: ["charm", "leadership"],
            advances: ["Fel"],
            talents: [
                "Argumentative",
                "Strong-minded",
                "Embezzle",
                "Read/Write",
            ],
            trappings: ["Crew of Miners", "Writing Kit"],
        },
    ],
};
