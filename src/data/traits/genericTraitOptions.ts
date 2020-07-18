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
}

export const genericTraitOptions: IgenericTrait[] = [
    { value: "brute", label: "Brute" },
    { value: "champion", label: "Champion" },
    { value: "cunning", label: "Cunning" },
    { value: "elite", label: "Elite" },
    { value: "fast", label: "Fast" },
    { value: "hardy", label: "Hardy" },
    { value: "tough", label: "Tough" },
];
