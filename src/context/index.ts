import React from "react";
import { staticText } from "../data/staticText/en";
import { defaultCharacter } from "./../data/defaultCharacter";

export const text = staticText;
export const Text = React.createContext(text);
export const character = defaultCharacter;
export const Character = React.createContext(character);
