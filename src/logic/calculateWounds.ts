import { Size } from "../components/Size/SizeEnum";
export const calculateWounds = (
    size: Size,
    toughness: number,
    WillPower: number,
    Strength: number
) => {
    const T = Math.floor(toughness / 10);
    const S = Math.floor(Strength / 10);
    const WP = Math.floor(WillPower / 10);

    switch (size) {
        case Size.TINY:
            return 1;
        case Size.LITTLE:
            return T;
        case Size.SMALL:
            return T * 2;
        case Size.AVERAGE:
            return S + T * 2 + WP;
        case Size.LARGE:
            return (S + T * 2 + WP) * 2;
        case Size.ENORMOUS:
            return (S + T * 2 + WP) * 4;
        case Size.MONSTROUS:
            return (S + T * 2 + WP) * 8;

        default:
            return S + T * 2 + WP;
    }
};
