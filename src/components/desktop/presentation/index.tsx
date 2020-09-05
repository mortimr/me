import { Component } from "../../Component";
import React from "react";
import me from '../../../me.png';
import { styled } from "../../../styled";
import { motion, AnimatePresence } from 'framer-motion';
import { InView } from 'react-intersection-observer'
import { Element } from 'react-scroll'

const Title = styled(motion.h1)`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 60px;
    opacity: 0.7;
    margin: 0;
`;

const Description = styled(motion.p)`
    line-break: strict;
    max-width: 500px;
    font-size: 22px;
    opacity: 0.6;
    padding-left: 20px;
    border-left: 2px solid ${props => props.theme.componentColorLight};
`;

const ProfileImage = styled(motion.img)`
    z-index: 3;
    width: 300px;
`;

const PresentationContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ProfileImageContainer = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 20px;
    text-align: justify;
    text-justify: inter-word;
    z-index: 91;
`;

export const Presentation = () => {

    return <Component>
        <Element name="presentation" style={{
            height: '100%',
            width: '100%'
        }}>
            <PresentationContainer>
                <AnimatePresence>
                    <ProfileImageContainer
                        key={'image'}
                    >
                        <InView>
                            {({ inView, ref }) => (
                                <>
                                    <motion.div
                                        variants={{
                                            hidden: {
                                                scale: 0.9,
                                                rotate: 20,
                                                opacity: 0
                                            },
                                            visible: {
                                                scale: 1,
                                                rotate: 0,
                                                opacity: 1
                                            }
                                        }}
                                        transition={{
                                            rotate: {
                                                type: 'spring'
                                            },
                                            duration: 0.5,
                                            delay: 1
                                        }}
                                        initial={'hidden'}
                                        animate={inView ? 'visible' : 'hidden'}
                                        style={{
                                            borderRadius: 150,
                                            marginLeft: 24,
                                            marginTop: 24,
                                            position: 'absolute',
                                            width: 300,
                                            height: 300,
                                            border: '2px solid white',
                                            zIndex: 1,
                                            opacity: 0.6
                                        }}
                                    />
                                    <ProfileImage src={me} alt={'Iulian Rotaru'}
                                        ref={ref}
                                        variants={{
                                            hidden: {
                                                scale: 0.9,
                                                rotate: 20,
                                                opacity: 0
                                            },
                                            visible: {
                                                scale: 1,
                                                rotate: 0,
                                                opacity: 1
                                            }
                                        }}
                                        transition={{
                                            rotate: {
                                                type: 'spring'
                                            },
                                            duration: 0.5
                                        }}
                                        initial={'hidden'}
                                        animate={inView ? 'visible' : 'hidden'}
                                    />
                                </>
                            )}
                        </InView>
                    </ProfileImageContainer>
                    <TextContainer
                        key={'text'}
                    >
                        <InView>
                            {({ inView, ref }) => (
                                <Title
                                    variants={{
                                        hidden: {
                                            x: 20,
                                            opacity: 0
                                        },
                                        visible: {
                                            x: 0,
                                            opacity: 0.7
                                        }
                                    }}
                                    transition={{
                                        duration: 0.7
                                    }}
                                    initial={'hidden'}
                                    animate={inView ? 'visible' : 'hidden'}

                                    ref={ref}
                                >About me</Title>
                            )}
                        </InView>
                        <InView>
                            {({ inView, ref }) => (
                                <Description
                                    variants={{
                                        hidden: {
                                            x: 20,
                                            opacity: 0
                                        },
                                        visible: {
                                            x: 0,
                                            opacity: 0.7
                                        }
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.2
                                    }}
                                    initial={'hidden'}
                                    animate={inView ? 'visible' : 'hidden'}

                                    ref={ref}
                                >
                                    I'm a Fullstack Software Engineer based in Paris. I went to Epitech in Paris & Concordia University in Montreal, 
                                    but most of what I learned came from personal and entrepreneurial projects. I enjoy building apps, platforms, 
                                    APIs and everything in between. I'm driven by a strong entrepreneurial spirit, making me always want to build new things and see them grow. 
                                    When confronted with a challenge, may it be technical or not, I never give up until I found the solution. This might be what describes me 
                                    best in my daily work.
                                </Description>
                            )}
                        </InView>
                    </TextContainer>
                </AnimatePresence>
            </PresentationContainer>
        </Element>
    </Component >
};