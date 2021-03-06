import React, { useState, useContext, useEffect, useMemo } from "react"
import { styled } from "../../styled"
import { motion } from 'framer-motion';
import { InView, useInView } from 'react-intersection-observer';
import { SkillsContext, Challenge, Skill } from './context';
import { ChallengeModalComponent } from "./ChallengeModal";
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
    sectionVisible: boolean;
    challenge: Challenge;
    selectedSkill: Skill | null;
    onClick: () => void;
}

const computeAnimate = (sectionVisible: boolean, challenge: Challenge, inView: boolean, selectedSkill: Skill | null): string => {
    if (!inView) {
        return 'hidden';
    }

    if (!selectedSkill || (selectedSkill && challenge.skills.indexOf(selectedSkill.key) !== -1)) {
        return 'visible';
    }

    if (!sectionVisible) { // prevent extra shadow animation when all section disappears
        return 'visible';
    }

    return 'softhidden';
}

const ChallengeCard = (props: ChallengeCardProps) => {

    const [delay] = useState(Math.random() / 2);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const [ref, inView] = useInView();
    const [displayed, setDisplayed] = useState(false);

    useEffect(() => {

        if (!displayed && inView) {
            setDisplayed(true)
        }

    }, [displayed, inView]);

    return <motion.div
        style={{
            zIndex: 90
        }}
        onClick={props.onClick}
        transition={{ type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: isDesktopOrLaptop ? 0.8 : undefined }}
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
                    opacity: 0.1, scale: 0.9
                }
            }}
            transition={{ duration: 0.4, delay }}
            initial={'hidden'}
            animate={computeAnimate(props.sectionVisible, props.challenge, displayed, props.selectedSkill)}
        >
            <div
                style={{
                    width: 60,
                    height: 60
                }}
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
            </div>
            <ChallengeTextContainer>
                <span>{props.challenge.name}</span>
                <h4>{props.challenge.subtitle}</h4>
            </ChallengeTextContainer>
        </ChallengeCardContainer>
    </motion.div>
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

    for (const year of Object.keys(ret.past)) {
        ret.past[year] = ret.past[year].sort((ch1: Challenge, ch2: Challenge): number => ch2.start.getTime() - ch1.start.getTime())
    }

    return ret;
}

interface ChallengesSectionDisplayProps {
    name: string;
    challenges: Challenge[];
    selectedSkill: Skill | null;
    selectChallenge: (challenge: (Challenge | null)) => void;
}

const getDisplayedAmount = (challenges: Challenge[], skill: Skill | null): number => {
    if (!skill) {
        return challenges.length;
    }

    return challenges.filter((challenge: Challenge): boolean => challenge.skills.indexOf(skill.key) !== -1).length;
}

const ChallengesSectionDisplay: React.FC<ChallengesSectionDisplayProps> = (props: ChallengesSectionDisplayProps): JSX.Element => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const amount = useMemo(() => {
        return getDisplayedAmount(props.challenges, props.selectedSkill);
    }, [props.challenges, props.selectedSkill]);

    return <motion.div
        variants={{
            hidden: {
                scale: 0,
                height: 0
            },
            visible: {
                scale: 1,
                height: 'auto'
            }
        }}
        initial={'visible'}
        animate={amount === 0 && isDesktopOrLaptop ? 'hidden' : 'visible'}
        style={{
            textAlign: isDesktopOrLaptop ? 'end' : 'start'
        }}
    >
        <ChallengesSectionTitle>{props.name}</ChallengesSectionTitle>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: isDesktopOrLaptop ? 'flex-end' : 'flex-start',
            flexWrap: 'wrap',
            marginRight: 10
        }}>
            {
                props.challenges.map((challenge: Challenge) => (
                    <ChallengeCard
                        sectionVisible={amount !== 0}
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
    </motion.div>;
}

const ChallengesTitle = styled.h1`
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
    margin-top: 40px;
`;

const ChallengesDescription = styled.h4`
    margin: 0;
    margin-bottom: 40px;
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
                ref={ref}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: isDesktopOrLaptop ? 'flex-end' : 'flex-start',
                    flexDirection: 'column',
                }}
            >
                <ChallengeModalComponent
                    inView={inView}
                />
                <ChallengesTitle>Challenges</ChallengesTitle>
                <ChallengesDescription>Click on a challenge to see details and associated skills.</ChallengesDescription>
                <div
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