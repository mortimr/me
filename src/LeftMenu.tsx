import { styled } from './styled';
import { ReactComponent as Github } from './icons/github.svg';
import { ReactComponent as LinkedIn } from './icons/linkedin.svg';
import { ReactComponent as Telegram } from './icons/telegram.svg';
import { ReactComponent as Mail } from './icons/mail.svg';
import React from 'react';
import me from './me.png'
import { motion } from 'framer-motion';
const LeftMenuContainer = styled.div`
  position: fixed;
  width: 80px;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

const Line = styled(motion.div)`
  height: 100px;
  width: 2px;
  background: ${props => props.theme.componentColor};
`;

const ProfileImage = styled(motion.img)`
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
`;

const Section = styled(motion.div)`
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LeftMenu = () => {

  return <LeftMenuContainer
    style={{
      zIndex: 100
    }}
  >
    <Section
      transition={{
        x: {
          type: 'spring',
          stiffness: 200,
          damping: 50
        },
        duration: 0.4,
        delay: 0.2
      }}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}

    >
      <a
        href='mailto:iulian@rotaru.fr'
      >
        <Mail style={{ width: '25px', height: '25px' }} fill={'white'} />
      </a>
    </Section>
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
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <a
        href='https://t.me/mortimr'
      >
        <Telegram style={{ width: '25px', height: '25px' }} fill={'white'} />
      </a>
    </Section>
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
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <a
        href='https://linkedin.com/in/mortimr'
      >
        <LinkedIn style={{ width: '25px', height: '25px' }} fill={'white'} />
      </a>
    </Section>
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
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <a
        href='https://github.com/mortimr'
      >
        <Github style={{ width: '25px', height: '25px' }} fill={'white'} />
      </a>
    </Section>
    <ProfileImage src={me} alt={'Iulian Rotaru'}
      transition={{
        x: {
          type: 'spring',
          stiffness: 200,
          damping: 50
        },
        duration: 0.4,
        delay: 1
      }}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    />
    <Line
      transition={{
        y: {
          type: 'spring',
          stiffness: 200,
          damping: 50
        },
        duration: 0.4,
        delay: 1.2
      }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    />
  </LeftMenuContainer>
};
