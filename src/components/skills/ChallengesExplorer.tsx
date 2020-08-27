import React, { useState, useContext } from "react"
import { styled } from "../../styled"
import { motion, AnimatePresence } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { SkillsContext, Challenge, Skill } from './context';
import { ReactComponent as Close } from './close.svg';
const MediaQuery = require('react-responsive').default;
const useMediaQuery = require('react-responsive').useMediaQuery;


export interface SkillsExplorerProps {

}

const ChallengesSectionTitle = styled.h3`
    margin: 0;
    text-transform: uppercase;
    opacity: 0.7;
    margin-top: 12px;
`;

const ChallengeCardContainer = styled(motion.div)`
    text-align: center;
    border-radius: 12px;
    background-color: ${props => props.theme.componentColor};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 12px;
    padding-right: 12px;
    margin: 8px;
    width: 250px;
    height: 70px;
    cursor: pointer;

    & span {
        font-weight: 400;
    }
`

const ChallengeTextContainer = styled.div`
    text-align: start;
    margin-left: 12px;

    & span {
        margin: 0;
    }

    & h4 {
        overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 2; /* number of lines to show */
   line-height: 18px;        /* fallback */
   max-height: 36px;  
        margin: 0;
    }
`

interface ChallengeCardProps {
    challenge: Challenge;
    selectedSkill: Skill | null;
    onClick: () => void;
}

const computeAnimate = (challenge: Challenge, inView: boolean, selectedSkill: Skill | null): string => {
    if (!inView) {
        return 'hidden';
    }

    if (!selectedSkill || (selectedSkill && challenge.skills.indexOf(selectedSkill.key) !== -1)) {
        return 'visible';
    }

    return 'softhidden';
}

const ChallengeCard = (props: ChallengeCardProps) => {

    const [delay] = useState(Math.random());

    return <InView>
        {({ inView, ref }) => (
            <motion.div
                style={{
                    zIndex: 90
                }}
                onClick={props.onClick}
                transition={{ type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
            >
                <ChallengeCardContainer
                    ref={ref}
                    variants={{
                        hidden: {
                            opacity: 0, scale: 0.3
                        },
                        visible: {
                            opacity: 1, scale: 1
                        },
                        softhidden: {
                            opacity: 0.2, scale: 0.8
                        }
                    }}
                    transition={{ duration: 0.4, delay }}
                    initial={'hidden'}
                    animate={computeAnimate(props.challenge, inView, props.selectedSkill)}
                >
                    <img
                        style={{
                            borderRadius: 8,
                            height: 60,
                            width: 60
                        }}
                        src={require(`./challenges/${props.challenge.image}`)}
                        alt={props.challenge.name}
                    />
                    <ChallengeTextContainer>
                        <span>{props.challenge.name}</span>
                        <h4>{props.challenge.description}</h4>
                    </ChallengeTextContainer>
                </ChallengeCardContainer>
            </motion.div>
        )}
    </InView>
}

interface SortedChallenges {
    current: Challenge[];
    past: {
        [key: string]: Challenge[]
    };
}

const sortChallenges = (challenges: Challenge[]): SortedChallenges => {
    const ret: SortedChallenges = {
        current: [],
        past: {}
    };

    for (const challenge of challenges) {
        if (challenge.end) {
            const year = challenge.start.getFullYear();
            if (ret.past[year]) {
                ret.past[year].push(challenge);
            } else {
                ret.past[year] = [challenge];
            }
        } else {
            ret.current.push(challenge)
        }
    }

    return ret;
}

interface ChallengesSectionDisplayProps {
    name: string;
    challenges: Challenge[];
    selectedSkill: Skill | null;
    selectChallenge: (challenge: (Challenge | null)) => void;
}

const ChallengesSectionDisplay: React.FC<ChallengesSectionDisplayProps> = (props: ChallengesSectionDisplayProps): JSX.Element => {
    return <div
        style={{
        }}
    >
        <ChallengesSectionTitle>{props.name}</ChallengesSectionTitle>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginRight: 10
        }}>
            {
                props.challenges.map((challenge: Challenge) => (
                    <ChallengeCard
                        selectedSkill={props.selectedSkill}
                        onClick={() => {
                            props.selectChallenge(challenge)
                        }}
                        key={challenge.name}
                        challenge={challenge}
                    />
                ))
            }
        </div>
    </div>;
}

