import React, { useContext, useEffect, useState, useMemo, useRef } from "react"
import { styled } from "../../styled"
import { motion, AnimatePresence } from 'framer-motion';
import { SkillsContext, Skill, Challenge } from './context';
import { ReactComponent as Close } from './close.svg';
import { scroller } from 'react-scroll'
const MediaQuery = require('react-responsive').default;
const useMediaQuery = require('react-responsive').useMediaQuery;

const MobileSkillModalContainer = styled(motion.div)`
    position: fixed;
    height: 100%;
    width: 100vw;
    top: 0;
    right: 0;
    z-index: 100;
`

interface MobileSkillModalProps {
    color: string;
}

const MobileSkillModal = styled(motion.div) <MobileSkillModalProps>`
    backdrop-filter: blur(8px);
    height: 100%;
    width: 100%;
    overflow: scroll;
    position: relative;
    background-color: ${props => props.theme.backdropFallbackColor};
    transition: background-color 1s linear;

  @supports ((-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))) {
    background-color: ${props => props.color}30;
    backdrop-filter: blur(16px);
  }
`
const SkillModalContainer = styled(motion.div)`
    position: fixed;
    height: calc(100vh - 100px);
    width: calc(50vw - 80px);
    top: 50px;
    left: 80px;
    z-index: 100;
`

interface SkillModalProps {
    color: string;
}

const SkillModal = styled.div<SkillModalProps>`
    border-radius: 8px;
    backdrop-filter: blur(16px);
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.backdropFallbackColor};
    overflow: scroll;
    transition: background-color 1s linear;

  @supports ((-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))) {
    background-color: ${props => props.color}30;
    backdrop-filter: blur(16px);
  }
`

interface ImageBannerContainerProps {
    color: string;
}

const ImageBannerContainer = styled.div<ImageBannerContainerProps>`
    background-color: ${props => props.color};
    height: 100px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SkillImage = styled.img`
    height: 100px;
    width: 100px;
`;

const DescriptionContainer = styled.div`
    padding: 24px;
`

const SkillTitle = styled.h1`
    margin: 0;
    font-weight: 400;
`;

const Field = styled.h4`
    margin: 0;
    margin-top: 40px;
    opacity: 0.3;
    font-weight: 400;
    text-transform: uppercase;
`

const DescriptionText = styled.h4`
    margin: 0;
    margin-top: 6px;
`;

const StaticChallengeCardContainer = styled.div`
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

