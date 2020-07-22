import { statName } from "../../components/Skills/SkillList";

export type genericTraitName =
    | "brute"
    | "champion"
    | "cunning"
    | "elite"
    | "fast"
    | "hardy"
    | "tough";

interface IgenericTrait {
    value: genericTraitName;
    label: string;
    effect?: [statName, number][];
}

export const genericTraitOptions: IgenericTrait[] = [
    {
        value: "brute",
        label: "Brute",
        effect: [
            ["M", -1],
            ["Ag", -10],
            ["S", 10],
            ["T", 10],
        ],
    },
    { value: "champion", label: "Champion" },
    { value: "cunning", label: "Cunning" },
    {
        value: "elite",
        label: "Elite",
        effect: [
            ["WS", 20],
            ["BS", 20],
            ["WP", 20],
        ],
    },
    { value: "fast", label: "Fast" },
    { value: "hardy", label: "Hardy" },
    { value: "tough", label: "Tough" },
];
