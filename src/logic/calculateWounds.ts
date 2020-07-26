import { Size } from "../components/Size/SizeEnum";
export const calculateWounds = (
    size: Size,
    Toughness: number,
    WillPower: number,
    Strength: number
) => {
    switch (size) {
        case Size.TINY:
            return 1;
        case Size.LITTLE:
            return Toughness;
        case Size.SMALL:
            return Toughness * 2;
        case Size.AVERAGE:
            return Strength + Toughness * 2 + WillPower;
        case Size.LARGE:
            return (Strength + Toughness * 2 + WillPower) * 2;
        case Size.ENORMOUS:
            return (Strength + Toughness * 2 + WillPower) * 4;
        case Size.MONSTROUS:
            return (Strength + Toughness * 2 + WillPower) * 8;

        default:
            return Strength + Toughness * 2 + WillPower;
    }
};
