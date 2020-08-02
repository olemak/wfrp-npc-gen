import * as React from "react";
import Select from "react-select";
import { careerList, nullCareer } from "./CareerList";
import "./career.css";

interface IselectedCareerSingle {
    careerId: string | null;
    careerTiers: boolean[];
}

export type selectedCareersType = [
    IselectedCareerSingle,
    IselectedCareerSingle,
    IselectedCareerSingle
];

interface ICareerSelector {
    children: React.ReactNode;
    handleChange: (selectedCareers: selectedCareersType) => void;
    careerSet: selectedCareersType;
}

export const CareerSelector = ({
    children,
    handleChange,
    careerSet,
}: ICareerSelector) => {
    const firstCareer = careerSet[0];
    const secondCareer = careerSet[1];
    const thirdCareer = careerSet[2];

    const [localCareers, setlocalCareers] = React.useState([
        nullCareer,
        nullCareer,
        nullCareer,
    ]);

    const handleCareer = (option: any, careerIndex: 0 | 1 | 2) => {
        let newCareerSet: selectedCareersType = [...careerSet];
        newCareerSet[careerIndex].careerId = option.value;
        handleChange(newCareerSet);

        let newLocalCareers = [...localCareers];
        newLocalCareers[careerIndex] = option;
        setlocalCareers(newLocalCareers);
    };

    const handleTiers = (careerIndex: number, tierIndex: number) => {
        const newFirstTiers = [...firstCareer.careerTiers];
        const newSecondTiers = [...secondCareer.careerTiers];
        const newThirdTiers = [...thirdCareer.careerTiers];

        switch (careerIndex) {
            case 0:
                newFirstTiers[tierIndex] = !newFirstTiers[tierIndex];
                break;
            case 1:
                newSecondTiers[tierIndex] = !newSecondTiers[tierIndex];
                break;
            case 2:
                newThirdTiers[tierIndex] = !newThirdTiers[tierIndex];
                break;

            default:
                break;
        }

        handleChange([
            { careerId: firstCareer.careerId, careerTiers: newFirstTiers },
            { careerId: secondCareer.careerId, careerTiers: newSecondTiers },
            { careerId: thirdCareer.careerId, careerTiers: newThirdTiers },
        ]);
    };

    const getCareerTierName = (careerIndex: number, index: number) =>
        localCareers[careerIndex].tier[index].label;

    const filteredCareers = () =>
        careerList.filter(
            (career) =>
                ![
                    careerSet[0].careerId,
                    careerSet[1].careerId,
                    careerSet[2].careerId,
                ].includes(career.value) || career.label === "None"
        );

    return (
        <section className="career-selection">
            <Select
                options={filteredCareers()}
                placeholder="You may add a career, too!"
                onChange={(option) => {
                    handleCareer(option, 0);
                }}
            />
            {firstCareer.careerId && (
                <div>
                    <input
                        type="checkbox"
                        id="career-1-1"
                        onChange={() => {
                            handleTiers(0, 0);
                        }}
                        checked={careerSet[0].careerTiers[0]}
                    />
                    <label htmlFor="career-1-1">
                        {getCareerTierName(0, 0)}
                    </label>
                    <input
                        type="checkbox"
                        id="career-1-2"
                        onChange={() => {
                            handleTiers(0, 1);
                        }}
                        disabled={!firstCareer.careerTiers[0]}
                    />
                    <label htmlFor="career-1-2">
                        {getCareerTierName(0, 1)}
                    </label>
                    <input
                        type="checkbox"
                        id="career-1-3"
                        onChange={() => {
                            handleTiers(0, 2);
                        }}
                        disabled={!firstCareer.careerTiers[1]}
                    />
                    <label htmlFor="career-1-3">
                        {getCareerTierName(0, 2)}
                    </label>
                    <input
                        type="checkbox"
                        id="career-1-4"
                        onChange={() => {
                            handleTiers(0, 3);
                        }}
                        disabled={!firstCareer.careerTiers[2]}
                    />
                    <label htmlFor="career-1-4">
                        {getCareerTierName(0, 3)}
                    </label>
                    <Select
                        options={filteredCareers()}
                        placeholder="Add another career, if you like."
                        onChange={(option) => {
                            handleCareer(option, 1);
                        }}
                    />
                </div>
            )}

            {secondCareer.careerId && (
                <div>
                    <input
                        type="checkbox"
                        id="career-2-1"
                        onChange={() => {
                            handleTiers(1, 0);
                        }}
                        checked={careerSet[1].careerTiers[0]}
                    />
                    <label htmlFor="career-2-1">
                        {getCareerTierName(1, 0)}
                    </label>
                    <input
                        type="checkbox"
                        id="career-2-2"
                        onChange={() => {
                            handleTiers(1, 1);
                        }}
                        disabled={!secondCareer.careerTiers[0]}
                    />
                    <label htmlFor="career-2-2">
                        {getCareerTierName(1, 1)}
                    </label>
                    <input
                        type="checkbox"
                        id="career-2-3"
                        onChange={() => {
                            handleTiers(1, 2);
                        }}
                        disabled={!secondCareer.careerTiers[1]}
                    />
                    <label htmlFor="career-2-3">
                        {getCareerTierName(1, 2)}
                    </label>
                    <input
                        type="checkbox"
                        id="career-2-4"
                        onChange={() => {
                            handleTiers(1, 3);
                        }}
                        disabled={!secondCareer.careerTiers[2]}
                    />
                    <label htmlFor="career-2-4">
                        {getCareerTierName(1, 3)}
                    </label>
                    <Select
                        options={filteredCareers()}
                        placeholder="Add yet another career? (last one)"
                        onChange={(option) => {
                            handleCareer(option, 2);
                        }}
                    />
                </div>
            )}

            {thirdCareer.careerId && (
                <div>
                    <input
                        type="checkbox"
                        id="career-3-1"
                        onChange={() => {
                            handleTiers(2, 0);
                        }}
                        checked={careerSet[2].careerTiers[0]}
                    />
                    <label htmlFor="career-3-1">
                        {getCareerTierName(2, 0)}
                    </label>
                    <input
                        type="checkbox"
                        id="career-3-2"
                        onChange={() => {
                            handleTiers(2, 1);
                        }}
                        disabled={!thirdCareer.careerTiers[0]}
                    />
                    <label htmlFor="career-3-2">
                        {getCareerTierName(2, 1)}
                    </label>
                    <input
                        type="checkbox"
                        id="career-3-3"
                        onChange={() => {
                            handleTiers(2, 2);
                        }}
                        disabled={!thirdCareer.careerTiers[1]}
                    />
                    <label htmlFor="career-3-3">
                        {getCareerTierName(2, 2)}
                    </label>
                    <input
                        type="checkbox"
                        id="career-3-4"
                        onChange={() => {
                            handleTiers(2, 3);
                        }}
                        disabled={!thirdCareer.careerTiers[2]}
                    />
                    <label htmlFor="career-3-4">
                        {getCareerTierName(2, 3)}
                    </label>
                </div>
            )}
        </section>
    );
};
