import * as React from "react";
import "./controls.css";

interface IControl {
    editView: boolean;
    toggleView: (editView: boolean) => void;
}

export const Controls = ({ editView, toggleView }: IControl) => {
    const flipView = () => {
        toggleView(!editView);
    };

    return (
        <section className="controls">
            <button type="button" disabled>
                Save
            </button>
            <button type="button" disabled>
                Load
            </button>
            <button type="button" disabled={!editView} onClick={flipView}>
                Print view
            </button>
            <button type="button" disabled={editView} onClick={flipView}>
                Edit view
            </button>
        </section>
    );
};
