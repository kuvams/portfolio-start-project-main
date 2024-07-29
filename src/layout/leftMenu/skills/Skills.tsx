import styled from "styled-components"
// import { Icon } from "../../../components/icon/Icon"

export const Skills = () => {
    return (
        <StyledSkills>
            <h3>Skills</h3>
            <StyledLanguageBlock>
                <div><p>HTML</p><p>0%</p></div>
                {/* <Icon iconId="progressOut" width="100%" height="100%"/>
                <Icon iconId="progressIn" width="100%" height="100%"/> */}
            </StyledLanguageBlock>
            <StyledLanguageBlock>
                <div><p>CSS</p><p>0%</p></div>
                {/* <Icon iconId="progressOut" width="100%" height="100%"/>
                <Icon iconId="progressIn" width="70%" height="100%"/> */}
            </StyledLanguageBlock>
            <StyledLanguageBlock>
                <div><p>JS</p><p>0%</p></div>
                {/* <Icon iconId="progressOut" width="100%" height="100%"/>
                <Icon iconId="progressIn" width="30%" height="100%"/> */}
            </StyledLanguageBlock>
            <StyledLanguageBlock>
                <div><p>PHP</p><p>0%</p></div>
                {/* <Icon iconId="progressOut" width="100%" height="100%"/>
                <Icon iconId="progressIn" width="30%" height="100%"/> */}
            </StyledLanguageBlock>
            <StyledLanguageBlock>
                <div><p>WordPress</p><p>0%</p></div>
                {/* <Icon iconId="progressOut" width="100%" height="100%"/>
                <Icon iconId="progressIn" width="30%" height="100%"/> */}
            </StyledLanguageBlock>
        </StyledSkills>
    )
}

const StyledSkills = styled.div`
    h3 {
        margin-bottom: 15px;
    }
`

const StyledLanguageBlock = styled.div`
    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
`