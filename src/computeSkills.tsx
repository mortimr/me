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
                level: 4,
                description: <Text>
                    TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.

                    <br />
                    <br />

                    Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.

                    <br />
                    <br />

                    Writing types can be optional in TypeScript, because type inference allows you to get a lot of power without writing additional code.
                </Text>,
                category: 'Programming Languages',
                theme: '#277ACC',
                image: 'typescript.png',
                createdBy: 'Microsoft',
            },
            javascript: {
                name: 'Javascript',
                key: 'javascript',
                level: 4,
                description: <Text>
                    JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.

                    <br />
                    <br />

                    While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js,
                    Apache CouchDB and Adobe Acrobat.

                    <br />
                    <br />

                    JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative,
                    and declarative (e.g. functional programming) styles. Read more about JavaScript.
                </Text>,
                category: 'Programming Languages',
                theme: '#F8E321',
                image: 'javascript.png',
                createdBy: 'Mozilla'
            },
            nodejs: {
                name: 'Node.js',
                key: 'nodejs',
                level: 4,
                description: <Text>
                    Node.js is an open-source, cross-platform, JavaScript runtime environment (Framework) that executes JavaScript code 
                    outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side 
                    scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. 
                    <br/>
                    <br/>
                    Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single 
                    programming language, rather than different languages for server- and client-side scripts.
                </Text>,
                createdBy: 'OpenJS Foundation',
                category: 'Framework & Libraries',
                theme: '#4E6E25',
                image: 'nodejs.png',
            },
            c: {
                name: 'C',
                key: 'c',
                level: 3,
                description: <Text>
                    C is a general-purpose, procedural computer programming language supporting structured programming, lexical 
                    variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently 
                    to typical machine instructions. It has found lasting use in applications previously coded in assembly language. 
                    Such applications include operating systems and various application software for computer architectures that range 
                    from supercomputers to PLCs and embedded systems.
                </Text>,
                category: 'Programming Languages',
                theme: '#333E90',
                image: 'c.png'
            },
            cpp: {
                name: 'C++',
                key: 'cpp',
                level: 3,
                description: <Text>
                    C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, 
                    or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, 
                    and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a 
                    compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, 
                    and IBM, so it is available on many platforms.[9]
                </Text>,
                category: 'Programming Languages',
                theme: '#1E6AA6',
                image: 'cpp.png'
            },
            react: {
                name: 'React',
                key: 'react',
                level: 4,
                description: <Text>
                    React makes it painless to create interactive UIs. Design simple views for each state in your application, 
                    and React will efficiently update and render just the right components when your data changes.

                    Declarative views make your code more predictable and easier to debug.
                </Text>,
                category: 'Framework & Libraries',

                theme: '#367586',
                image: 'react.png',
                createdBy: 'Facebook',
                usedBy: ['Facebook', 'Airbnb', 'Uber', 'Netflix', 'Instagram']
            },
            unix: {
                name: 'UNIX',
                key: 'unix',
                level: 3,
                description: <Text>
                    Unix is a family of multitasking, multiuser computer operating systems that derive from the original AT&T Unix, development starting in the 1970s.
                </Text>,
                category: 'Systems',

                theme: '#000000',
                image: 'unix.png'
            },
            nxdev: {
                name: 'Nx.dev',
                key: 'nxdev',
                level: 2,
                description: <Text>
                    Nx is a set of extensible dev tools for monorepos, which helps you develop like Google, Facebook, and Microsoft.
                    It has first-class support for many frontend and backend technologies, so its documentation comes in multiple flavours.
                </Text>,
                category: 'Framework & Libraries',

                theme: '#133863',
                image: 'nxdev.png',
                createdBy: 'Ex-Googlers, Ex-Microsofters & Ex-Facebookers',
                usedBy: ['Cisco', 'T-Mobile', 'Microsoft', 'RedHat']
            },
            kubernetes: {
                name: 'Kubernetes',
                key: 'kubernetes',
                level: 4,
                description: <Text>
                    Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications

                    <br/>
                    <br/>

                    It groups containers that make up an application into logical units for easy management and discovery. Kubernetes 
                    builds upon 15 years of experience of running production workloads at Google, combined with best-of-breed ideas and practices from the community.

                </Text>,
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
                level: 4,
                description: <Text>
                    Helm helps you manage Kubernetes applications — Helm Charts help you define, install, and upgrade even the most complex Kubernetes application.

                    Charts are easy to create, version, share, and publish.
                </Text>,
                category: 'Infrastructure & Cloud',

                theme: '#3130F0',
                image: 'helm.png',
            },
            awseks: {
                name: 'AWS EKS',
                key: 'awseks',
                level: 4,
                description: <Text>
                    Amazon Elastic Kubernetes Service is a fully managed Kubernetes service. Customers such as Intel, 
                    Snap, Intuit, GoDaddy, and Autodesk trust EKS to run their most sensitive and mission critical applications 
                    because of its security, reliability, and scalability.

                    <br/>
                    <br/>

                    EKS is the best place to run Kubernetes for several reasons. First, you can choose to run your EKS clusters using 
                    AWS Fargate, which is serverless compute for containers. Fargate removes the need to provision and manage servers, 
                    lets you specify and pay for resources per application, and improves security through application isolation by design. 
                    Second, EKS is deeply integrated with services such as Amazon CloudWatch, Auto Scaling Groups, AWS Identity and Access 
                    Management (IAM), and Amazon Virtual Private Cloud (VPC), providing you a seamless experience to monitor, scale, and 
                    load-balance your applications. Third, EKS integrates with AWS App Mesh and provides a Kubernetes native experience to 
                    consume service mesh features and bring rich observability, traffic controls and security features to applications. Additionally, 
                    EKS provides a scalable and highly-available control plane that runs across multiple availability zones to eliminate a single point of failure.
                </Text>,
                category: 'Infrastructure & Cloud',

                light: true,
                theme: '#F5C000',
                image: 'awseks.png',
            },
            awsec2: {
                name: 'AWS EC2',
                key: 'awsec2',
                level: 4,
                description: <Text>
                    Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is 
                    designed to make web-scale cloud computing easier for developers. Amazon EC2’s simple web service interface allows you to obtain and 
                    configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon’s 
                    proven computing environment.
                </Text>,
                category: 'Infrastructure & Cloud',

                light: true,
                theme: '#F5C000',
                image: 'awsec2.png',
            },
            awsroute53: {
                name: 'AWS Route53',
                key: 'awsroute53',
                level: 4,
                description: <Text>
                    Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give 
                    developers and businesses an extremely reliable and cost effective way to route end users to Internet applications by 
                    translating names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each 
                    \other. Amazon Route 53 is fully compliant with IPv6 as well.

                    <br/>
                    <br/>

                    Amazon Route 53 effectively connects user requests to infrastructure running in AWS – such as Amazon EC2 instances, 
                    Elastic Load Balancing load balancers, or Amazon S3 buckets – and can also be used to route users to infrastructure outside 
                    of AWS. You can use Amazon Route 53 to configure DNS health checks to route traffic to healthy endpoints or to independently 
                    monitor the health of your application and its endpoints. Amazon Route 53 Traffic Flow makes it easy for you to manage traffic 
                    globally through a variety of routing types, including Latency Based Routing, Geo DNS, Geoproximity, and Weighted Round Robin—all 
                    of which can be combined with DNS Failover in order to enable a variety of low-latency, fault-tolerant architectures. Using Amazon 
                    Route 53 Traffic Flow’s simple visual editor, you can easily manage how your end-users are routed to your application’s endpoints—whether 
                    in a single AWS region or distributed around the globe. Amazon Route 53 also offers Domain Name Registration – you can purchase and manage 
                    domain names such as example.com and Amazon Route 53 will automatically configure DNS settings for your domains.
                </Text>,
                category: 'Infrastructure & Cloud',

                light: true,
                theme: '#F5C000',
                image: 'awsroute53.png',
            },
            awsecr: {
                name: 'AWS ECR',
                key: 'awsecr',
                level: 4,
                description: <Text>
                    Amazon Elastic Container Registry (ECR) is a fully-managed Docker container registry that makes it easy for developers to store, manage, 
                    and deploy Docker container images. Amazon ECR is integrated with Amazon Elastic Container Service (ECS), simplifying your development to 
                    production workflow. Amazon ECR eliminates the need to operate your own container repositories or worry about scaling the underlying infrastructure. 
                    Amazon ECR hosts your images in a highly available and scalable architecture, allowing you to reliably deploy containers for your applications. 
                    Integration with AWS Identity and Access Management (IAM) provides resource-level control of each repository. With Amazon ECR, there are no upfront 
                    fees or commitments. You pay only for the amount of data you store in your repositories and data transferred to the Internet.
                </Text>,
                category: 'Infrastructure & Cloud',

                light: true,
                theme: '#F68536',
                image: 'awsecr.png',
            },
            awslambda: {
                name: 'AWS Lambda',
                key: 'awslambda',
                level: 2,
                description: <Text>
                    AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume.

                    <br/>
                    <br/>

                    With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. 
                    Just upload your code and Lambda takes care of everything required to run and scale your code with high availability. 
                    You can set up your code to automatically trigger from other AWS services or call it directly from any web or mobile app.
                </Text>,
                category: 'Infrastructure & Cloud',

                light: true,
                theme: '#F5C000',
                image: 'awslambda.png',
            },
            awsauroraserverless: {
                name: 'AWS Aurora Serverless',
                key: 'awsauroraserverless',
                level: 2,
                description: <Text>
                    Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora (MySQL-compatible and 
                    PostgreSQL-compatible editions), where the database will automatically start up, shut down, and scale capacity 
                    up or down based on your application's needs. It enables you to run your database in the cloud without managing 
                    any database instances. It's a simple, cost-effective option for infrequent, intermittent, or unpredictable workloads.

                    <br/>
                    <br/>

                    Manually managing database capacity can take up valuable time and can lead to inefficient use of database resources. 
                    With Aurora Serverless, you simply create a database endpoint, optionally specify the desired database capacity range, 
                    and connect your applications. You pay on a per-second basis for the database capacity you use when the database is active, 
                    and migrate between standard and serverless configurations with a few clicks in the Amazon RDS Management Console.
                </Text>,
                category: 'Infrastructure & Cloud',

                light: true,
                theme: '#F5C000',
                image: 'awsauroraserverless.png',
            },
            pwa: {
                name: 'PWA',
                key: 'pwa',
                level: 4,
                description: <Text>
                    A progressive web application (PWA) is a type of application software delivered through the web, built using common web 
                    technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant 
                    browser. Functionality includes working offline, push notifications, and device hardware access, enabling creating user 
                    experiences similar to native applications on desktop and mobile devices. Since a progressive web app is a type of webpage 
                    or website known as a web application, there is no requirement for developers or users to install the web apps via digital 
                    distribution systems like Apple App Store or Google Play.
                </Text>,
                category: 'Principles',

                light: true,
                theme: '#5BC2FD',
                image: 'pwa.png',
            },
            monorepo: {
                name: 'Monorepo',
                key: 'monorepo',
                level: 4,
                description: <Text>
                    In revision control systems, a monorepo is a software development strategy where code for many projects is stored 
                    in the same repository. As of 2017 some forms of this software engineering practice were over a decade old, but the 
                    general concept had only recently been named. Many attempts have been made to differentiate between monolithic applications 
                    and other, newer forms of monorepos.
                    <br/>
                    <br/>
                    Google, Facebook, Microsoft, Uber, Airbnb and Twitter all employ very large monorepos with varying strategies to scale 
                    build systems and version control software with a large volume of code and daily changes.
                </Text>,
                category: 'Principles',

                light: true,
                theme: '#DDC8B0',
                image: 'monorepo.png',
            },
            nestjs: {
                name: 'NestJS',
                key: 'nestjs',
                level: 4,
                description: <Text>
                    NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, 
                    is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements 
                    of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).
                    <br/>
                    <br/>

                    Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!
                    <br/>
                    <br/>

                    Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. 
                    This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform.
                </Text>,
                category: 'Framework & Libraries',

                theme: '#831730',
                image: 'nestjs.png',
            },
            storybook: {
                name: 'Storybook',
                key: 'storybook',
                level: 4,
                description: <Text>
                    Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at 
                    a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your 
                    application.
                </Text>,
                category: 'Framework & Libraries',

                theme: '#A33F62',
                image: 'storybook.png',
            },
            blockchain: {
                name: 'Blockchain',
                key: 'blockchain',
                level: 4,
                description: <Text>
                    A blockchain is a growing list of records, called blocks, that are linked using cryptography. Each block contains a cryptographic hash of the p
                    revious block, a timestamp, and transaction data (generally represented as a Merkle tree).
                    <br/>
                    <br/>

                    By design, a blockchain is resistant to modification of the data. It is "an open, distributed ledger that can record transactions between two parties 
                    efficiently and in a verifiable and permanent way". For use as a distributed ledger, a blockchain is typically managed by a peer-to-peer network collectively 
                    adhering to a protocol for inter-node communication and validating new blocks. Once recorded, the data in any given block cannot be altered retroactively 
                    without alteration of all subsequent blocks, which requires consensus of the network majority. Although blockchain records are not unalterable, blockchains 
                    may be considered secure by design and exemplify a distributed computing system with high Byzantine fault tolerance. Decentralized consensus has therefore 
                    been claimed with a blockchain.
                </Text>,
                category: 'Principles',

                theme: '#857F87',
                image: 'blockchain.png',
            },
            ethereum: {
                name: 'Ethereum',
                key: 'ethereum',
                level: 4,
                description: <Text>
                    Ethereum is a decentralized open source blockchain featuring smart contract functionality. Ether is the cryptocurrency generated by 
                    Ethereum miners as a reward for computations performed to secure the blockchain. Ethereum serves as the platform for over 260,000 different 
                    cryptocurrencies, including 47 of the top 100 cryptocurrencies by market capitalization.
                    <br/>
                    <br/>

                    Ethereum provides a decentralized virtual machine, the Ethereum Virtual Machine (EVM), which can execute scripts using an international network 
                    of public nodes. The virtual machine's instruction set, in contrast to others like Bitcoin Script, is Turing-complete. "Gas", an internal 
                    transaction pricing mechanism, is used to mitigate spam and allocate resources on the network.
                </Text>,
                category: 'API & Services',

                theme: '#4F527C',
                image: 'ethereum.png',
            },
            segment: {
                name: 'Segment',
                key: 'segment',
                level: 2,
                description: <Text>
                    With Segment, you can collect, transform, send, and archive your first-party customer data. We simplify the process of collecting data and 
                    hooking up new tools, allowing you to spend more time using your data, and less time trying to collect it. You can use Segment to track events 
                    that happen when a user interacts with the interfaces. “Interfaces” is our generic word for any digital properties you own: your website, mobile 
                    apps, and processes that run on a server or OTT device.

                    When you capture interaction data in Segment, you can send it (often in real-time) to your favorite tools marketing, product, and analytics tools, as well as to 
                    data warehouses. In most cases, you won’t even need to touch your tracking code to connect new tools.
                </Text>,
                category: 'API & Services',

                light: true,
                theme: '#ffffff',
                image: 'segment.png',
            },
            stripe: {
                name: 'Stripe',
                key: 'stripe',
                level: 4,
                description: <Text>
                    Stripe is an American financial services and software as a service (SaaS) company headquartered in San Francisco, California, 
                    United States. The company primarily offers payment processing software and application programming interfaces (APIs) 
                    for e-commerce websites and mobile applications.
                </Text>,
                category: 'API & Services',

                light: true,
                theme: '#ffffff',
                image: 'stripe.png',
            },
            projectmanagement: {
                name: 'Project Management',
                key: 'projectmanagement',
                level: 4,
                description: <Text>
                    Project management is the process of leading the work of a team to achieve goals and meet success criteria at a specified time. 
                    The primary challenge of project management is to achieve all of the project goals within the given constraints. 
                    This information is usually described in project documentation, created at the beginning of the development process. 
                    The primary constraints are scope, time, quality and budget. The secondary challenge is to optimize the allocation of 
                    necessary inputs and apply them to meet pre-defined objectives.
                </Text>,
                category: 'Principles',

                theme: '#565650',
                image: 'projectmanagement.png',
            },
            technicallead: {
                name: 'Technical Lead',
                key: 'technicallead',
                level: 3,
                description: <Text>
                    Technical Lead as the name states is solely responsible for leading a development team. The task of Technical Leader 
                    is not easy. They have to lead a team. Technical Lead is the one who actually creates a technical vision in order to 
                    turn it into reality with the help of the team. Technical Lead at times also has to take up the role of Software Architect, 
                    Team Lead or Software Engineer Manager. Along with all this Technical Lead also have to maintain the relation with everyone on board.
                </Text>,
                category: 'Principles',

                light: true,
                theme: '#FCDB66',
                image: 'technicallead.png',
            },
            entrepreneurship: {
                name: 'Entrepreneurship',
                key: 'entrepreneurship',
                level: 4,
                description: <Text>
                    Entrepreneurship is the creation or extraction of value. With this definition, entrepreneurship is viewed as change, which may 
                    include other values than simply economic ones.
                    <br/>
                    <br/>

                    More narrow definitions have described entrepreneurship as the process of designing, launching and running a new business, which i
                    s often initially a small business, or as the "capacity and willingness to develop, organize and manage a business venture along with any of 
                    its risks to make a profit."
                    
                </Text>,
                category: 'Principles',

                light: true,
                theme: '#FCDB66',
                image: 'entrepreneurship.png',
            },
            docker: {
                name: 'Docker',
                key: 'docker',
                level: 4,
                description: <Text>
                    Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.
                    Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each 
                    other through well-defined channels. All containers are run by a single operating system kernel and therefore use fewer resources than virtual machines.

                    <br/>
                    <br/>
                    The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first started in 2013 and is developed by Docker, Inc.
                </Text>,
                category: 'Infrastructure & Cloud',

                theme: '#3096ED',
                image: 'docker.png',
            },
            serverless: {
                name: 'Serverless',
                key: 'serverless',
                level: 2,
                description: <Text>
                    The Serverless Framework is a free and open-source web framework written using Node.js. Serverless is the 
                    first framework developed for building applications on AWS Lambda, a serverless computing platform provided by 
                    Amazon as a part of Amazon Web Services. 

                    <br/>
                    <br/>
                    
                    Currently, applications developed with Serverless can be deployed to other 
                    function as a service providers, including Microsoft Azure with Azure Functions, IBM Bluemix with IBM Cloud Functions 
                    based on Apache OpenWhisk, Google Cloud using Google Cloud Functions, Oracle Cloud using Oracle Fn, Kubeless based 
                    on Kubernetes, Spotinst and Webtask by Auth0.
                </Text>,
                category: 'Framework & Libraries',

                theme: '#222222',
                image: 'serverless.png',
            },
            opencl: {
                name: 'OpenCL',
                key: 'opencl',
                level: 3,
                description: <Text>
                    OpenCL (Open Computing Language) is a framework for writing programs that execute across heterogeneous platforms consisting of central 
                    processing units (CPUs), graphics processing units (GPUs), digital signal processors (DSPs), field-programmable gate arrays (FPGAs) and 
                    other processors or hardware accelerators. OpenCL specifies programming languages (based on C99 and C++11) for programming these devices 
                    and application programming interfaces (APIs) to control the platform and execute programs on the compute devices. OpenCL provides a 
                    standard interface for parallel computing using task- and data-based parallelism.
                </Text>,
                category: 'Framework & Libraries',

                light: true,
                theme: '#ffffff',
                image: 'opencl.png',
            },
            cuda: {
                name: 'CUDA',
                key: 'cuda',
                level: 3,
                description: <Text>
                    CUDA (Compute Unified Device Architecture) is a parallel computing platform and application programming 
                    interface (API) model created by Nvidia. It allows software developers and software engineers to use a 
                    CUDA-enabled graphics processing unit (GPU) for general purpose processing – an approach termed GPGPU 
                    (General-Purpose computing on Graphics Processing Units). The CUDA platform is a software layer that 
                    gives direct access to the GPU's virtual instruction set and parallel computational elements, for the 
                    execution of compute kernels.

                    <br/>
                    <br/>

                    The CUDA platform is designed to work with programming languages such as C, C++, and Fortran. This accessibility 
                    makes it easier for specialists in parallel programming to use GPU resources, in contrast to prior APIs like Direct3D 
                    and OpenGL, which required advanced skills in graphics programming. CUDA-powered GPUs also support programming 
                    frameworks such as OpenACC and OpenCL; and HIP by compiling such code to CUDA. When CUDA was first introduced by Nvidia, 
                    the name was an acronym for Compute Unified Device Architecture, but Nvidia subsequently dropped the common use of the acronym.
                </Text>,
                category: 'Framework & Libraries',

                light: true,
                theme: '#ffffff',
                image: 'cuda.png',
            },
            openmp: {
                name: 'OpenMP',
                key: 'openmp',
                level: 3,
                description: <Text>
                    The application programming interface (API) OpenMP (Open Multi-Processing) supports multi-platform shared-memory multiprocessing programming 
                    in C, C++, and Fortran, on many platforms, instruction-set architectures and operating systems, including Solaris, AIX, HP-UX, Linux, macOS, 
                    and Windows. It consists of a set of compiler directives, library routines, and environment variables that influence run-time behavior.

                    <br/>
                    <br/>

                    OpenMP is managed by the nonprofit technology consortium OpenMP Architecture Review Board (or OpenMP ARB), jointly defined by a group of 
                    major computer hardware and software vendors, including Arm, AMD, IBM, Intel, Cray, HP, Fujitsu, Nvidia, NEC, Red Hat, Texas Instruments, 
                    Oracle Corporation, and more.

                    <br/>
                    <br/>

                    OpenMP uses a portable, scalable model that gives programmers a simple and flexible interface for developing parallel applications for 
                    platforms ranging from the standard desktop computer to the supercomputer.
                </Text>,
                category: 'Framework & Libraries',

                light: true,
                theme: '#ffffff',
                image: 'openmp.png',
            },
            hooks: {
                name: 'React Hooks',
                key: 'hooks',
                level: 4,
                description: <Text>
                    Hooks are functions that let developers "hook into" React state and lifecycle features from function components. 
                    They make codes readable and easily understandable. Hooks don’t work inside classes — they let you use React without classes.

                    <br/>
                    <br/>

                    React provides a few built-in Hooks like useState, useContext, useReducer and useEffect to name a few. 
                    They are all stated in the Hooks API Reference. useState and useEffect, which are the most used, are for controlling 
                    states and side effects respectively in React Components.
                </Text>,
                category: 'Framework & Libraries',

                theme: '#0E0E0E',
                image: 'hooks.png',
            },
            redux: {
                name: 'Redux',
                key: 'redux',
                level: 4,
                description: <Text>
                    Redux is an open-source JavaScript library for managing application state. 
                    It is most commonly used with libraries such as React or Angular for building user interfaces. 
                    Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.
                </Text>,
                category: 'Framework & Libraries',

                theme: '#A690C6',
                image: 'redux.png',
            },
            cicd: {
                name: 'CI/CD',
                key: 'cicd',
                level: 4,
                description: <Text>
                    In software engineering, CI/CD or CICD generally refers to the combined practices of continuous 
                    integration and either continuous delivery or continuous deployment.

                    <br/>
                    <br/>

                    CI/CD bridges the gaps between development and operation activities and teams by enforcing automation in building, 
                    testing and deployment of applications. Modern day DevOps practices involve continuous development, continuous testing, 
                    continuous integration, continuous deployment and continuous monitoring of software applications throughout its development 
                    life cycle. The CI/CD practice or CI/CD pipeline forms the backbone of modern day DevOps operations.
                </Text>,
                category: 'Principles',

                theme: '#656565',
                image: 'cicd.png',
            },
            multicoreprogramming: {
                name: 'Multicore Programming',
                key: 'multicoreprogramming',
                level: 3,
                description: <Text>
                    Multicore programming helps you create concurrent systems for deployment on multicore processor and multiprocessor systems. 
                    A multicore processor system is a single processor with multiple execution cores in one chip. By contrast, a multiprocessor 
                    system has multiple processors on the motherboard or chip. A multiprocessor system might include a Field-Programmable 
                    Gate Array (FPGA). An FPGA is an integrated circuit containing an array of programmable logic blocks and a hierarchy of 
                    reconfigurable interconnects. A processing node processes input data to produce outputs. It can be a processor in a multicore 
                    or multiprocessor system, or an FPGA.
                </Text>,
                category: 'Principles',

                light: true,
                theme: '#FCC000',
                image: 'multicoreprogramming.png',
            },
            p2p: {
                name: 'P2P',
                key: 'p2p',
                level: 3,
                description: <Text>
                    Peer-to-peer (P2P) computing or networking is a distributed application architecture that partitions tasks or workloads between peers. 
                    Peers are equally privileged, equipotent participants in the application. They are said to form a peer-to-peer network of nodes.

                    <br/>
                    <br/>

                    Peers make a portion of their resources, such as processing power, disk storage or network bandwidth, directly available to other network 
                    participants, without the need for central coordination by servers or stable hosts. Peers are both suppliers and consumers of resources, 
                    in contrast to the traditional client-server model in which the consumption and supply of resources is divided. Emerging collaborative P2P systems 
                    are going beyond the era of peers doing similar things while sharing resources, and are looking for diverse peers that can bring in unique resources 
                    and capabilities to a virtual community thereby empowering it to engage in greater tasks beyond those that can be accomplished by individual peers, 
                    yet that are beneficial to all the peers.

                </Text>,
                category: 'Systems',

                theme: '#316CEE',
                image: 'p2p.png',
            },
            networking: {
                name: 'Networking',
                key: 'networking',
                level: 3,
                description: <Text>
                    A computer network is a group of computers that use a set of common communication protocols over digital interconnections for the purpose of 
                    sharing resources located on or provided by the network nodes. The interconnections between nodes are formed from a broad spectrum of telecommunication 
                    network technologies, based on physically wired, optical, and wireless radio-frequency methods that may be arranged in a variety of network topologies.
                </Text>,
                category: 'Systems',

                theme: '#373788',
                image: 'networking.png',
            },
            concurrency: {
                name: 'Concurrency',
                key: 'concurrency',
                level: 3,
                description: <Text>
                    In computer science, concurrency is the ability of different parts or units of a program, algorithm, 
                    or problem to be executed out-of-order or in partial order, without affecting the final outcome. This 
                    allows for parallel execution of the concurrent units, which can significantly improve overall speed of the 
                    execution in multi-processor and multi-core systems. In more technical terms, concurrency refers to the decomposability 
                    property of a program, algorithm, or problem into order-independent or partially-ordered components or units.
                </Text>,
                category: 'Systems',

                theme: '#5B5B5B',
                image: 'concurrency.png',
            },
            smartcontracts: {
                name: 'Smart Contracts',
                key: 'smartcontracts',
                level: 4,
                description: <Text>
                    A smart contract is a computer program or a transaction protocol which is intended to automatically execute, 
                    control or document legally relevant events and actions according to the terms of a contract or an agreement.
                    The objectives of smart contracts are the reduction of need in trusted intermediators, arbitrations and
                    enforcement costs, fraud losses, as well as the reduction of malicious and accidental exceptions.

                    <br/>
                    <br/>

                    Vending machines are mentioned as the oldest piece of technology equivalent to smart contract implementation.
                    2014's white paper about the cryptocurrency Ethereum[6] describes the Bitcoin protocol as a weak version 
                    of the smart contract concept as defined by computer scientist, lawyer and cryptographer Nick Szabo. 
                    Since Ethereum, various cryptocurrencies support scripting languages which allow for more advanced smart contracts between untrusted parties.
                </Text>,
                category: 'Principles',

                theme: '#7C674C',
                image: 'smartcontracts.png',
            },
            unittesting: {
                name: 'Unit Testing',
                key: 'unittesting',
                level: 4,
                description: <Text>
                    In computer programming, unit testing is a software testing method by which individual units of source code—sets 
                    of one or more computer program modules together with associated control data, usage procedures, and operating 
                    procedures—are tested to determine whether they are fit for use.
                </Text>,
                category: 'Principles',

                theme: '#2B3135',
                image: 'unittesting.png',
            },
            srs: {
                name: 'SRS',
                key: 'srs',
                level: 3,
                description: <Text>
                    A software requirements specification (SRS) is a description of a software system to be developed. 
                    It is modeled after business requirements specification (CONOPS), also known as a stakeholder requirements 
                    specification. The software requirements specification lays out functional and non-functional 
                    requirements, and it may include a set of use cases that describe user interactions that the software must provide to the user for perfect interaction.

                    <br/>
                    <br/>

                    Software requirements specification establishes the basis for an agreement between customers and contractors or 
                    suppliers on how the software product should function (in a market-driven project, these roles may be played by 
                    the marketing and development divisions). Software requirements specification is a rigorous assessment of requirements 
                    before the more specific system design stages, and its goal is to reduce later redesign. It should also provide a realistic basis 
                    for estimating product costs, risks, and schedules. Used appropriately, software requirements specifications can help prevent software project failure.

                    <br/>
                    <br/>

                    The software requirements specification document lists sufficient and necessary requirements for the project development. 
                    To derive the requirements, the developer needs to have clear and thorough understanding of the products under development. 
                    This is achieved through detailed and continuous communications with the project team and customer throughout the software development process.
                </Text>,
                category: 'Principles',

                theme: '#811B1F',
                image: 'srs.png',
            },
            sad: {
                name: 'SAD',
                key: 'sad',
                level: 3,
                description: <Text>
                    The software architecture document provides a comprehensive overview of the architecture of the software system. It serves as a 
                    communication medium between the software architect and other project team members regarding architecturally significant decisions which 
                    have been made on the project.
                </Text>,
                category: 'Principles',

                theme: '#668F20',
                image: 'sad.png',
            },
            integrationtesting: {
                name: 'Integration Testing',
                key: 'integrationtesting',
                level: 4,
                description: <Text>
                    Integration testing (sometimes called integration and testing, abbreviated I&T) is the phase in software testing in which individual 
                    software modules are combined and tested as a group. Integration testing is conducted to evaluate the compliance of a system or component 
                    with specified functional requirements. It occurs after unit testing and before validation testing. Integration testing takes as its 
                    input modules that have been unit tested, groups them in larger aggregates, applies tests defined in an integration test plan to those aggregates, 
                    and delivers as its output the integrated system ready for system testing.
                </Text>,
                category: 'Principles',

                theme: '#592314',
                image: 'integrationtesting.png',
            },
            functionaltesting: {
                name: 'Functional Testing',
                key: 'functionaltesting',
                level: 4,
                description: <Text>
                    Functional testing is a quality assurance (QA) process and a type of black-box testing that bases its test cases on the specifications 
                    of the software component under test. Functions are tested by feeding them input and examining the output, and internal program structure 
                    is rarely considered (unlike white-box testing). Functional testing is conducted to evaluate the compliance of a system or component 
                    with specified functional requirements. Functional testing usually describes what the system does.
                </Text>,
                category: 'Principles',

                theme: '#8D6938',
                image: 'functionaltesting.png',
            },
            featureflags: {
                name: 'Feature Flags',
                key: 'featureflags',
                level: 3,
                description: <Text>
                    A feature toggle (also feature switch, feature flag, feature flipper, conditional feature, etc.) is a technique in software 
                    development that attempts to provide an alternative to maintaining multiple branches in source code (known as feature branches), 
                    such that a software feature can be tested even before it is completed and ready for release. Feature toggle is used to hide, enable 
                    or disable the feature during runtime. For example, during the development process, a developer can enable the feature for testing 
                    and disable it for other users.In this way, feature flags can be used to implement targeted rollouts of features to specific subsets of users, 
                    a practice known as feature gating.

                    <br/>
                    <br/>

                    Continuous release and continuous deployment provide developers with rapid feedback about their coding. This requires the integration of 
                    their code changes as early as possible. Feature branches introduce a bypass to this process. Feature toggles are an important technique 
                    used for the implementation of continuous delivery.

                    <br/>
                    <br/>

                    The technique allows developers to release a version of a product that has unfinished features. These unfinished features are hidden (toggled) 
                    so they do not appear in the user interface. This allows many small incremental versions of software to be delivered without the cost of constant 
                    branching and merging. Feature toggles may allow shorter software integration cycles. A team working on a project can use feature toggle to speed 
                    up the process of development, that can include the incomplete code as well.
                </Text>,
                category: 'Principles',

                light: true,
                theme: '#E2E2E2',
                image: 'featureflags.png',
            },
            solidity: {
                name: 'Solidity',
                key: 'solidity',
                level: 4,
                description: <Text>Coming soon ...</Text>,
                category: 'Programming Languages',

                light: true,
                theme: '#E5E5E5',
                image: 'solidity.png',
            },
            sql: {
                name: 'SQL',
                key: 'sql',
                level: 3,
                description: <Text>Coming soon ...</Text>,
                category: 'Programming Languages',

                theme: '#639CD0',
                image: 'sql.png',
            },
            computerscience: {
                name: 'Computer Science',
                key: 'computerscience',
                level: 4,
                description: <Text>Coming soon ...</Text>,
                category: 'Principles',

                theme: '#393939',
                image: 'computerscience.png',
            },
            softwareengineering: {
                name: 'Software Engineering',
                key: 'softwareengineering',
                level: 4,
                description: <Text>Coming soon ...</Text>,
                category: 'Principles',

                light: true,
                theme: '#A2B6C6',
                image: 'softwareengineering.png',
            },
            pedagogy: {
                name: 'Pedagogy',
                key: 'pedagogy',
                level: 3,
                description: <Text>Coming soon ...</Text>,
                category: 'Principles',

                theme: '#505050',
                image: 'pedagogy.png',
            },
            cassandra: {
                name: 'Cassandra',
                key: 'cassandra',
                level: 3,
                description: <Text>Coming soon ...</Text>,
                category: 'Infrastructure & Cloud',

                theme: '#ffffff',
                light: true,
                image: 'cassandra.png',
            },
            elasticsearch: {
                name: 'Elasticsearch',
                key: 'elasticsearch',
                level: 3,
                description: <Text>Coming soon ...</Text>,
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
                    'javascript',
                    'nodejs',
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
                    'javascript',
                    'nodejs',
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
                    'javascript',
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
                    'typescript',
                    'javascript',
                    'nodejs'
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
                    'javascript',
                    'nodejs',
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
                    'javascript',
                    'nodejs',
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
                    'javascript',
                    'nodejs',
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

                    I enrolled for one year only, and stopped because I wanted to focus on starting my own company. But
                    it was a great human experience.

                   <br />
                    <br />

                    Our role was simple, we had to work in the school
                    and <Bold>wear a visible red shirt</Bold> so other students can find us easily and know we are here to help.
                    We also had to follow the school schedule for planned <Bold>Follow-Ups</Bold>, <Bold>Kick-Offs</Bold> and <Bold>Deliveries</Bold> that
                    we needed to manage.

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
