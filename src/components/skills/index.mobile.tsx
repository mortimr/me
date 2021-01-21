import React from "react"
import { SkillsExplorer } from "./SkillsExplorer"
import { ChallengesExplorer } from "./ChallengesExplorer"
import { Element } from 'react-scroll'
import styled from "styled-components"

const MobileSkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: calc(60px + env(safe-area-inset-bottom));
`

export const MobileSkills = () => {

    return <MobileSkillsContainer>
        <Element
            name="challenges"
            style={{ padding: 12 }}
        >
            <ChallengesExplorer />
        </Element>

        <Element
            name="skills"
            style={{ padding: 12 }}
        >
            <SkillsExplorer />
        </Element>
    </MobileSkillsContainer>
}