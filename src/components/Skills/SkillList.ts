export type statName =
    | "M"
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

export type skillName =
    | "animalcare"
    | "animaltraining"
    | "art"
    | "athletics"
    | "bribery"
    | "channelling"
    | "charm"
    | "charmanimal"
    | "climb"
    | "consumealcohol"
    | "cool"
    | "dodge"
    | "drive"
    | "endurance"
    | "entertain"
    | "evaluate"
    | "gamble"
    | "gossip"
    | "haggle"
    | "heal"
    | "intimidate"
    | "intuition"
    | "language"
    | "leadership"
    | "lore"
    | "melee"
    | "navigation"
    | "outdoorsurvival"
    | "perception"
    | "perform"
    | "picklock"
    | "play"
    | "pray"
    | "ranged"
    | "research"
    | "ride"
    | "row"
    | "sail"
    | "secretsigns"
    | "settrap"
    | "sleightofhand"
    | "stealth"
    | "swim"
    | "track"
    | "trade";

export interface Iskill {
    value: skillName;
    label: string;
    stat: statName;
    specializations?: string[];
}

export const skillList: Iskill[] = [
    { value: "animalcare", label: "Animal Care", stat: "Int" },
    {
        value: "animaltraining",
        label: "Animal Training",
        stat: "Int",
        specializations: ["Demigryph", "Dog", "Horse", "Pegasus", "Pigeon"],
    },
    {
        value: "art",
        label: "Art",
        stat: "Dex",
        specializations: [
            "Cartography",
            "Engraving",
            "Mosaics",
            "Painting",
            "Sculpture",
            "Tattoo",
            "Weaving",
        ],
    },
    { value: "athletics", label: "Athletics", stat: "Ag" },
    { value: "bribery", label: "Bribery", stat: "Fel" },
    {
        value: "channelling",
        label: "Channelling",
        stat: "WP",
        specializations: [
            "Aqshy",
            "Azyr",
            "Chamon",
            "Dhar",
            "Ghur",
            "Ghyran",
            "Hysh",
            "Shyish",
            "Ulgu",
        ],
    },
    { value: "charm", label: "Charm", stat: "Fel" },
    { value: "charmanimal", label: "Charm Animal", stat: "WP" },
    { value: "climb", label: "Climb", stat: "S" },
    { value: "consumealcohol", label: "Consume Alcohol", stat: "T" },
    { value: "cool", label: "Cool", stat: "WP" },
    { value: "dodge", label: "Dodge", stat: "Ag" },
    { value: "drive", label: "Drive", stat: "Ag" },
    { value: "endurance", label: "Endurance", stat: "T" },
    {
        value: "entertain",
        label: "Entertain",
        stat: "Fel",
        specializations: ["Acting", "Comedy", "Singing", "Storytelling"],
    },
    { value: "evaluate", label: "Evaluate", stat: "Int" },
    { value: "gamble", label: "Gamble", stat: "Int" },
    { value: "gossip", label: "Gossip", stat: "Fel" },
    { value: "haggle", label: "Haggle", stat: "Fel" },
    { value: "heal", label: "Heal", stat: "Int" },
    { value: "intimidate", label: "Intimidate", stat: "S" },
    { value: "intuition", label: "Intuition", stat: "I" },
    {
        value: "language",
        label: "Language",
        stat: "Int",
        specializations: [
            "Battle Tongue",
            "Bretonnian",
            "Classical",
            "Guilder",
            "Khazalid",
            "Magick",
            "Thief",
            "Tilean",
        ],
    },
    { value: "leadership", label: "Leadership", stat: "Fel" },
    {
        value: "lore",
        label: "Lore",
        stat: "Int",
        specializations: [
            "Engineering",
            "Geology",
            "Heraldry",
            "History",
            "Law",
            "Magick, Metallurgy",
            "Science",
            "Theology",
        ],
    },
    {
        value: "melee",
        label: "Melee",
        stat: "WS",
        specializations: [
            "Basic",
            "Brawling",
            "Cavalry",
            "Fencing",
            "Flail",
            "Parry",
            "Pole-Arm",
            "Two-Handed",
        ],
    },
    { value: "navigation", label: "Navigation", stat: "I" },
    { value: "outdoorsurvival", label: "Outdoor Survival", stat: "Int" },
    { value: "perception", label: "Perception", stat: "I" },
    {
        value: "perform",
        label: "Perform",
        stat: "Ag",
        specializations: [
            "Acrobatics",
            "Clowning",
            "Dancing",
            "Firebreathing",
            "Juggling",
            "Miming",
            "Rope Walking",
        ],
    },
    { value: "picklock", label: "Pick Lock", stat: "Dex" },
    {
        value: "play",
        label: "Play",
        stat: "Dex",
        specializations: ["Bagpipe", "Lute", "Harpsichord", "Horn", "Violin"],
    },
    { value: "pray", label: "Pray", stat: "Fel" },
    {
        value: "ranged",
        label: "Ranged",
        stat: "BS",
        specializations: [
            "Blackpowder",
            "Bow",
            "Crossbow",
            "Engineering",
            "Explosives",
            "Sling",
            "Throwing",
        ],
    },
    { value: "research", label: "Research", stat: "Int" },
    {
        value: "ride",
        label: "Ride",
        stat: "Ag",
        specializations: [
            "Demigryph",
            "Great Wolf",
            "Griffon",
            "Horse",
            "Pegasus",
        ],
    },
    { value: "row", label: "Row", stat: "S" },
    {
        value: "sail",
        label: "Sail",
        stat: "Ag",
        specializations: ["Barge", "Caravel", "Cog", "Frigate", "Wolfship"],
    },
    { value: "secretsigns", label: "Secret Signs", stat: "Int" },
    { value: "settrap", label: "Set Trap", stat: "Dex" },
    { value: "sleightofhand", label: "Sleight of Hand", stat: "Dex" },
    { value: "stealth", label: "Stealth", stat: "Ag" },
    { value: "swim", label: "Swim", stat: "S" },
    { value: "track", label: "Track", stat: "I" },
    { value: "trade", label: "Trade", stat: "Dex" },
];
