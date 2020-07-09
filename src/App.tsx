import React from "react";
import "./App.css";
import { RaceSelector } from "./components/RaceSelector";
import { staticText } from "./data/staticText/en";

import { raceManifest } from "./data/race/manifest";

export const Text = React.createContext(staticText);

function App() {
    return (
        <Text.Provider value={staticText}>
            <main>
                <RaceSelector options={raceManifest} />
            </main>
        </Text.Provider>
    );
}

export default App;
