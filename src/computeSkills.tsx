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
                theme: '#277ACC',
                image: 'typescript.png',
                createdBy: 'Microsoft',
            },
            c: {
                name: 'C',
                key: 'c',
                description: 'Just below C++, just above ASM',
                category: 'Programming Languages',
                theme: '#333E90',
                image: 'c.png'
            },
            cpp: {
                name: 'C++',
                key: 'cpp',
                description: 'THE object oriented programming language',
                category: 'Programming Languages',
                theme: '#1E6AA6',
                image: 'cpp.png'
            },
            react: {
                name: 'React',
                key: 'react',
                description: 'Javascript library for building interfaces',
                category: 'Framework & Libraries',

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

                theme: '#000000',
                image: 'unix.png'
            },
            nxdev: {
                name: 'Nx.dev',
                key: 'nxdev',
                description: 'Set of extensible dev tools for monorepos, which helps you develop like Google, Facebook, and Microsoft',
                category: 'Framework & Libraries',

                theme: '#133863',
                image: 'nxdev.png',
                createdBy: 'Ex-Googlers, Ex-Microsofters & Ex-Facebookers',
                usedBy: ['Cisco', 'T-Mobile', 'Microsoft', 'RedHat']
            },
            kubernetes: {
                name: 'Kubernetes',
                key: 'kubernetes',
                description: 'TODO',
                category: 'Infrastructure & Cloud',

                theme: '#ffffff',
                image: 'kubernetes.png',
                createdBy: 'Google',
                light: true,
                usedBy: ['Google', 'Shopify', 'Slack']
            },
            helm: {
                name: 'Helm',
                key: 'helm',
                description: 'TODO',
                category: 'Infrastructure & Cloud',

                theme: '#3130F0',
                image: 'helm.png',
            },
            awseks: {
                name: 'AWS EKS',
                key: 'awseks',
                description: 'TODO',
                category: 'Infrastructure & Cloud',

                light: true,
                theme: '#F5C000',
                image: 'awseks.png',
            },
            awsec2: {
                name: 'AWS EC2',
                key: 'awsec2',
                description: 'TODO',
                category: 'Infrastructure & Cloud',

                light: true,
                theme: '#F5C000',
                image: 'awsec2.png',
            },
            awsroute53: {
                name: 'AWS Route53',
                key: 'awsroute53',
                description: 'TODO',
                category: 'Infrastructure & Cloud',

                light: true,
                theme: '#F5C000',
                image: 'awsroute53.png',
            },
            awsecr: {
                name: 'AWS ECR',
                key: 'awsecr',
                description: 'TODO',
                category: 'Infrastructure & Cloud',

                light: true,
                theme: '#F68536',
                image: 'awsecr.png',
            },
            awslambda: {
                name: 'AWS Lambda',
                key: 'awslambda',
                description: 'TODO',
                category: 'Infrastructure & Cloud',

                light: true,
                theme: '#F5C000',
                image: 'awslambda.png',
            },
            awsauroraserverless: {
                name: 'AWS Aurora Serverless',
                key: 'awsauroraserverless',
                description: 'TODO',
                category: 'Infrastructure & Cloud',

                light: true,
                theme: '#F5C000',
                image: 'awsauroraserverless.png',
            },
            pwa: {
                name: 'PWA',
                key: 'pwa',
                description: 'TODO',
                category: 'Principles',

                light: true,
                theme: '#5BC2FD',
                image: 'pwa.png',
            },
            monorepo: {
                name: 'Monorepo',
                key: 'monorepo',
                description: 'TODO',
                category: 'Principles',

                light: true,
                theme: '#DDC8B0',
                image: 'monorepo.png',
            },
            nestjs: {
                name: 'NestJS',
                key: 'nestjs',
                description: 'TODO',
                category: 'Framework & Libraries',

                theme: '#831730',
                image: 'nestjs.png',
            },
            storybook: {
                name: 'Storybook',
                key: 'storybook',
                description: 'TODO',
                category: 'Framework & Libraries',

                theme: '#A33F62',
                image: 'storybook.png',
            },
            blockchain: {
                name: 'Blockchain',
                key: 'blockchain',
                description: 'TODO',
                category: 'Principles',

                theme: '#857F87',
                image: 'blockchain.png',
            },
            ethereum: {
                name: 'Ethereum',
                key: 'ethereum',
                description: 'TODO',
                category: 'API & Services',

                theme: '#4F527C',
                image: 'ethereum.png',
            },
            segment: {
                name: 'Segment',
                key: 'segment',
                description: 'TODO',
                category: 'API & Services',

                light: true,
                theme: '#ffffff',
                image: 'segment.png',
            },
            stripe: {
                name: 'Stripe',
                key: 'stripe',
                description: 'TODO',
                category: 'API & Services',

                light: true,
                theme: '#ffffff',
                image: 'stripe.png',
            },
            projectmanagement: {
                name: 'Project Management',
                key: 'projectmanagement',
                description: 'TODO',
                category: 'Principles',

                theme: '#565650',
                image: 'projectmanagement.png',
            },
            technicallead: {
                name: 'Technical Lead',
                key: 'technicallead',
                description: 'TODO',
                category: 'Principles',

                light: true,
                theme: '#FCDB66',
                image: 'technicallead.png',
            },
            entrepreneurship: {
                name: 'Entrepreneurship',
                key: 'entrepreneurship',
                description: 'TODO',
                category: 'Principles',

                light: true,
                theme: '#FCDB66',
                image: 'entrepreneurship.png',
            },
            docker: {
                name: 'Docker',
                key: 'docker',
                description: 'TODO',
                category: 'Infrastructure & Cloud',

                theme: '#3096ED',
                image: 'docker.png',
            },
            serverless: {
                name: 'Serverless',
                key: 'serverless',
                description: 'TODO',
                category: 'Framework & Libraries',

                theme: '#222222',
                image: 'serverless.png',
            },
            opengl: {
                name: 'OpenGL',
                key: 'opengl',
                description: 'TODO',
                category: 'Framework & Libraries',

                light: true,
                theme: '#ffffff',
                image: 'opengl.png',
            },
            opencl: {
                name: 'OpenCL',
                key: 'opencl',
                description: 'TODO',
                category: 'Framework & Libraries',

                light: true,
                theme: '#ffffff',
                image: 'opencl.png',
            },
            cuda: {
                name: 'CUDA',
                key: 'cuda',
                description: 'TODO',
                category: 'Framework & Libraries',

                light: true,
                theme: '#ffffff',
                image: 'cuda.png',
            },
            openmp: {
                name: 'OpenMP',
                key: 'openmp',
                description: 'TODO',
                category: 'Framework & Libraries',

                light: true,
                theme: '#ffffff',
                image: 'openmp.png',
            },
            hooks: {
                name: 'React Hooks',
                key: 'hooks',
                description: 'TODO',
                category: 'Framework & Libraries',

                theme: '#0E0E0E',
                image: 'hooks.png',
            },
            redux: {
                name: 'Redux',
                key: 'redux',
                description: 'TODO',
                category: 'Framework & Libraries',

                theme: '#A690C6',
                image: 'redux.png',
            },
            cicd: {
                name: 'CI/CD',
                key: 'cicd',
                description: 'TODO',
                category: 'Principles',

                theme: '#656565',
                image: 'cicd.png',
            },
            multicoreprogramming: {
                name: 'Multicore Programming',
                key: 'multicoreprogramming',
                description: 'TODO',
                category: 'Principles',

                light: true,
                theme: '#FCC000',
                image: 'multicoreprogramming.png',
            },
            p2p: {
                name: 'P2P',
                key: 'p2p',
                description: 'TODO',
                category: 'Systems',

                theme: '#316CEE',
                image: 'p2p.png',
            },
            networking: {
                name: 'Networking',
                key: 'networking',
                description: 'TODO',
                category: 'Systems',

                theme: '#373788',
                image: 'networking.png',
            },
            concurrency: {
                name: 'Concurrency',
                key: 'concurrency',
                description: 'TODO',
                category: 'Systems',

                theme: '#5B5B5B',
                image: 'concurrency.png',
            },
            smartcontracts: {
                name: 'Smart Contracts',
                key: 'smartcontracts',
                description: 'TODO',
                category: 'Principles',

                theme: '#7C674C',
                image: 'smartcontracts.png',
            },
            unittesting: {
                name: 'Unit Testing',
                key: 'unittesting',
                description: 'TODO',
                category: 'Principles',

                theme: '#2B3135',
                image: 'unittesting.png',
            },
            srs: {
                name: 'SRS',
                key: 'srs',
                description: 'TODO',
                category: 'Principles',

                theme: '#811B1F',
                image: 'srs.png',
            },
            sad: {
                name: 'SAD',
                key: 'sad',
                description: 'TODO',
                category: 'Principles',

                theme: '#668F20',
                image: 'sad.png',
            },
            integrationtesting: {
                name: 'Integration Testing',
                key: 'integrationtesting',
                description: 'TODO',
                category: 'Principles',

                theme: '#592314',
                image: 'integrationtesting.png',
            },
            functionaltesting: {
                name: 'Functional Testing',
                key: 'functionaltesting',
                description: 'TODO',
                category: 'Principles',

                theme: '#8D6938',
                image: 'functionaltesting.png',
            },
            featureflags: {
                name: 'Feature Flags',
                key: 'featureflags',
                description: 'TODO',
                category: 'Principles',

                light: true,
                theme: '#E2E2E2',
                image: 'featureflags.png',
            },
            solidity: {
                name: 'Solidity',
                key: 'solidity',
                description: 'TODO',
                category: 'Programming Languages',

                light: true,
                theme: '#E5E5E5',
                image: 'solidity.png',
            },
            sql: {
                name: 'SQL',
                key: 'sql',
                description: 'TODO',
                category: 'Programming Languages',

                theme: '#639CD0',
                image: 'sql.png',
            },
            computerscience: {
                name: 'Computer Science',
                key: 'computerscience',
                description: 'TODO',
                category: 'Principles',

                theme: '#393939',
                image: 'computerscience.png',
            },
            softwareengineering: {
                name: 'Software Engineering',
                key: 'softwareengineering',
                description: 'TODO',
                category: 'Principles',

                light: true,
                theme: '#A2B6C6',
                image: 'softwareengineering.png',
            },
            pedagogy: {
                name: 'Pedagogy',
                key: 'pedagogy',
                description: 'TODO',
                category: 'Principles',

                theme: '#505050',
                image: 'pedagogy.png',
            },
            cassandra: {
                name: 'Cassandra',
                key: 'cassandra',
                description: 'TODO',
                category: 'Infrastructure & Cloud',

                theme: '#ffffff',
                light: true,
                image: 'cassandra.png',
            },
            elasticsearch: {
                name: 'Elasticsearch',
                key: 'elasticsearch',
                description: 'TODO',
                category: 'Infrastructure & Cloud',

                theme: '#A77E24',
                image: 'elasticsearch.png',
            },
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
                    on a secured marketplace, lowering fraud drastically.

                    <br />
                    <br />

                    I'm in charge of all
                    the technical development of Ticket721, its products, infrastructure,
                    tech recruitment and training. <Bold>Follow the link to access the platform !</Bold>
                </Text>,
                start: new Date(Date.parse('01 May 2018')),
                link: 'https://app.ticket721.com',
                theme: '#000000',
                skills: [
                    'typescript',
                    'react',
                    'nestjs',
                    'storybook',
                    'solidity',
                    'sql',
                    'redux',
                    'hooks',

                    'stripe',
                    'ethereum',
                    'segment',

                    'pwa',
                    'monorepo',
                    'blockchain',
                    'cicd',
                    'unittesting',
                    'integrationtesting',
                    'functionaltesting',
                    'featureflags',
                    'smartcontracts',

                    'kubernetes',
                    'docker',
                    'helm',
                    'awseks',
                    'awsec2',
                    'awsroute53',
                    'awsecr',
                    'cassandra',
                    'elasticsearch',

                    'projectmanagement',
                    'technicallead',
                    'entrepreneurship'
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
                    between cloud providers. It is a must use set of tools for all new
                    projects, as it helps developers focus on the product itself.
                    </Text>,
                start: new Date(Date.parse('01 Jul 2020')),
                theme: '#222222',
                link: 'https://www.serverless.com/',
                skills: [
                    'serverless',
                    'awsauroraserverless',
                    'awslambda'
                ]
            },
            {
                name: 'Learning Nx.dev',
                image: 'nxdev.png',
                subtitle: 'Typescript Monorepos tools',
                description: <Text>
                    <Bold>Nx.dev</Bold> is a set of tools (<Bold>CLI, Schematics and Modules</Bold>) that enables a true monorepo experience.
                    Most of the time, JS and TS monorepos only use <Bold>Yarn Workspaces</Bold> or <Bold>Lerna</Bold>. But on the long run,
                    it becomes quite hard to use them (a lot of CI manual tweaks are required, code sharing is configured manually or even impossible to configure, like in CRA).

                    <br />
                    <br />

                    <Bold>Nx.dev</Bold> solves all these issues with <Bold>built-in modification checkers</Bold> (to boost your CI)
                    and <Bold>automatic code sharing</Bold>. A must see for Fullstack Typescript developers
                    </Text>,
                start: new Date(Date.parse('01 Jul 2020')),
                theme: '#133863',
                link: 'https://nx.dev',
                skills: [
                    'typescript',
                    'react',
                    'nxdev',
                    'nestjs',
                    'cicd',
                    'monorepo'
                ]
            },

            // Github
            {
                name: 'erc2280',
                image: 'ethereum.png',
                subtitle: 'An attempt to create an Ethereum ERC',
                description: <Text>
                    At one point in the development of Ticket721, the use of a token to exchange the tickets was mentioned.
                    But in order to do so, we needed a new type of token, with extra methods. In <Bold>Ethereum</Bold>, tokens follow a standard
                    called <Bold>ERC20</Bold>. To exchange any kind of tokens, you need to also have <Bold>Ether</Bold>, the core currency of the blockchain.
                    This is called <Bold>gas</Bold>, the fee for the transactions. It's a real issue when you only want to use your own token
                    (you cannot expect your users to have spare Ether for your app).

                    <br />
                    <br />

                    This is what <Bold>ERC2280</Bold> tried to solve. By extending
                    a bit what <Bold>ERC20</Bold> did, we added new functionalities to delegate transaction authorizations, and allow another entity to broadcast them.
                    This means that it was up to the other user to pay for the gas (this other user would be Ticket721).
                    It allowed users to keep 100% ownership of their account and tokens, but exchange them without paying gas.

                    <br />
                    <br />

                    In the end, a lot of teams also worked on the issue and created all sorts of solutions; mine clearly got deprecated !
                    </Text>,
                start: new Date(Date.parse('05 Sep 2019')),
                end: new Date(Date.parse('15 Mar 2020')),
                link: 'https://github.com/ethereum/EIPs/pull/2280',
                theme: '#4F527C',
                skills: [
                    'ethereum',
                    'blockchain',
                    'solidity',
                    'smartcontracts'
                ]
            },
            {
                name: 'oclbhgs',
                image: 'oclbhgs.png',
                subtitle: 'Galaxy Simulator boosted by the GPU (Concordia project)',
                description: <Text>
                    For a Concordia course (<Bold>COMP426 Multicore Programming <span role='img' aria-label='hearth'>♥️</span></Bold>), we had to create a <Bold>n-body simulator</Bold> boosted by the GPU.
                    The main tool we would be using is <Bold>OpenCL</Bold>. It allowed us to use all our devices (GPU & CPUs) for computing tasks.
                    <br />
                    <br />
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
                skills: [
                    'multicoreprogramming',
                    'opengl',
                    'opencl',
                    'c'
                ]
            },
            {
                name: 'ethvtx',
                image: 'ethvtx.png',
                subtitle: 'Ethereum-ready & framework-agnostic redux store configuration',
                description: <Text>
                    In order to work with <Bold>Ethereum</Bold>, apps need to be connected to nodes. Nodes are what
                    keep the <Bold>Ethereum</Bold> blockchain alive, validate the transactions etc. To connect to these
                    nodes, we have JSON-RPC interfaces and SDKs (<Bold>Web3.js</Bold> is the most used one).

                    <br />
                    <br />

                    Ethvtx is a Redux plugin that would use the <Bold>Web3.js</Bold> SDK to update data in the Redux store. Components
                    would be subscribed to specific data, and the store would update it properly. It added a lot of
                    reactivity to <Bold>Ethereum</Bold> apps. But hooks came out and other teams where on the subject, in the end
                    ethvtx got deprecated as I had no time to keep up with the evolution of <Bold>React</Bold>.
                    </Text>,
                start: new Date(Date.parse('10 Apr 2018')),
                end: new Date(Date.parse('31 Aug 2018')),
                link: 'https://github.com/ticket721/ethvtx',
                theme: '#363636',
                skills: [
                    'typescript',
                    'react',
                    'redux',
                    'ethereum',
                    'blockchain',
                    'solidity',
                    'smartcontracts'
                ]
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
                    how migrations should be made, how rolling out features should be handled and how the best companies are doing it.

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
                skills: [
                    'computerscience',
                    'softwareengineering',
                    'concurrency',
                    'networking',
                    'unittesting',
                    'integrationtesting',
                    'functionaltesting',
                    'featureflags'
                ]
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
                    • <Bold>COMP426 Multicore Programming </Bold>: This amazing course introduces the tools and techniques to properly harvest the computing power of a computer. From CPU
                    to GPU, OpenMP to OpenCL, we ended up creating an n-body simulator powered by the GPU & the CPU !
                    <br />
                    <br />
                    • <Bold>COMP472 Artificial Intelligence </Bold>: The course started wuth a bit of history on AI and how we ended up where we are today. We then explored famous algorithms
                    , used Neural Networks, learned about their different forms, their use cases (mainly with Tensorflow).
                    <br />
                    <br />
                    • <Bold>SOEN341 Software Process </Bold>: This course teaches how to properly gather the requirements for a project and generate the associated documentation that
                    is readable by any actor of the project. We had to create our own project (a library management system) where we had to write and maintain an SRS (Software Requirements Specification)
                    , an SAD (Software Architecture Document) and of course a code base.

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
                skills: [
                    'computerscience',
                    'softwareengineering',
                    'multicoreprogramming',
                    'concurrency',
                    'opencl',
                    'opengl',
                    'cuda',
                    'openmp',
                    'c',
                    'cpp',
                    'srs',
                    'sad',
                    'sql',
                    'typescript'
                ]
            },

            // Hackathons
            {
                name: 'Facebook World Finals',
                image: 'fbhackfinals.png',
                subtitle: 'Hackathon with all world finalists',
                description: <Text>
                    <Bold>After our victory in France</Bold>, we won tickets to represent our country in the <Bold>World Finals</Bold>. The format was the same, 24h coding, day & night, then prototype forum.
                    The jury was mainly composed of Facebook Engineers.
                    <br />
                    <br />
                    For this time, we decided to do something ballsy by presenting a <Bold>100% p2p social network</Bold>. It would connect to other peers and exchange encrypted information about
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
                skills: [
                    'typescript',
                    'blockchain',
                    'ethereum',
                    'smartcontracts',
                    'solidity',
                    'networking',
                    'p2p'
                ]
            },
            {
                name: 'Facebook FR Hackathon',
                image: 'fbhackparis.png',
                subtitle: 'France hackathon, won 1st 🥇 place',
                description: <Text>
                    For the first time in France, <Bold>Facebook</Bold> organized a student engineering hackathon. From thousands of applications, only 15 teams of 4 people were selected.
                    With 2 other students from Epitech and one from Polytechnique, we created <Bold>EthBooking</Bold>.
                    <br />
                    <br />
                    <Bold>EthBooking</Bold> was a simple platform where anyone could register its hotel and start renting rooms. Payments and reservations were made without any third party
                    involved. And it was all handled by the <Bold>Ethereum</Bold> blockchain. We selected this topic because we knew that hotel owners are having a lot of troubles
                    with reservation platforms. This is what caught the eye of our jury and got us the first place and tickets for the <Bold>World Finals</Bold> !

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
                skills: [
                    'typescript',
                    'blockchain',
                    'ethereum',
                    'solidity',
                    'smartcontracts'
                ]
            },

            // Internships
            {
                name: 'Greenbureau',
                image: 'greenbureau.png',
                subtitle: 'Software Developer internship',
                description: <Text>
                    This was my <Bold>first internship</Bold> and <Bold>professional experience</Bold> in IT. 6 months inside Greenbureau, a customer relationship service provider, as
                    a Software Developer. I discovered the world of IT in a real company, their needs, their problems and their victories. This first experience
                    might be what started my entrepreneurial journey, and <Bold>why I really wanted to start my very own company</Bold>.
                    </Text>,
                start: new Date(Date.parse('01 Sep 2016')),
                end: new Date(Date.parse('31 Dec 2016')),
                link: 'https://corp.greenbureau.com/',
                theme: '#5F70FE',
                skills: [
                ]
            },
            {
                name: 'Advanced Schema',
                image: 'advancedschema.png',
                subtitle: 'Blockchain R&D Developer internship',
                description: <Text>
                    I was approached by <Bold>Advanced Schema</Bold> for my <Bold>Blockchain</Bold> skills. I accepted an offer as a <Bold>Blockchain R&D Intern Developer</Bold>. I learned a lot about
                    project management, software quality assurance and infrastructure. I had two main missions:

                    <br />
                    <br />
                    - work on the existing infrastructure and projects and,
                    <br />
                    - create a working prototype of a Blockchain app using Hyperledger.
                    </Text>,
                start: new Date(Date.parse('01 Apr 2018')),
                end: new Date(Date.parse('31 Aug 2018')),
                link: 'https://www.advanced-schema.com/home',
                theme: '#3A3A3A',
                skills: [
                    'blockchain',
                    'smartcontracts',
                    'projectmanagement',
                    'unittesting',
                    'integrationtesting',
                    'docker'
                ]
            },

            // EPITECH
            {
                name: 'Epitech 1st Year',
                image: 'epitech.png',
                subtitle: 'Learning the basics of computer science',
                description: <Text>
                    First year as a computer science student. <Bold>Epitech</Bold> taught me all the basic knowledge required to start software development. The
                    first year is only using the <Bold>C programming language</Bold>, with many projects; rewriting <Bold>our own shell</Bold>, creating a <Bold>raytracing engine</Bold>,
                    creating a <Bold>Wolfenstein 3D clone</Bold> and many more (and of course all in C).
                   <br />
                    <br />
                    The most important thing they taught us is how to learn properly:
                    we understood the power of "Google", and how many resources are available online for us to learn and keep up with the pace of software technology !
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
                    'computerscience',
                    'c',
                    'unix',
                    'sql'
                ]
            },
            {
                name: 'Epitech 2nd Year',
                image: 'epitech.png',
                subtitle: 'Discovering advanced computer science topics',
                description: <Text>
                    This second year focuses a lot more around Software Engineering: <Bold>how to properly think before coding</Bold>. We got an upgrade, we are now using C++,
                    our first Object Oriented Programming language (and the hardest one).

                    <br />
                    <br />
                    This year had a lot more group projects and bigger projects than the first one.
                </Text>,
                start: new Date(Date.parse('01 Sep 2016')),
                end: new Date(Date.parse('02 Aug 2017')),
                link: 'https://epitech.eu',
                skills: [
                    'computerscience',
                    'softwareengineering',
                    'c',
                    'cpp',
                    'unix',
                    'sql',
                    'projectmanagement'
                ],
                theme: '#000000'
            },
            {
                name: 'Epitech 3rd Year',
                image: 'epitech.png',
                subtitle: 'Focusing on team work and larger projects',
                description: <Text>
                    This third year was maily composed of group projects. Still heavily using C++, we had to build a <Bold>VOIP app</Bold>, an <Bold>R-Type clone</Bold> and
                    many other projects that required cooperation <Bold>within the team</Bold>, and sometimes <Bold>with other teams</Bold> aswell. The third year also marks
                    the beginning of the EIP: a 2.5 year project that we will carry until the end of our Epitech journey.
                </Text>,
                start: new Date(Date.parse('01 Sep 2017')),
                end: new Date(Date.parse('31 Aug 2018')),
                link: 'https://epitech.eu',
                skills: [
                    'computerscience',
                    'softwareengineering',
                    'c',
                    'cpp',
                    'unix',
                    'sql',
                    'projectmanagement'
                ],
                theme: '#000000'
            },
            {
                name: 'Epitech 4th Year',
                image: 'epitech.png',
                subtitle: 'Training remote work and discovering Canada',
                description: <Text>
                    The fourth year is only about the EIP. As all students go abroad in another university, we had to adapt and
                    keep working on our EIP even with all the distance between the group members. But the biggest challenge was the university we selected: for me it
                    was <Bold>Concordia University in Montreal</Bold>.
                </Text>,
                start: new Date(Date.parse('01 Sep 2018')),
                end: new Date(Date.parse('27 Jul 2019')),
                link: 'https://epitech.eu',
                skills: [
                    'computerscience',
                    'softwareengineering',
                    'projectmanagement'
                ],
                theme: '#000000'
            },
            {
                name: 'Epitech 5th Year',
                image: 'epitech.png',
                subtitle: 'Finishing the EIP',
                description: <Text>
                    On this fifth and final year, we spent most of our time in Part-Time and Full-Time internships. For me, it's
                    the best solution to work on Ticket721. I spent most of the year working on my project, while Epitech kept checking
                    if everything was happening properly and was helping me when I was in need of advices.
                </Text>,
                start: new Date(Date.parse('28 Aug 2019')),
                end: new Date(Date.parse('29 Sep 2020')),
                link: 'https://epitech.eu',
                skills: [
                    'computerscience',
                    'softwareengineering',
                    'projectmanagement'
                ],
                theme: '#000000'
            },
            {
                name: 'Epitech EIP',
                image: 'epitechxp.png',
                subtitle: 'A two and a half year group project',
                description: <Text>
                    The EIP is a <Bold>2.5 year</Bold> project started in 3rd year. With 8 other Epitech students, we decided to create
                    a smart schedule planner, using prediction algorithms and AI to build the best possible week schedule depending
                    on what you're used to do. We called this project <Bold>Perfect Week</Bold>. And just like every school project, we
                    forgot about it the day after the final delivery.

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
                    'typescript',
                    'cicd',
                    'kubernetes',
                    'projectmanagement',
                    'docker',
                    'sql',
                ],
                theme: '#000000',
            },
            {
                name: 'Teaching Assistant',
                image: 'epitech_astek.png',
                subtitle: 'Helping and grading students on C projects',
                description: <Text>

                    They are called <Bold>Asteks</Bold> ("Assistant Technique" in French), and they are the students selected to
                    help other students on C projects. You can become an Astek on your second year. After a technical
                    interview, only a few students are selected.

                   <br />
                    <br />

                    Our role is simple, they have to work in the school
                    and <Bold>wear a visible red shirt</Bold> so other students can find them easily and know they are here to help.
                    They also have to follow the school schedule for planned <Bold>Follow-Ups</Bold>, <Bold>Kick-Offs</Bold> and <Bold>Deliveries</Bold> that
                    they would have to animate.

                   <br />
                    <br />

                    I enrolled for one year only, and stopped because I wanted to focus on starting my own company. But
                    it was a great human experience.

                </Text>,
                start: new Date(Date.parse('01 Sep 2016')),
                end: new Date(Date.parse('02 Aug 2017')),
                link: 'https://epitech.eu',
                skills: [
                    'c',
                    'pedagogy'
                ],
                theme: '#A61B27',
            },
            {
                name: 'Head of Blockchain Dpt',
                image: 'poc.jpg',
                subtitle: '@ PoC, a student association',
                description: <Text>

                    PoC is a student R&D center. In the hearth of Epitech, students had the opportunity
                    to work on innovative projects and still win credits for the main Epitech curriculum.

                    <br />
                    <br />

                    As I worked a lot on Blockchain topics, I was given the lead on the Blockchain Department when PoC was created.
                    PoC was composed of 5 departments: <Bold>AI</Bold>, <Bold>Security</Bold>, <Bold>Health</Bold>, <Bold>Hardware</Bold> and <Bold>Blockchain</Bold>.
                    My department wasn't the most famous one as the BLockchain topic was quite new compared to what could be done in other departments.

                    <br />
                    <br />

                    Unfortunately, when I left for Canada on my 4th year, the Blockchain department closed as no one was able to keep the projects alive.


                </Text>,
                start: new Date(Date.parse('01 Sep 2017')),
                end: new Date(Date.parse('31 Aug 2018')),
                link: 'https://epitech.eu',
                skills: [
                    'blockchain',
                    'ethereum',
                    'pedagogy',
                    'solidity',
                    'projectmanagement'
                ],
                light: true,
                theme: '#FFFFFF',
            }
        ],
        selectChallenge: () => { },
        selectedChallenge: null,
        selectSkill: () => { },
        selectedSkill: null,
    }
}
