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
            },
            sql: {
                name: 'SQL',
                key: 'sql',
                description: 'TODO',
                category: 'TODO',
                level: 0,
                theme: '#133863',
                image: 'sql.png',
            },
            networking: {
                name: 'Networking',
                key: 'networking',
                description: 'TODO',
                category: 'TODO',
                level: 0,
                theme: '#133863',
                image: 'networking.png',
            }
        },
        challenges: [
            {
                name: 'Founder @ Ticket721',
                image: 'ticket721.png',
                subtitle: 'CTO at a modern ticketing platform',
                description: 'TODO',
                start: new Date(Date.parse('01 May 2018')),
                link: 'https://app.ticket721.com',
                theme: '#0D0D0D',
                skills: [
                    'typescript',
                    'react'
                ]
            },
            {
                name: 'Learning Serverless',
                image: 'serverless.png',
                subtitle: 'Framework providing cloud serverless services abstractions',
                description: 'TODO',
                start: new Date(Date.parse('01 Jul 2020')),
                theme: '#222222',
                link: 'https://www.serverless.com/',
                skills: [
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

            // Github
            {
                name: 'erc2280',
                image: 'ethereum.png',
                subtitle: 'An attempt to create an Ethereum ERC',
                description: 'TODO',
                start: new Date(Date.parse('05 Sep 2019')),
                end: new Date(Date.parse('15 Mar 2020')),
                link: 'https://github.com/ethereum/EIPs/pull/2280',
                theme: '#4F527C',
                skills: []
            },
            {
                name: 'oclbhgs',
                image: 'oclbhgs.png',
                subtitle: 'Galaxy Simulator boosted by the GPU (Concordia project)',
                description: 'TODO',
                start: new Date(Date.parse('01 Sep 2018')),
                end: new Date(Date.parse('31 Dec 2018')),
                link: 'https://dev.to/mortimr/rules-are-meant-to-be-broken-52f0',
                theme: '#2E5FA3',
                skills: []
            },
            {
                name: 'ethvtx',
                image: 'ethvtx.png',
                subtitle: 'Ethereum-ready & framework-agnostic redux store configuration',
                description: 'TODO',
                start: new Date(Date.parse('10 Apr 2018')),
                end: new Date(Date.parse('31 Aug 2018')),
                link: 'https://github.com/ticket721/ethvtx',
                theme: '#363636',
                skills: []
            },

            // Concordia
            {
                name: 'Concordia Winter 2019',
                image: 'concordia.png',
                subtitle: 'Learning Software Engineering techniques and more ...',
                description: 'TODO',
                start: new Date(Date.parse('01 Jan 2019')),
                end: new Date(Date.parse('31 Jun 2019')),
                link: 'https://www.concordia.ca/',
                theme: '#92112C',
                skills: []
            },
            {
                name: 'Concordia Fall 2018',
                image: 'concordia.png',
                subtitle: 'Learning AI, Multicore Programming and more ...',
                description: 'TODO',
                start: new Date(Date.parse('1 Sep 2018')),
                end: new Date(Date.parse('31 Dec 2018')),
                link: 'https://www.concordia.ca/',
                theme: '#92112C',
                skills: []
            },

            // Hackathons
            {
                name: 'Facebook World Finals',
                image: 'fbhackfinals.png',
                subtitle: 'Hackathon with all world finalists',
                description: 'TODO',
                start: new Date(Date.parse('14 Nov 2018')),
                end: new Date(Date.parse('20 Nov 2018')),
                link: 'https://www.facebook.com/events/d41d8cd9/facebook-global-hackathon-finals-2018-prototype-forum-live/319810475279801/',
                theme: '#2461B1',
                skills: []
            },
            {
                name: 'Facebook FR Hackathon',
                image: 'fbhackparis.png',
                subtitle: 'France hackathon, won 1st 🥇 place',
                description: 'TODO',
                start: new Date(Date.parse('07 Apr 2018')),
                end: new Date(Date.parse('08 Apr 2018')),
                link: 'https://www.epitech.eu/fr/actualites-evenements/facebook-global-hackathon-finals-epitech-polytechnique-blockchain-ethereum-innovation/',
                theme: '#395B9B',
                skills: []
            },

            // Internships
            {
                name: 'Greenbureau',
                image: 'greenbureau.png',
                subtitle: 'Software Developer internship',
                description: 'TODO',
                start: new Date(Date.parse('01 Jul 2016')),
                end: new Date(Date.parse('31 Dec 2016')),
                link: 'https://corp.greenbureau.com/',
                theme: '#5F70FE',
                skills: []
            },
            {
                name: 'Advanced Schema',
                image: 'advancedschema.png',
                subtitle: 'Blockchain R&D Developer internship',
                description: 'TODO',
                start: new Date(Date.parse('01 Apr 2018')),
                end: new Date(Date.parse('31 Aug 2018')),
                link: 'https://www.advanced-schema.com/home',
                theme: '#3A3A3A',
                skills: []
            },

            // EPITECH
            {
                name: 'Epitech 1st Year',
                image: 'epitech.png',
                subtitle: 'Learning the basics of computer science',
                description: 'TODO',
                start: new Date(Date.parse('01 Sep 2015')),
                end: new Date(Date.parse('04 Jul 2016')),
                link: 'https://epitech.eu',
                theme: '#000000',
                skills: [
                    'c',
                    'unix',
                    'sql'
                ]
            },
            {
                name: 'Epitech 2nd Year',
                image: 'epitech.png',
                subtitle: 'Discovering advanced computer science topics',
                description: 'TODO',
                start: new Date(Date.parse('01 Sep 2016')),
                end: new Date(Date.parse('02 Aug 2017')),
                link: 'https://epitech.eu',
                skills: [
                    'c',
                    'cpp',
                    'unix',
                    'sql'
                ],
                theme: '#000000'
            },
            {
                name: 'Epitech 3rd Year',
                image: 'epitech.png',
                subtitle: 'Focusing on team work and larger projects',
                description: 'TODO',
                start: new Date(Date.parse('01 Sep 2017')),
                end: new Date(Date.parse('31 Aug 2018')),
                link: 'https://epitech.eu',
                skills: [
                    'c',
                    'cpp',
                    'unix',
                    'sql',
                    'networking'
                ],
                theme: '#000000'
            },
            {
                name: 'Epitech 4th Year',
                image: 'epitech.png',
                subtitle: 'Training remote work and discovering Canada',
                description: 'TODO',
                start: new Date(Date.parse('01 Sep 2018')),
                end: new Date(Date.parse('27 Jul 2019')),
                link: 'https://epitech.eu',
                skills: [
                ],
                theme: '#000000'
            },
            {
                name: 'Epitech 5th Year',
                image: 'epitech.png',
                subtitle: 'Finishing the EIP',
                description: 'TODO',
                start: new Date(Date.parse('28 Aug 2019')),
                end: new Date(Date.parse('29 Sep 2020')),
                link: 'https://epitech.eu',
                skills: [
                ],
                theme: '#000000'
            },
            {
                name: 'Epitech EIP',
                image: 'epitechxp.png',
                subtitle: 'A two and a half year group project',
                description: 'TODO',
                start: new Date(Date.parse('01 Sep 2017')),
                end: new Date(Date.parse('20 Jan 2020')),
                link: 'https://epitech.eu',
                skills: [
                ],
                theme: '#000000',
            },
            {
                name: 'Epitech Entrepreneur II',
                image: 'epitechentrepreneur.png',
                subtitle: 'Epitech helping me with my own company (again)',
                description: 'TODO',
                start: new Date(Date.parse('01 Feb 2020')),
                end: new Date(Date.parse('01 Sep 2020')),
                link: 'https://epitech.eu',
                skills: [
                ],
                theme: '#3A9EEE',
            },
            {
                name: 'Epitech Entrepreneur I',
                image: 'epitechentrepreneur.png',
                subtitle: 'Epitech helping me with my own company',
                description: 'TODO',
                start: new Date(Date.parse('01 Sep 2019')),
                end: new Date(Date.parse('20 Jan 2020')),
                link: 'https://epitech.eu',
                skills: [
                ],
                theme: '#3A9EEE',
            }
        ],
        selectChallenge: () => { },
        selectedChallenge: null,
        selectSkill: () => { },
        selectedSkill: null,
    }
}
