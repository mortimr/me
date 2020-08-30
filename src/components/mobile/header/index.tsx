import React from "react";
import { styled } from "../../../styled";
import { motion } from "framer-motion"
import { Element } from 'react-scroll'
import { MobileComponent } from "../../MobileComponent";

const HeaderContainer = styled.div`
    height: calc(100vh - 120px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Intro = styled(motion.p)`
    margin: 0;
    opacity: 0.6;
    font-size: 18px;
`;
const Name = styled(motion.h1)`
    margin: 0;
    text-transform: uppercase;
    font-size: 34px;
    font-weight: 500;
    opacity: 0.6;
`;

const Subtitle = styled(motion.h2)`
    font-size: 30px;
    font-weight: 500;
    margin: 0;
    opacity: 0.3;
    margin-bottom: 10px;
    margin-left: 10px;
`;
const Description = styled(motion.p)`
    font-size: 18px;
    margin: 0;
    opacity: 0.6
`;

const SoftBold = styled(motion.span)`
    font-weight: 400;
    opacity: 1;
`;

export const MobileHeader = () => {
    return <MobileComponent>
        <Element name="header" style={{
            height: '100%',
            width: '100%'
        }}>
            <HeaderContainer>
                <div>
                    <Intro
                        transition={{ duration: 1 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                    >Hi, I'm</Intro>
                    <Name
                        transition={{ duration: 2 }}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                    >Iulian Rotaru,</Name>
                    <Subtitle
                        transition={{ duration: 2, delay: 0.5 }}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 0.6 }}
                    >I craft softwares 🛠.</Subtitle>
                    <Description
                        transition={{ duration: 1, delay: 1 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                    >I'm a <SoftBold>Fullstack Software Engineer</SoftBold> based in Paris. I consider myself as a <SoftBold>versatile developer</SoftBold>, able to adapt to all sorts of constraints, languages and technologies. I build complete products, from apps to backend, and <SoftBold>love doing it</SoftBold>. Don't hesitate to get in touch !</Description>
                </div>
            </HeaderContainer>
        </Element>
    </MobileComponent>
};