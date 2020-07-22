import { statName } from "../../components/Skills/SkillList";
export type traitName =
    | "amphibious"
    | "arboreal"
    | "animosity"
    | "armour"
    | "bestial"
    | "bite"
    | "blessed"
    | "bounce"
    | "breath"
    | "chillgrasp"
    | "coldblooded"
    | "constrictor"
    | "construct"
    | "corrosiveblood"
    | "corruption"
    | "darkvision"
    | "daemonic"
    | "diehard"
    | "disease"
    | "distracting"
    | "ethereal"
    | "fear"
    | "flight"
    | "frenzy"
    | "fury"
    | "ghostlyhowl"
    | "hatred"
    | "horns"
    | "hungry"
    | "immunity"
    | "immunitypsychology"
    | "infected"
    | "infestation"
    | "magical"
    | "magicresistance"
    | "mentalcorruption"
    | "miracles"
    | "mutation"
    | "nightvision"
    | "painless"
    | "petrifyinggaze"
    | "prejudice"
    | "ranged"
    | "rear"
    | "skittish"
    | "spellcaster"
    | "stealthy"
    | "stride"
    | "stupid"
    | "swarm"
    | "tailattack"
    | "tentacles"
    | "territorial"
    | "terror"
    | "trained"
    | "tongueattack"
    | "tracker"
    | "undead"
    | "unstable"
    | "vampiric"
    | "venom"
    | "vomit"
    | "ward"
    | "wallcrawler"
    | "weapon"
    | "web";

export type effectType = [statName, number];

export const traitsManifest: {
    value: traitName;
    label: string;
    effect?: effectType[];
}[] = [
    { value: "amphibious", label: "Amphibious" },
    { value: "arboreal", label: "Arboreal" },
    { value: "animosity", label: "Animosity (Target)" },
    { value: "armour", label: "Armour (Rating)" },
    { value: "bestial", label: "Bestial" },
    { value: "bite", label: "Bite (Rating)" },
    { value: "blessed", label: "Blessed (Various)" },
    { value: "bounce", label: "Bounce" },
    { value: "breath", label: "Breath Rating (Type)" },
    { value: "chillgrasp", label: "Chill Grasp" },
    { value: "coldblooded", label: "Cold-blooded" },
    { value: "constrictor", label: "Constrictor" },
    { value: "construct", label: "Construct" },
    { value: "corrosiveblood", label: "Corrosive Blood" },
    { value: "corruption", label: "Corruption (Strength)" },
    { value: "darkvision", label: "Dark Vision" },
    { value: "daemonic", label: "Daemonic (Target)" },
    { value: "diehard", label: "Die Hard" },
    { value: "disease", label: "Disease (Type)" },
    { value: "distracting", label: "Distracting" },
    { value: "ethereal", label: "Ethereal" },
    { value: "fear", label: "Fear (Rating)" },
    { value: "flight", label: "Flight (Rating)" },
    { value: "frenzy", label: "Frenzy" },
    { value: "fury", label: "Fury" },
    { value: "ghostlyhowl", label: "Ghostly Howl" },
    { value: "hatred", label: "Hatred (Target)" },
    { value: "horns", label: "Horns Rating (Feature)" },
    { value: "hungry", label: "Hungry" },
    { value: "immunity", label: "Immunity (Type)" },
    { value: "immunitypsychology", label: "Immunity to Psychology" },
    { value: "infected", label: "Infected" },
    { value: "infestation", label: "Infestation" },
    { value: "magical", label: "Magical" },
    { value: "magicresistance", label: "Magic Resistance (Rating)" },
    { value: "mentalcorruption", label: "Mental Corruption" },
    { value: "miracles", label: "Miracles (various)" },
    { value: "mutation", label: "Mutation" },
    { value: "nightvision", label: "Night Vision" },
    { value: "painless", label: "Painless" },
    { value: "petrifyinggaze", label: "Petrifying Gaze" },
    { value: "prejudice", label: "Prejudice (Target)" },
    { value: "ranged", label: "Ranged Rating (Range)" },
    { value: "rear", label: "Rear" },
    { value: "skittish", label: "Skittish" },
    { value: "spellcaster", label: "Spellcaster (Various)" },
    { value: "stealthy", label: "Stealthy" },
    { value: "stride", label: "Stride" },
    { value: "stupid", label: "Stupid" },
    { value: "swarm", label: "Swarm" },
    { value: "tailattack", label: "Tail Attack (Rating)" },
    { value: "tentacles", label: "# Tentacles (Rating)" },
    { value: "territorial", label: "Territorial" },
    { value: "terror", label: "Terror (Rating)" },
    { value: "trained", label: "Trained (Trained Skills)" },
    { value: "tongueattack", label: "Tongue Attack Rating (Range)" },
    { value: "tracker", label: "Tracker" },
    { value: "undead", label: "Undead" },
    { value: "unstable", label: "Unstable" },
    { value: "vampiric", label: "Vampiric" },
    { value: "venom", label: "Venom (Difficulty)" },
    { value: "vomit", label: "Vomit" },
    { value: "ward", label: "Ward (Rating)" },
    { value: "wallcrawler", label: "Wallcrawler" },
    { value: "weapon", label: "Weapon (Rating)" },
    { value: "web", label: "Web (Rating)" },
];