const StaticChallengeTextContainer = styled.div`
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

interface StaticChallengeCardProps {
    challenge: Challenge;
}

const StaticChallengeCard = (props: StaticChallengeCardProps) => {

    const skillsContext = useContext(SkillsContext);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })

    return <StaticChallengeCardContainer
        onClick={() => {
            skillsContext.selectSkill(null);
            setTimeout(() => {
                scroller.scrollTo(isDesktopOrLaptop ? 'skills' : 'challenges', {
                    duration: 500,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                });
            }, 500);
            setTimeout(() => {
                skillsContext.selectChallenge(props.challenge);
            }, 1000);
        }}
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
        <StaticChallengeTextContainer>
            <span>{props.challenge.name}</span>
            <h4>{props.challenge.subtitle}</h4>
        </StaticChallengeTextContainer>
    </StaticChallengeCardContainer>
}

const getChallenges = (challenges: Challenge[], skill: string | undefined): Challenge[] => challenges.filter((challenge: Challenge): boolean => challenge.skills.indexOf(skill as string) !== -1)

const SkillModalContent: React.FC = (): JSX.Element | null => {

    const skillsContext = useContext(SkillsContext);
    const [lastSkill, setLastSkill] = useState<Skill | null>(skillsContext.selectedSkill);
    const challenges = useMemo(() => {
        return getChallenges(skillsContext.challenges, lastSkill?.key);
    }, [skillsContext.challenges, lastSkill])
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    useEffect(() => {
        if (skillsContext.selectedSkill) {
            setLastSkill(skillsContext.selectedSkill);
        }
    }, [skillsContext.selectedSkill]);

    if (lastSkill === null) {
        return null
    }

    return <div>
        <div
            onClick={() => {
                skillsContext.selectSkill(null)
            }}
            style={{
                position: isDesktopOrLaptop ? 'absolute' : 'fixed',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: 8,
                left: 8,
                width: 40,
                height: 40,
                cursor: 'pointer',
                zIndex: 999,
                borderRadius: 20,
                backgroundColor: lastSkill.theme
            }}
        >

            <Close
                style={{
                    width: 15,
                    height: 15,
                }}
                fill={lastSkill.light ? 'black' : 'white'}
            />
        </div>
        <ImageBannerContainer
            color={lastSkill.theme}
        >
            <SkillImage
                src={require(`./skills/${lastSkill.image}`)}
            />
        </ImageBannerContainer>
        <DescriptionContainer>
            <SkillTitle>{lastSkill.name}</SkillTitle>
            <Field>Description</Field>
            {lastSkill.description}
            {
                lastSkill.createdBy

                    ?
                    <>
                        <Field>Created By</Field>
                        <DescriptionText>{lastSkill.createdBy}</DescriptionText>
                    </>

                    :
                    null
            }
            {
                lastSkill.usedBy

                    ?
                    <>
                        <Field>Used By</Field>
                        <DescriptionText>{lastSkill.usedBy.join(', ')} ...</DescriptionText>
                    </>

                    :
                    null
            }
            {
                isDesktopOrLaptop

                    ?
                    null

                    :
                    <>
                        <Field>Related Challenges</Field>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginRight: 10
                        }}>
                            {
                                challenges.map((challenge: Challenge) => (
                                    <StaticChallengeCard
                                        key={challenge.name}
                                        challenge={challenge}
                                    />
                                ))

                            }
                        </div>
                    </>
            }
        </DescriptionContainer>
    </div>

}

export interface SkillModalComponentProps {
    inView: boolean;
}

export const SkillModalComponent: React.FC<SkillModalComponentProps> = (props: SkillModalComponentProps) => {

    const skillsContext = useContext(SkillsContext);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    const ref = useRef(null);
    useEffect(() => {
        if (ref && ref.current && props.inView && skillsContext.selectedSkill !== null) {
            (ref as any).current.scrollTop = 0;
        }
    }, [props.inView, ref, skillsContext.selectedSkill]);

    useEffect(() => {
        if (skillsContext.selectedSkill && !isDesktopOrLaptop && props.inView) {
            let windowOffset = window.scrollY;
            const oldStyle = document.body.style.cssText;
            setTimeout(() => {
                windowOffset = window.scrollY;
                document.body.setAttribute('style', `${oldStyle}; position: fixed; top: -${windowOffset}px; left: 0; right: 0;`);
            }, 1000); // Match animation

            return () => {
                document.body.setAttribute('style', oldStyle);
                window.scrollTo(0, windowOffset);
            };

        }

    }, [skillsContext.selectedSkill, isDesktopOrLaptop, props.inView]);


    return <AnimatePresence>
        <MediaQuery
            key={'mobile'}
            maxDeviceWidth={1224}
        >
            <MobileSkillModalContainer
                variants={{
                    hidden: {
                        y: '150vh',
                        transition: {
                            duration: 1,
                            delay: 0
                        }
                    },
                    visible: {
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 0.25
                        }
                    }
                }}
                initial={'hidden'}
                animate={skillsContext.selectedSkill !== null && props.inView ? 'visible' : 'hidden'}
            >
                <MobileSkillModal
                    variants={{
                        hidden: {
                            opacity: 0,
                            transition: {
                                duration: 1,
                                delay: 2
                            }
                        },
                        visible: {
                            opacity: 1,
                            transition: {
                                duration: 0,
                                delay: 0
                            }
                        }
                    }}
                    color={skillsContext.selectedSkill?.theme || '#000000'}
                    ref={ref}
                >
                    <SkillModalContent />
                </MobileSkillModal>
            </MobileSkillModalContainer>
        </MediaQuery>
        <MediaQuery
            key={'desktop'}
            minDeviceWidth={1224}
        >
            <SkillModalContainer
                variants={{
                    hidden: {
                        x: '-100vw',
                    },
                    visible: {
                        x: 0,
                    }
                }}
                initial={'hidden'}
                animate={skillsContext.selectedSkill !== null && props.inView ? 'visible' : 'hidden'}
            >
                <SkillModal
                    color={skillsContext.selectedSkill?.theme || '#000000'}
                    ref={ref}
                >
                    <SkillModalContent />
                </SkillModal>
            </SkillModalContainer>
        </MediaQuery>
    </AnimatePresence>;
}