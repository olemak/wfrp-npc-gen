import React from "react";
import "./App.css";
import { SpeciesSelector } from "./components/SpeciesSelector";
import { Text, text } from "./context";

import { species } from "./data/species/manifest";

function App() {
    return (
        <Text.Provider value={text}>
            <main>
                <SpeciesSelector options={species} />
            </main>
        </Text.Provider>
    );
}

export default App;
