import React, { useContext } from "react"
import { SkillsExplorer } from "./SkillsExplorer"
import { ChallengesExplorer } from "./ChallengesExplorer"
import { Element } from 'react-scroll'
import { SkillsContext } from "./context"

export const Skills = () => {

    const skillsContext = useContext(SkillsContext);

    return <Element
        name="skills"
        style={{
            position: 'relative',
            width: 'calc(100% - 300px)',
            marginLeft: 150,
            marginRight: 150,
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <div 
        onClick={() => {
            skillsContext.selectChallenge(null);
            skillsContext.selectSkill(null);
        }}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 80,
        }}
        />
        <div style={{ width: '50%' }}>
            <SkillsExplorer />
        </div>
        <div style={{ width: '50%' }}>
            <ChallengesExplorer />
        </div>
    </Element>
}