import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"

export const ExtraSkills = () => {
    return (
        <StyledExtraSkills>
            <h3>Extra Skills</h3>
            <ExtraSkill>
                <Icon iconId="extra" width="15" height="15" viewBox="0 0 15 15"/>
                <p>
                    Bootstrap, Materialize
                </p>
            </ExtraSkill>
            <ExtraSkill>
                <Icon iconId="extra" width="15" height="15" viewBox="0 0 15 15"/>
                <p>
                    Stylus, Sass, Less
                </p>
            </ExtraSkill>
            <ExtraSkill>
                <Icon iconId="extra" width="15" height="15" viewBox="0 0 15 15"/>
                <p>
                    Gulp, Webpack, Grunt
                </p>
            </ExtraSkill>
            <ExtraSkill>
                <Icon iconId="extra" width="15" height="15" viewBox="0 0 15 15"/>
                <p>
                    GIT Knowledge
                </p>
            </ExtraSkill>
        </StyledExtraSkills>
    )
}

const StyledExtraSkills = styled.div`
    
`

const ExtraSkill = styled.div`
    display:  flex;
    gap: 5px;
`