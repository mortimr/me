import React from "react"
import { SkillsExplorer } from "./SkillsExplorer"
import { ChallengesExplorer } from "./ChallengesExplorer"
import { Element } from 'react-scroll'

export const Skills = () => {

    return <Element
        name="skills"
        style={{
            width: 'calc(100% - 300px)',
            minHeight: '100vh',
            marginLeft: 150,
            marginRight: 150,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        }}>
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 80,
            }}
        />
        <div style={{
            width: '50%',
            position: 'sticky',
            top: 0,
            zIndex: 90
        }}>
            <SkillsExplorer />
        </div>
        <div style={{ width: '50%' }}>
            <ChallengesExplorer />
        </div>
    </Element>
}