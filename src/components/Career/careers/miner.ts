import { Icareer } from "../CareerList";
export const miner: Icareer = {
    value: "miner",
    label: "Miner",
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
            talents: ["Rover", "Strider (Rocky)", "Sturdy", "Tenacious"],
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
            talents: [
                "Careful Strike",
                "Craftsman (Explosives)",
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
            talents: ["argumentative", "strongminded", "embezzle", "readwrite"],
            trappings: ["Crew of Miners", "Writing Kit"],
        },
    ],
};
