import React from "react";
import "./App.css";
import { RaceSelector } from "./components/RaceSelector";
import { Text, text } from "./context";

import { raceManifest } from "./data/race/manifest";

function App() {
    return (
        <Text.Provider value={text}>
            <main>
                <RaceSelector options={raceManifest} />
            </main>
        </Text.Provider>
    );
}

export default App;
