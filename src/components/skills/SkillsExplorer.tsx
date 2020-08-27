import React, { useState, useContext } from "react"
import { styled } from "../../styled"
import { motion, AnimatePresence } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { SkillsContext, Skill, Challenge } from './context';
import { ReactComponent as Close } from './close.svg';
const useMediaQuery = require('react-responsive').useMediaQuery;
const MediaQuery = require('react-responsive').default;

export interface SkillsExplorerProps {

}

const SkillSectionTitle = styled.h3`
    margin: 0;
    text-transform: uppercase;
    opacity: 0.7;
    margin-top: 12px;
`;

const SkillCardContainer = styled(motion.div)`
    text-align: center;
    border-radius: 12px;
    background-color: ${props => props.theme.componentColor};
    display: 'flex';
    justify-content: 'center';
    align-items: 'center';
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 12px;
    padding-right: 12px;
    margin: 8px;
    cursor: pointer;

    & span {
        font-weight: 400;
    }
`

interface SkillCardProps {
    skill: Skill;
    selectedChallenge: Challenge | null;
    selectSkill: (skill: Skill | null) => void;
}

const computeAnimate = (skill: Skill, inView: boolean, selectedChallenge: Challenge | null): string => {
    if (!inView) {
        return 'hidden';
    }

    if ((selectedChallenge === null) || (selectedChallenge && selectedChallenge.skills.findIndex((sk: string): boolean => skill.key === sk) !== -1)) {
        return 'visible';
    }

    return 'softhidden';
}

const SkillCard: React.FC<SkillCardProps> = (props: SkillCardProps) => {

    const [delay] = useState(Math.random());

    return <InView>
        {({ inView, ref }) => (
            <motion.div
                onClick={() => {
                    props.selectSkill(props.skill)
                }}
                transition={{ type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1 }}
                style={{
                    zIndex: 90
                }}
            >
                <SkillCardContainer
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
                    animate={computeAnimate(props.skill, inView, props.selectedChallenge)}
                >
                    <span>{props.skill.name}</span>
                </SkillCardContainer>
            </motion.div>
        )}
    </InView>
}

interface Category {
    name: string;
    skills: Skill[];
}

const sortSkillsByCategories = (skills: { [key: string]: Skill }): Category[] => {

    const categories: { [key: string]: Category } = {};

    for (const skill of Object.keys(skills)) {
        if (categories[skills[skill].category]) {
            categories[skills[skill].category].skills.push(skills[skill]);
        } else {
            categories[skills[skill].category] = {
                name: skills[skill].category,
                skills: [
                    skills[skill]
                ]
            }
        }
    }

    return Object.values(categories).sort((c1: Category, c2: Category) => c1.name.localeCompare(c2.name));
}

interface SkillsCategoryDisplayProps {
    category: Category;
    selectedChallenge: Challenge | null;
    selectSkill: (skill: Skill | null) => void;
}

const SkillsCategoryDisplay: React.FC<SkillsCategoryDisplayProps> = (props: SkillsCategoryDisplayProps): JSX.Element => {

    return <div>
        <SkillSectionTitle>{props.category.name}</SkillSectionTitle>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            {
                props.category.skills.map((skill: Skill) => (
                    <SkillCard
                        selectSkill={props.selectSkill}
                        selectedChallenge={props.selectedChallenge}
                        skill={skill}
                        key={skill.name}
                    />
                ))
            }
        </div>
    </div>
}

const MobileSkillModalContainer = styled(motion.div)`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    z-index: 100;
`

const MobileSkillModal = styled.div`
    background-color: ${props => props.theme.componentColor}50;
    backdrop-filter: blur(8px);
    height: 100%;
    width: 100%;
    overflow: scroll;
    position: relative;
`
const SkillModalContainer = styled(motion.div)`
    position: fixed;
    height: calc(100vh - 100px);
    width: calc(50vw - 80px);
    top: 50px;
    left: 80px;
    z-index: 100;
`

const SkillModal = styled.div`
    border-radius: 8px;
    background-color: ${props => props.theme.componentColor}50;
    backdrop-filter: blur(16px);
    height: 100%;
    width: 100%;
`

const SkillsTitle = styled.h1`
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
    margin-top: 40px;
`;

const SkillsDescription = styled.h4`
    margin: 0;
    margin-bottom: 80px;
`;

export const SkillsExplorer: React.FC<SkillsExplorerProps> = (props: SkillsExplorerProps): JSX.Element => {

    const skillsContext = useContext(SkillsContext);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })

    const categories: Category[] = sortSkillsByCategories(skillsContext.skills);

    return <InView>
        {({ inView, ref }) => (
            <div
                style={{
                    height: !isDesktopOrLaptop ? undefined : '100vh',
                    minHeight: isDesktopOrLaptop ? undefined : '100vh',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column'
                }}
            >
                <AnimatePresence>
                    <MediaQuery maxDeviceWidth={1224}>
                        <MobileSkillModalContainer
                            variants={{
                                hidden: {
                                    x: '100vw',
                                },
                                visible: {
                                    x: 0,
                                }
                            }}
                            transition={{
                                duration: 1
                            }}
                            initial={'hidden'}
                            animate={skillsContext.selectedSkill !== null && inView ? 'visible' : 'hidden'}
                        >
                            <MobileSkillModal>
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

                            </MobileSkillModal>
                        </MobileSkillModalContainer>
                    </MediaQuery>
                    <MediaQuery minDeviceWidth={1224}>
                        <SkillModalContainer
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: -300,
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
                            animate={skillsContext.selectedSkill !== null && inView ? 'visible' : 'hidden'}
                        >
                            <SkillModal />
                        </SkillModalContainer>
                    </MediaQuery>
                </AnimatePresence>
                <SkillsTitle>Skills</SkillsTitle>
                <SkillsDescription>Click on a skill to see details and associated challenges.</SkillsDescription>
                <div ref={ref}>
                    {
                        categories.map((category: Category, idx: number) => (
                            idx === 0

                                ?
                                <SkillsCategoryDisplay
                                    selectSkill={skillsContext.selectSkill}
                                    key={category.name}
                                    selectedChallenge={skillsContext.selectedChallenge}
                                    category={category}
                                />

                                :
                                <SkillsCategoryDisplay
                                    selectSkill={skillsContext.selectSkill}
                                    key={category.name}
                                    selectedChallenge={skillsContext.selectedChallenge}
                                    category={category}
                                />
                        ))
                    }
                </div>
            </div>
        )}
    </InView>
}