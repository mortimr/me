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

const T721Title = styled.h1`
    margin: 0;
`;

const T721Description = styled.h4`
    margin: 0;
`;

export const T721 = () => {
    return <Component
        style={{
        }}
    >
        <Element name="t721" style={{
            height: '100%',
            width: '100%'
        }}>
            <T721Container>
                <AppScreen
                    src={T721App}
                />
                <DescriptionContainer>
                    <Logo
                        src={T721Logo}
                    />
                    <T721Title>
                        Discover Ticket721,
                        </T721Title>
                    <T721Description>
                        our ticketing solution, focused on security and user experience. Available on the App Store,
                        Play Store and on the Web.
                        </T721Description>
                    <LinkContainer>
                        <StoreIcon
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
