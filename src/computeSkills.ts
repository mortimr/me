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
                theme: '#277ACC',
                image: 'typescript.png',
                createdBy: 'Microsoft',
            },
            c: {
                name: 'C',
                key: 'c',
                description: 'Just below C++, just above ASM',
                category: 'Programming Languages',
                level: 0,
                theme: '#333E90',
                image: 'c.png'
            },
            cpp: {
                name: 'C++',
                key: 'cpp',
                description: 'THE object oriented programming language',
                category: 'Programming Languages',
                level: 0,
                theme: '#1E6AA6',
                image: 'cpp.png'
            },
            react: {
                name: 'React',
                key: 'react',
                description: 'Javascript library for building interfaces',
                category: 'Framework & Libraries',
                level: 0,
                theme: '#367586',
                image: 'react.png',
                createdBy: 'Facebook',
                usedBy: ['Facebook', 'Airbnb', 'Uber', 'Netflix', 'Instagram']
            },
            unix: {
                name: 'UNIX',
                key: 'unix',
                description: 'Multitasking, multiuser computer operating systems',
                category: 'Systems',
                level: 0,
                theme: '#000000',
                image: 'unix.png'
            },
            nxdev: {
                name: 'Nx.dev',
                key: 'nxdev',
                description: 'Set of extensible dev tools for monorepos, which helps you develop like Google, Facebook, and Microsoft',
                category: 'Framework & Libraries',
                level: 0,
                theme: '#133863',
                image: 'nxdev.png',
                createdBy: 'Ex-Googlers, Ex-Microsofters & Ex-Facebookers',
                usedBy: ['Cisco', 'T-Mobile', 'Microsoft', 'RedHat']
            }
        },
        challenges: [
            {
                name: 'Founder/CTO @ Ticket721',
                image: 'ticket721.png',
                subtitle: 'A modern ticketing platform',
                description: 'A ticketing platform focusing on security and user experience',
                start: new Date(Date.parse('01 May 2018')),
                link: 'https://app.ticket721.com',
                theme: '#0D0D0D',
                skills: [
                    'typescript',
                    'react'
                ]
            },
            {
                name: 'Learning Nx.dev',
                image: 'nxdev.png',
                subtitle: 'Typescript Monorepos tools',
                description: 'Nx.dev is a set of tools (CLI, Schematics and Modules) that enable a true monorepo experience. Most of the time, JS and TS monorepos only use Yarn Workspaces or Lerna. But on the long term, it becomes quite hard to use Lerna or Yarn (a lot of CI manual tweaks are required, code sharing is configured manually). Nx.dev solves all these issues with built-in modification checkers (to boost your CI) and automatic code sharing configuration. A must check for Fullstack Typescript developers',
                start: new Date(Date.parse('01 Jul 2020')),
                theme: '#133863',
                link: 'https://nx.dev',
                skills: [
                    'typescript',
                    'react',
                    'nxdev'
                ]
            },
            {
                name: 'Epitech 1st Year',
                image: 'epitech.png',
                subtitle: 'First year as a computer science student',
                description: 'First year as a computer science student',
                start: new Date(Date.parse('01 Sep 2015')),
                end: new Date(Date.parse('04 Jul 2016')),
                link: 'https://epitech.eu',
                theme: '#000000',
                skills: [
                    'c',
                    'unix'
                ]
            },
            {
                name: 'Epitech 2nd Year',
                image: 'epitech.png',
                subtitle: 'First year as a computer science student',
                description: 'First year as a computer science student',
                start: new Date(Date.parse('01 Sep 2016')),
                end: new Date(Date.parse('02 Aug 2017')),
                link: 'https://epitech.eu',
                skills: [
                    'c',
                    'cpp',
                    'unix'
                ],
                theme: '#000000'
            }
        ],
        selectChallenge: () => { },
        selectedChallenge: null,
        selectSkill: () => { },
        selectedSkill: null,
    }
}