const MobileChallengeModalContainer = styled(motion.div)`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    z-index: 100;
`

const MobileChallengeModal = styled.div`
    backdrop-filter: blur(16px);
    background-color: ${props => props.theme.componentColor}50;
    height: 100%;
    width: 100%;
    overflow: scroll;
    position: relative;
`

const ChallengeModalContainer = styled(motion.div)`
    position: fixed;
    height: calc(100vh - 100px);
    width: calc(50vw - 80px);
    top: 50px;
    right: 80px;
    z-index: 100;
`

const ChallengeModal = styled.div`
    border-radius: 8px;
    backdrop-filter: blur(16px);
    background-color: ${props => props.theme.componentColor}50;
    height: 100%;
    width: 100%;
`

const ChallengesTitle = styled.h1`
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
    margin-top: 40px;
`;

const ChallengesDescription = styled.h4`
    margin: 0;
    margin-bottom: 80px;
`;


export const ChallengesExplorer: React.FC<SkillsExplorerProps> = (props: SkillsExplorerProps): JSX.Element => {

    const skillsContext = useContext(SkillsContext);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })

    const challenges: Challenge[] = skillsContext.challenges;
    const sortedChallenges = sortChallenges(challenges);

    return <InView>
        {({ inView, ref }) => (
            <div
                style={{
                    height: '100vh',
                    width: '100%',
                    display: 'flex',
                    alignItems: isDesktopOrLaptop ? 'flex-end' : 'flex-start',
                    flexDirection: 'column',
                }}
            >
                <AnimatePresence>
                    <MediaQuery maxDeviceWidth={1224}>
                        <MobileChallengeModalContainer
                            variants={{
                                hidden: {
                                    y: '50vh',
                                    height: 0,
                                },
                                visible: {
                                    y: 0,
                                    height: '100vh',
                                }
                            }}
                            transition={{
                                duration: 1
                            }}
                            initial={'hidden'}
                            animate={skillsContext.selectedChallenge !== null && inView ? 'visible' : 'hidden'}
                        >
                            <MobileChallengeModal>
                                <Close
                                    onClick={() => {
                                        skillsContext.selectSkill(null)
                                    }}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        position: 'absolute',
                                        top: 25,
                                        left: 25
                                    }}
                                    fill={'white'} 
                                />

                            </MobileChallengeModal>
                        </MobileChallengeModalContainer>
                    </MediaQuery>
                    <MediaQuery minDeviceWidth={1224}>
                        <ChallengeModalContainer
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: 300,
                                    scale: 0.5,
                                    zIndex: 89
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                    zIndex: 100
                                }
                            }}
                            initial={'hidden'}
                            animate={skillsContext.selectedChallenge !== null && inView ? 'visible' : 'hidden'}
                        >
                            <ChallengeModal />
                        </ChallengeModalContainer>
                    </MediaQuery>
                </AnimatePresence>
                <ChallengesTitle>Challenges</ChallengesTitle>
                <ChallengesDescription>Click on a challenge to see details and associated skills.</ChallengesDescription>
                <div
                    ref={ref}
                    style={{
                        marginBottom: 40
                    }}
                >
                    <ChallengesSectionDisplay
                        selectedSkill={skillsContext.selectedSkill}
                        selectChallenge={skillsContext.selectChallenge}
                        name={'Current Challenges'}
                        challenges={sortedChallenges.current}
                    />
                </div>
                {
                    Object.keys(sortedChallenges.past)
                        .sort((y1: string, y2: string) => parseInt(y2) - parseInt(y1))
                        .map((year: string) => (
                            <ChallengesSectionDisplay
                                selectChallenge={skillsContext.selectChallenge}
                                selectedSkill={skillsContext.selectedSkill}
                                key={year}
                                name={year}
                                challenges={sortedChallenges.past[year]}
                            />
                        ))
                }
            </div>
        )}
    </InView>;
}