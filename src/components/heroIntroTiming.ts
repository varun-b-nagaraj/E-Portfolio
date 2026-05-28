export const heroNameLines = ["Varun", "Bhadurgatte", "Nagaraj"];
export const heroNameDelay = 200;
export const heroNameCharacterStep = 78;
export const heroBodyDelayAfterName = 250;
export const heroNameCharacterCount = heroNameLines.join("").length;
export const heroNameTypingEnd = heroNameDelay + heroNameCharacterCount * heroNameCharacterStep;
export const heroRevealAfterName = heroNameTypingEnd + heroBodyDelayAfterName;
