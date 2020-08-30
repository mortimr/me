import React, { useContext, useEffect, useState, useMemo, useRef } from "react"
import { styled } from "../../styled"
import { motion, AnimatePresence } from 'framer-motion';
import { SkillsContext, Challenge, Skill } from './context';
import { ReactComponent as Close } from './close.svg';
import { scroller } from 'react-scroll'
import moment from 'moment';
const MediaQuery = require('react-responsive').default;
const useMediaQuery = require('react-responsive').useMediaQuery;

const MobileChallengeModalContainer = styled(motion.div)`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    z-index: 100;
`

const MobileChallengeModal = styled.div`
    height: 100%;
    width: 100%;
    overflow: scroll;
    position: relative;
    background-color: ${props => props.theme.backdropFallbackColor};

  @supports ((-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))) {
    background-color: ${props => props.theme.componentColor}50;
    backdrop-filter: blur(16px);
  }
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
    height: 100%;
    width: 100%;
    position: relative;
    background-color: ${props => props.theme.backdropFallbackColor};
    overflow: scroll;

  @supports ((-webkit-backdrop-filter: blur(16px)) or (backdrop-filter: blur(16px))) {
    background-color: ${props => props.theme.componentColor}50;
    backdrop-filter: blur(16px);
  }
`
const StaticSkillCardContainer = styled.div`
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

interface StaticSkillCardProps {
    skill: Skill;
}

const StaticSkillCard: React.FC<StaticSkillCardProps> = (props: StaticSkillCardProps) => {

    const skillsContext = useContext(SkillsContext);

    return <StaticSkillCardContainer
        onClick={() => {
            skillsContext.selectSkill(props.skill);
            setTimeout(() => {
                scroller.scrollTo('skills', {
                    duration: 500,
                    delay: 0,
                    smooth: 'easeInOutQuart'
                });
            }, 500);
        }}
    >
        <span>{props.skill.name}</span>
    </StaticSkillCardContainer>
}

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

const ChallengeImage = styled.img`
    height: 100px;
    width: 100px;
`;

const DescriptionContainer = styled.div`
    padding: 24px;
`

const ChallengeTitle = styled.h2`
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
    margin-left: 12px;
`;

interface WebsiteLinkProps {
    color: string;
}

const WebsiteLink = styled.div<WebsiteLinkProps>`
margin-top: 40px;
    max-width: 200px;
    height: 30px;
    border-radius: 8px;
    padding: 12px;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const DateText = styled.h4`
    font-size: 15px;
    margin: 0;
    text-transform: uppercase;
    margin-left: 12px;
`

const formatDate = (date: Date): string => new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
}).format(date);

const ChallengeModalContent: React.FC = (): JSX.Element | null => {

    const skillsContext = useContext(SkillsContext);
    const [lastChallenge, setLastChallenge] = useState<Challenge | null>(skillsContext.selectedChallenge);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })

    useEffect(() => {
        if (skillsContext.selectedChallenge) {
            setLastChallenge(skillsContext.selectedChallenge);
        }
    }, [skillsContext.selectedChallenge]);

    const duration = useMemo(() => {
        if (lastChallenge) {

            const endDate = moment(lastChallenge.end || new Date(Date.now()));
            const startDate = moment(lastChallenge.start);

            const yearDiff = endDate.diff(startDate, 'years');
            const monthDiff = endDate.diff(startDate, 'months') % 12;
            const dayDiff = endDate.diff(startDate, 'days') % 30;

            if (yearDiff > 0) {

                return `${yearDiff} years ${monthDiff > 0 ? ' & ' + monthDiff + ' months' : ''}`

            } else {

                if (monthDiff > 0) {
                    return `${monthDiff} months${dayDiff > 0 ? ' & ' + dayDiff + ' days' : ''}`
                } else {
                    return `${dayDiff} days`;
                }

            }

        }

    }, [lastChallenge]);

    if (!lastChallenge) {
        return null;
    }

    return <div
        style={{
            marginBottom: 60
        }}
    >
        <div
            onClick={() => {
                skillsContext.selectChallenge(null)
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
                backgroundColor: lastChallenge.theme
            }}
        >
            <Close
                style={{
                    width: 15,
                    height: 15,
                }}
                fill={'white'}
            />
        </div>
        <ImageBannerContainer
            color={lastChallenge.theme}
        >
            <ChallengeImage
                src={require(`./challenges/${lastChallenge.image}`)}
            />
        </ImageBannerContainer>
        <DescriptionContainer>
            <ChallengeTitle>{lastChallenge.name}</ChallengeTitle>
            <DateText>{formatDate(lastChallenge.start)} → {lastChallenge.end ? formatDate(lastChallenge.end) : 'now'}</DateText>
            <DateText>{duration}</DateText>
            <Field>Description</Field>
            <DescriptionText>{lastChallenge.description}</DescriptionText>
            <Field>Related Skills</Field>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    lastChallenge.skills.map((skillName: string) => <StaticSkillCard
                        key={skillName}
                        skill={skillsContext.skills[skillName]}
                    />)
                }
            </div>
            {
                lastChallenge.link
                    ?
                    (
                        <WebsiteLink
                            color={lastChallenge.theme}
                            onClick={() => {
                                window.open(lastChallenge.link, '_blank');
                            }}
                        >
                            <h4
                                style={{
                                    textTransform: 'uppercase',
                                    fontWeight: 400
                                }}
                            >Learn more</h4>

                        </WebsiteLink>
                    )

                    :
                    null
            }
        </DescriptionContainer>
    </div>
}


export interface ChallengeModalComponentProps {
    inView: boolean;
}

export const ChallengeModalComponent: React.FC<ChallengeModalComponentProps> = (props: ChallengeModalComponentProps) => {

    const skillsContext = useContext(SkillsContext);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })

    const ref = useRef(null);
    useEffect(() => {
        if (ref && ref.current && props.inView && skillsContext.selectedChallenge !== null) {
            (ref as any).current.scrollTop = 0;
        }
    }, [props.inView, ref, skillsContext.selectedChallenge]);

    useEffect(() => {
        if (skillsContext.selectedChallenge && !isDesktopOrLaptop && props.inView) {
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

    }, [skillsContext.selectedChallenge, isDesktopOrLaptop, props.inView]);

    return <AnimatePresence>
        <MediaQuery
            maxDeviceWidth={1224}
            key={'mobile'}
        >
            <MobileChallengeModalContainer
                variants={{
                    hidden: {
                        y: '100vh',
                        transition: {
                            duration: 1,
                            delay: 0
                        }
                    },
                    visible: {
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 0.5
                        }
                    }
                }}
                initial={'hidden'}
                animate={skillsContext.selectedChallenge !== null && props.inView ? 'visible' : 'hidden'}
            >
                <MobileChallengeModal
                    ref={ref}
                >
                    <ChallengeModalContent />
                </MobileChallengeModal>
            </MobileChallengeModalContainer>
        </MediaQuery>
        <MediaQuery
            minDeviceWidth={1224}
            key={'desktop'}
        >
            <ChallengeModalContainer
                variants={{
                    hidden: {
                        x: '100vw',
                    },
                    visible: {
                        x: 0,
                    }
                }}
                initial={'hidden'}
                animate={skillsContext.selectedChallenge !== null && props.inView ? 'visible' : 'hidden'}
            >
                <ChallengeModal
                    ref={ref}
                >
                    <ChallengeModalContent />
                </ChallengeModal>
            </ChallengeModalContainer>
        </MediaQuery>
    </AnimatePresence>
}