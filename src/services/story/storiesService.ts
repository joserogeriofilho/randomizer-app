import data from "./storyData.json";

type Story = {
  theme: string;
  mainCharacter: string;
  conflict: string;
};

const randomItem = (ar: Array<string>): string => {
  return ar[Math.floor(Math.random() * ar.length)];
};

export const randomStory = (): Story => {
  return {
    theme: randomItem(data.themes),
    mainCharacter: randomItem(data.mainCharacters),
    conflict: randomItem(data.conflicts),
  };
};
