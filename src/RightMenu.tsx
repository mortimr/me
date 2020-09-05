import { styled } from './styled';
import React from 'react';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll'

const RightMenuContainer = styled.div`
  position: fixed;
  width: 80px;
  height: 100vh;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & p {
    cursor: pointer;
  }
`

const Line = styled(motion.div)`
  height: 100px;
  width: 2px;
  background: ${props => props.theme.componentColor};
`;

const Section = styled(motion.p)`
    font-weight: 400;
`

export const RightMenu = (props: { idx: number; onChange: (idx: number) => void }) => {
    return <RightMenuContainer
        style={{
            zIndex: 90
        }}
    >
        <Line
            transition={{
                y: {
                    type: 'spring',
                    stiffness: 200,
                    damping: 50
                },
                duration: 0.4
            }}
            initial={{ y: - 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        />
        <Section
            transition={{
                x: {
                    type: 'spring',
                    stiffness: 200,
                    damping: 50
                },
                duration: 0.4,
                delay: 0.4
            }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => scroller.scrollTo('header', {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart'
            })}
        >HOME</Section>
        <Section
            transition={{
                x: {
                    type: 'spring',
                    stiffness: 200,
                    damping: 50
                },
                duration: 0.4,
                delay: 0.6
            }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => scroller.scrollTo('presentation', {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart'
            })}
        >ABOUT</Section>
        <Section
            transition={{
                x: {
                    type: 'spring',
                    stiffness: 200,
                    damping: 50
                },
                duration: 0.4,
                delay: 0.8
            }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => scroller.scrollTo('t721', {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart'
            })}
        >T721</Section>
        <Section
            transition={{
                x: {
                    type: 'spring',
                    stiffness: 200,
                    damping: 50
                },
                duration: 0.4,
                delay: 1
            }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => scroller.scrollTo('skills', {
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart'
            })}
        >SKILLS</Section>
    </RightMenuContainer>
};
