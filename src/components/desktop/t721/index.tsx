import { Element } from 'react-scroll'
import { Component } from "../../Component";
import React from 'react';
import { styled } from '../../../styled';
import { motion } from 'framer-motion';
import T721App from '../../../t721app.png';
import T721Logo from '../../../t721logo.png';
import AppStoreIcon from '../../../AppStoreButton.png';
import PlayStoreIcon from '../../../GooglePlayButton.png';
import WebLinkIcon from '../../../WebLinkButton.png';
import { useInView } from 'react-intersection-observer';

const AppScreen = styled(motion.img)`
    display: block;
    max-width: 30vw;
    max-height: 80vh;
    width: auto;
    height: auto;
`;

const Logo = styled(motion.img)`
    width: 150px;
    margin-top: 24px;
    margin-bottom: 24px;
`

const StoreIcon = styled(motion.img)`
    position: relative;
    width: 10vw;
    margin: 1vw;
    cursor: pointer;
`

const LinkContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 24px;
`;

const T721Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const DescriptionContainer = styled.div`
    margin-left: 24px;
    width: 36vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

const T721Title = styled(motion.h1)`
    margin: 0;
`;

const T721Description = styled(motion.h4)`
    margin: 0;
`;

export const T721 = () => {

    const [ref, inView] = useInView();

    return <Component
        style={{
        }}
    >
        <Element name="t721" style={{
            height: '100%',
            width: '100%'
        }}>
            <T721Container
                ref={ref}
            >
                <AppScreen
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: -40
                        },
                        visible: {
                            opacity: 1,
                            x: 0
                        }
                    }}
                    transition={{
                        duration: 3,
                        delay: 0
                    }}
                    initial={'hidden'}
                    animate={inView ? 'visible' : 'hidden'}
                    src={T721App}
                />
                <DescriptionContainer>
                    <Logo
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -50
                            },
                            visible: {
                                opacity: 1,
                                x: 0
                            }
                        }}
                        transition={{
                            duration: 1
                        }}
                        initial={'hidden'}
                        animate={inView ? 'visible' : 'hidden'}
                        src={T721Logo}
                    />
                    <T721Title
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20
                            },
                            visible: {
                                opacity: 1,
                                y: 0
                            }
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2
                        }}
                        initial={'hidden'}
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        Discover Ticket721,
                        </T721Title>
                    <T721Description
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 20
                            },
                            visible: {
                                opacity: 1,
                                y: 0
                            }
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.6
                        }}
                        initial={'hidden'}
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        our ticketing solution, focused on security and user experience. Available on the App Store,
                        Play Store and on the Web.
                        </T721Description>
                    <LinkContainer>
                        <StoreIcon
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 20
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0
                                }
                            }}
                            transition={{
                                duration: 1,
                                delay: 1
                            }}
                            initial={'hidden'}
                            animate={inView ? 'visible' : 'hidden'}
                            onClick={
                                () => {
                                    window.location.href = 'https://apps.apple.com/tj/app/ticket721/id1525128412';
                                }
                            }
                            style={{
                                zIndex: 91
                            }}
                            src={AppStoreIcon}
                        />
                        <StoreIcon
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 20
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0
                                }
                            }}
                            transition={{
                                duration: 1,
                                delay: 1.2
                            }}
                            initial={'hidden'}
                            animate={inView ? 'visible' : 'hidden'}
                            onClick={
                                () => {
                                    window.location.href = 'https://play.google.com/store/apps/details?id=com.ticket721.t721'
                                }
                            }
                            style={{
                                zIndex: 91
                            }}
                            src={PlayStoreIcon}
                        />
                        <StoreIcon
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 20
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0
                                }
                            }}
                            transition={{
                                duration: 1,
                                delay: 1.4
                            }}
                            initial={'hidden'}
                            animate={inView ? 'visible' : 'hidden'}
                            onClick={
                                () => {
                                    window.location.href = 'https://app.ticket721.com'
                                }
                            }
                            style={{
                                zIndex: 91
                            }}
                            src={WebLinkIcon}
                        />
                    </LinkContainer>

                </DescriptionContainer>
            </T721Container>

        </Element>
    </Component>
};
