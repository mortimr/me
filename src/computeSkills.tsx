import { SkillsContextState } from "./components/skills/context"
import { styled } from "./styled"
import React from "react";

const Text = styled.h4`
    margin: 0;
    font-weight: 300;
`;

const Bold = styled.span`
    font-weight: 500;
`;

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
                subtitle: 'CTO on a modern ticketing platform',
                description: <Text>
                    <Bold>Ticket721</Bold> is a ticketing platform focusing on security and user experience.
                    Security is enhanced with 100% digital tickets, created as unique and 100%
                    owned by the user on the <Bold>Ethereum blockchain</Bold>. The tickets can be sold freely
                    on a secured marketplace, lowering fraud drastically. I'm in charge of all
                    the technical development of Ticket721, its products, infrastructure,
                    tech recruitment and training. <Bold>Follow the link to access the platform !</Bold>
                </Text>,
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
                description: <Text>
                    Currently learning the <Bold>Serverless framework</Bold> to upgrade my cloud skills and apply this new
                    knowledge to current projects. Serverless makes it easy to use the power of services like
                    <Bold> AWS Lambda</Bold> or <Bold>AWS Aurora Serverless</Bold>, lowering configuration and infrastructure management time
                    and increasing feature development time. It has an abstracted approach, making it easy to switch
                    between cloud providers and still have the same result. It is a must use set of tools for all new
                    projects, as it helps developers focus on the product itself.
                    </Text>,
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
                description: <Text>
                    Nx.dev is a set of tools (CLI, Schematics and Modules) that enable a true monorepo experience.
                    Most of the time, JS and TS monorepos only use Yarn Workspaces or Lerna. But on the long term,
                    it becomes quite hard to use Lerna or Yarn (a lot of CI manual tweaks are required, code sharing
                    is configured manually). Nx.dev solves all these issues with built-in modification checkers (to boost your CI)
                    and automatic code sharing configuration. A must check for Fullstack Typescript developers
                    </Text>,
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
                description: <Text>
                    At one point in the development of Ticket721, the use of a token to exchange the tickets has been mentioned.
                    But in order to do so, we needed a new type of tokens, with extra methods. In <Bold>Ethereum</Bold>, tokens follow a standard
                    called <Bold>ERC20</Bold>. To exchange any kind of tokens, you need to also have <Bold>Ether</Bold>, the core currency of the blockchain.
                    This is called <Bold>gas</Bold>, the fee for the transactions. This is a real issue when you only want to use your own token
                    (you cannot expect your users to have spare Ether for your app). This is what <Bold>ERC2280</Bold> tried to solve. By extending
                    a bit what <Bold>ERC20</Bold> did, we added new functionalities to delegate authorizations, and allow another entity to broadcast it and
                    trigger a token exchange. This means that it was up to the other user to pay for the gas (this other user would be Ticket721).
                    It allowed users to keep 100% ownership of their account and token, but exchange them without paying gas. In the end, a lot of
                    teams also worked on the issue and created all sorts of solutions that mine clearly got deprecated !
                    </Text>,
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
                description: <Text>
                    For a Concordia course (<Bold>COMP426 Multicore Programming <span role='img' aria-label='hearth'>♥️</span></Bold>), we had to create a <Bold>n-body simulator</Bold> boosted by the GPU.
                    The main tool we would be using is <Bold>OpenCL</Bold>. It allows us to use all our devices (GPU & CPUs) for computing tasks.
                    Our goal was to implement a specific algorithm (<Bold>Barnes-Hut</Bold>) to properly compute the gravitational forces between all the bodies
                    and run a smooth simulation. It was a real technical challenge. <Bold>Click the link to find an article about my project
                    and links to the repository</Bold>.

                    <br />
                    <img
                        style={{
                            width: '90%',
                            marginLeft: '5%',
                            marginTop: '10%',
                            borderRadius: 8
                        }}
                        src={'https://github.com/mortimr/oclbhgs/raw/master/.10k1g.gif'}
                        alt={'OCLBHGS'}
                    />
                </Text>,
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
                description: <Text>
                    In order to work with Ethereum, apps need to be connected to nodes. Nodes are what
                    keep the Ethereum blockchain alive, validate the transactions etc. To connect to these
                    nodes, we have JSON-RPC interfaces and sdk (Web3.js is the most famouse one). Ethvtx is a
                    redux plugin that would use the Web3.js sdk to update data in the redux store. Components
                    would be subscribes to specific data, and the store would update it properly. It added a lot of
                    reactivity to Ethereum apps. But hooks came out and other teams where on the subject, in the end
                    ethvtx got deprecated as I had no time to keep up the pace
                    </Text>,
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
                description: <Text>
                    Second semester in my Canadian adventure. I kept working hard and enjoyed my courses as much as first semester, while also
                    working hard on Ticket721. Here is a small summary of what I did:

                    <br />
                    <br />
                    • <Bold>COMP346 Operating Systems </Bold>: This course was digging into what composes an Operating System, how it communicates with
                    the hardware components, how tasks are resolved, concurrency is managed etc ...
                    <br />
                    <br />
                    • <Bold>COMP445 Data Communications & Computer Networks </Bold>: How are network packets composed ? How do they travel the world ? What protocols are powering the Internet ?
                    How did they become standards ? What actors keep it all alive ? This course answered all of these questions in details, always with associated practical work.
                    <br />
                    <br />
                    • <Bold>SOEN345 Software Testing, Verification & QA </Bold>: Very interesting course about tests, how to measure quality properly, when to test, when not to test. We also studied
                    how migrations should be made, how rolling out features should be handled and how the best are doing it.

                    <br />
                    <img
                        style={{
                            width: '90%',
                            marginLeft: '5%',
                            marginTop: '10%',
                            borderRadius: 8
                        }}
                        src={require('./skills_challenges_media/concordia_winter.jpg')}
                        alt={'Concordia'}
                    />

                </Text>,
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
                description: <Text>
                    First semester in Concordia. First time learning computer science outside of Epitech, in a regular manner. I also started working on Ticket721 remotely.
                    These are the courses I took and what I learned.

                    <br />
                    <br />
                    • <Bold>COMP426 Multicore Programming </Bold>: This amazing course introduces the tools and techniques to properly harvest computing power from a computer. From CPU
                    to GPU, OpenMP to OpenCL, we ended up creating an n-body simulator powered by the GPU & the CPU !
                    <br />
                    <br />
                    • <Bold>COMP472 Artificial Intelligence </Bold>: The course started wuth a bit of history on AI and how we ended up where we are today. We then explored famouse algorithms
                    with practical work every time. We also learned about and used Neural Networks, their different forms and use cases and Tensorflow.
                    <br />
                    <br />
                    • <Bold>SOEN341 Software Process </Bold>: This course teaches how to properly gather the requirements for a project and generate the associated documentation that
                    is readable by any actor of the project. We had to create our own project (a library management system) where we had to write and maintain an SRS (Software Requirements Specification)
                    and an SAD (Software Architecture Document).

                    <br />
                    <img
                        style={{
                            width: '90%',
                            marginLeft: '5%',
                            marginTop: '10%',
                            borderRadius: 8
                        }}
                        src={require('./skills_challenges_media/concordia_fall.jpg')}
                        alt={'Concordia'}
                    />

                </Text>,
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
                description: <Text>
                    After our victory in France, we won tickets to represent our country in the World Finals. The format was the same, 24h coding, day & night, then prototype forum.
                    The jury was mainly composed of Facebook Engineers.
                    <br />
                    For this time, we decided to do something ballsy by presenting a fully p2p social network. It would connect to other peers and exchange encrypted information about
                    friends. In the end we had a working prototype where users were able to add friends and recover their posts & likes via p2p. But it wasn't enough for the jury.
                    We had a blast during the hackathon, meeting a lot of other student engineers like us and representing France. The other candidates had incredibly solid
                    projects and in the end we were no match !

                    <img
                        style={{
                            width: '90%',
                            marginLeft: '5%',
                            marginTop: '10%',
                            borderRadius: 8
                        }}
                        src={require('./skills_challenges_media/facebook_worlds_team.jpg')}
                        alt={'Facebook France Hackathon'}
                    />

                </Text>,
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
                description: <Text>
                    For the first time in France, Facebook organized a student engineering hackathon. From thousands of applications, only 15 teams of 4 people were selected.
                    With 2 other students from Epitech and one from Polytechnique, we created EthBooking.
                    <br />
                    EthBooking was a simple platform where anyone could register its hotel and start renting rooms. Payments and reservations were made without any third party
                    involved. And it was all handled by the Ethereum blockchain. We selected this topic because we knew that hotel owners are having a lot of troubles
                    with reservation platforms. This is what caught the eye of our jury and got us the first place and tickets for the World Finals !

                    <img
                        style={{
                            width: '90%',
                            marginLeft: '5%',
                            marginTop: '10%',
                            borderRadius: 8
                        }}
                        src={require('./skills_challenges_media/facebook_paris_victory.jpg')}
                        alt={'Facebook France Hackathon'}
                    />
                </Text>,
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
                description: <Text>
                    This was my first internship and professional experience in IT. 6 months inside Greenbureau, a customer relationship service provider, as
                    a Software Developer. I discovered the world of IT in a real company, their needs, their problems and their victories. This first experience
                    might be what started my entrepreneurial journey, and why I really wanted to start my very own company.
                    </Text>,
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
                description: <Text>
                    I was approached by Advanced Schema for my Blockchain skills. I accepted a role of Blockchain R&D Intern Developer. I learned a lot about
                    project management, software quality assurance and infrastructure. I had two main missions: work on the existing infrastructure and projects and create
                    a working prototype of a Blockchain app using Hyperledger.
                    </Text>,
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
                description: <Text>
                    <br />
                    <img
                        style={{
                            width: '90%',
                            marginLeft: '5%',
                            marginTop: '10%',
                            borderRadius: 8
                        }}
                        src={require('./skills_challenges_media/epitech_tek1.jpg')}
                        alt={'Epitech Tek1'}
                    />

                </Text>,
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
                description: <Text>
                    <br />
                    <img
                        style={{
                            width: '90%',
                            marginLeft: '5%',
                            marginTop: '10%',
                            borderRadius: 8
                        }}
                        src={require('./skills_challenges_media/epitech_eip.png')}
                        alt={'Epitech EIP'}
                    />

                </Text>,
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
