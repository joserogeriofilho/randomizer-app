import data from "./storyData.json";

type Story = {
  theme: string;
  mainCharacter: string;
  conflict: string;
};

const themes = data.themes;
const mainCharacters = data.mainCharacters;
const conflicts = data.conflicts;

const randomItem = (ar: Array<any>): string => {
  return ar[Math.floor(Math.random() * ar.length)];
};

export const randomStory = (): Story => {
  return {
    theme: randomItem(themes),
    mainCharacter: randomItem(mainCharacters),
    conflict: randomItem(conflicts),
  };
};
