import React from "react";

export interface Skill {
    name: string;
    key: string;
    subtitle?: string;
    description: string;
    category: string;
    link?: string;
    level: number;
    image: string;
    theme: string;
    createdBy?: string;
    usedBy?: string[];
}

export interface Challenge {
    start: Date;
    end?: Date;
    name: string;
    description: string;
    subtitle: string;
    link?: string;
    skills: string[];
    image: string;
    theme: string;
}

export interface SkillsContextState {
    skills: {[key: string]: Skill};
    challenges: Challenge[];
    selectedChallenge: Challenge | null;
    selectChallenge: (challenge: Challenge | null) => void;
    selectedSkill: Skill | null;
    selectSkill: (skill: Skill | null) => void;
}

export const SkillsContext = React.createContext<SkillsContextState>({
    skills: {},
    challenges: [],
    selectedChallenge: null,
    selectChallenge: () => {},
    selectedSkill: null,
    selectSkill: () => {}
})