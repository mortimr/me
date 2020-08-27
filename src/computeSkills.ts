import { SkillsContextState } from "./components/skills/context"

export const computeSkills = (): SkillsContextState => {
    return {
        skills: {
            typescript: {
                name: 'Typescript',
                key: 'typescript',
                description: 'JS with types',
                category: 'Programming Languages',
                level: 0,
                image: 'typescript.png'
            },
            c: {
                name: 'C',
                key: 'c',
                description: 'Just below C++, just above ASM',
                category: 'Programming Languages',
                level: 0,
                image: 'c.png'
            },
            cpp: {
                name: 'C++',
                key: 'cpp',
                description: 'THE object oriented programming language',
                category: 'Programming Languages',
                level: 0,
                image: 'cpp.png'
            },
            react: {
                name: 'React',
                key: 'react',
                description: 'Javascript library for building interfaces',
                category: 'Framework & Libraries',
                level: 0,
                image: 'react.png'
            },
            unix: {
                name: 'UNIX',
                key: 'unix',
                description: 'Multitasking, multiuser computer operating systems',
                category: 'Systems',
                level: 0,
                image: 'unix.png'
            },
            nxdev: {
                name: 'Nx.dev',
                key: 'nxdev',
                description: 'Set of extensible dev tools for monorepos, which helps you develop like Google, Facebook, and Microsoft',
                category: 'Framework & Libraries',
                level: 0,
                image: 'nxdev.png;w'
            }
        },
        challenges: [
            {
                name: 'Ticket721',
                image: 'ticket721.png',
                description: 'A ticketing platform focusing on security and user experience',
                start: new Date(Date.parse('01 May 2018')),
                skills: [
                    'typescript',
                    'react'
                ]
            },
            {
                name: 'Learning Nx.dev',
                image: 'nxdev.png',
                description: 'The best current solution for Typescript Monorepos',
                start: new Date(Date.parse('01 Jul 2020')),
                skills: [
                    'typescript',
                    'react',
                    'nxdev'
                ]
            },
            {
                name: 'Epitech 1st Year',
                image: 'epitech.png',
                description: 'First year as a computer science student',
                start: new Date(Date.parse('01 Sep 2015')),
                end: new Date(Date.parse('04 Jul 2016')),
                skills: [
                    'c',
                    'unix'
                ]
            },
            {
                name: 'Epitech 2nd Year',
                image: 'epitech.png',
                description: 'First year as a computer science student',
                start: new Date(Date.parse('01 Sep 2016')),
                end: new Date(Date.parse('02 Aug 2017')),
                skills: [
                    'c',
                    'cpp',
                    'unix'
                ]
            }
        ],
        selectChallenge: () => {},
        selectedChallenge: null,
        selectSkill: () => {},
        selectedSkill: null,
    }
}
