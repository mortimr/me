import React, { useState, useContext, useEffect } from "react"
import { styled } from "../../styled"
import { motion } from 'framer-motion';
import { InView, useInView } from 'react-intersection-observer';
import { SkillsContext, Skill, Challenge } from './context';
import { SkillModalComponent } from "./SkillModal";
const useMediaQuery = require('react-responsive').useMediaQuery;

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
        onClick={() => {
            props.selectSkill(props.skill)
        }}
        transition={{ type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: isDesktopOrLaptop ? 0.8 : undefined }}
        style={{
            zIndex: 91
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
            animate={computeAnimate(props.skill, displayed, props.selectedChallenge)}
        >
            <span>{props.skill.name}</span>
        </SkillCardContainer>
    </motion.div>;
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

const SkillsTitle = styled.h1`
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
    margin-top: 40px;
`;

const SkillsDescription = styled.h4`
    margin: 0;
    margin-bottom: 40px;
`;

export const SkillsExplorer: React.FC<SkillsExplorerProps> = (props: SkillsExplorerProps): JSX.Element => {

    const skillsContext = useContext(SkillsContext);
    const categories: Category[] = sortSkillsByCategories(skillsContext.skills);

    return <InView>
        {({ inView, ref }) => (
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column'
                }}
            >
                <div
                    onClick={() => {
                        skillsContext.selectChallenge(null);
                        skillsContext.selectSkill(null);
                    }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        zIndex: 80
                    }}
                />
                <SkillModalComponent
                    inView={inView}
                />
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