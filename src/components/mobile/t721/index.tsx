import { Element } from 'react-scroll'
import { MobileComponent } from "../../MobileComponent";
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
    max-width: 80vw;
    max-height: 80vh;
    width: auto;
    height: auto;
    margin: 48px;
`;

const Logo = styled(motion.img)`
    width: 150px;
    margin-top: 24px;
    margin-bottom: 24px;
`

const StoreIcon = styled(motion.img)`
    position: relative;
    width: 50vw;
    margin-bottom: 24px;
    cursor: pointer;
`

const T721Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

const T721Title = styled(motion.h1)`
    margin: 0;
`;

const T721Description = styled(motion.h4)`
    margin: 0;
`;

export const MobileT721 = () => {

    const [ref, inView] = useInView();
    const [refApple, inViewApple] = useInView();
    const [refAndroid, inViewAndroid] = useInView();
    const [refWeb, inViewWeb] = useInView();

    return <MobileComponent
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
                <Logo
                    alt={'Ticket721 Logo'}
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
                <AppScreen
                    alt={'Ticket721 App Screenshot'}
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
                <StoreIcon
                    alt={'AppStore Link'}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: -40
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    }}
                    transition={{
                        duration: 1,
                        delay: 0
                    }}
                    ref={refApple}
                    initial={'hidden'}
                    animate={inViewApple ? 'visible' : 'hidden'}
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
                    alt={'PlayStore Link'}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: -40
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    }}
                    transition={{
                        duration: 1,
                        delay: 0
                    }}
                    ref={refAndroid}
                    initial={'hidden'}
                    animate={inViewAndroid ? 'visible' : 'hidden'}
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
                    alt={'Web Link'}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: -40
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    }}
                    transition={{
                        duration: 1,
                        delay: 0
                    }}
                    ref={refWeb}
                    initial={'hidden'}
                    animate={inViewWeb ? 'visible' : 'hidden'}
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

            </T721Container>

        </Element>
    </MobileComponent>
};
