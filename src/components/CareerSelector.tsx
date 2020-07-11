import * as React from "react";

interface ICareerSelector {
    children: React.ReactNode;
}

export const CareerSelector = ({ children }: ICareerSelector) => {
    return (
        <section className="career-selection">
            <h3>{children}</h3>
        </section>
    );
};
