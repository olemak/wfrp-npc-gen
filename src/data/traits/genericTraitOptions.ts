import { statName } from "../../components/Skills/SkillList";

export type genericTraitName =
    | "afraid"
    | "animosity"
    | "armour"
    | "big"
    | "brute"
    | "clever"
    | "cunning"
    | "elite"
    | "fast"
    | "hatred"
    | "leader"
    | "prejudice"
    | "tough"
    | "weapon";

interface IgenericTrait {
    value: genericTraitName;
    label: string;
    effect?: [statName, number][];
}

export const genericTraitOptions: IgenericTrait[] = [
    { value: "afraid", label: "Afraid" },
    { value: "animosity", label: "Animosity" },
    { value: "armour", label: "Armour" },
    {
        value: "big",
        label: "Big*",
        effect: [
            ["S", 10],
            ["T", 10],
            ["Ag", -5],
        ],
    },
    {
        value: "brute",
        label: "Brute*",
        effect: [
            ["M", -1],
            ["Ag", -10],
            ["S", 10],
            ["T", 10],
        ],
    },
    {
        value: "clever",
        label: "Clever*",
        effect: [
            ["Int", 20],
            ["I", 10],
        ],
    },
    {
        value: "cunning",
        label: "Cunning*",
        effect: [
            ["Int", 10],
            ["I", 10],
            ["Fel", 10],
        ],
    },
    {
        value: "elite",
        label: "Elite*",
        effect: [
            ["WS", 20],
            ["BS", 20],
            ["WP", 20],
        ],
    },
    {
        value: "fast",
        label: "Fast*",
        effect: [
            ["M", 1],
            ["Ag", 10],
        ],
    },
    { value: "hatred", label: "Hatred" },
    {
        value: "leader",
        label: "Leader*",
        effect: [
            ["Fel", 10],
            ["WP", 10],
        ],
    },
    {
        value: "tough",
        label: "Tough*",
        effect: [
            ["T", 10],
            ["WP", 10],
        ],
    },
    { value: "weapon", label: "Weapon" },
];
