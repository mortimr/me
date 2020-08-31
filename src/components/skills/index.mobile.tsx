import React from "react"
import { SkillsExplorer } from "./SkillsExplorer"
import { ChallengesExplorer } from "./ChallengesExplorer"
import { Element } from 'react-scroll'

export const MobileSkills = () => {

    return <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: 60
        }}>

        <Element
            name="skills"
            style={{ padding: 12 }}
        >
            <SkillsExplorer />
        </Element>

        <Element
            name="challenges"
            style={{ padding: 12 }}
        >
            <ChallengesExplorer />
        </Element>
    </div>
}