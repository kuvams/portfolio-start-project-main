import styled from "styled-components"
// import { Icon } from "../../../components/icon/Icon"

export const Languages = () => {
    return (
        <StyledLanguages>
            <h3>Languages</h3>
            <StyledLanguageBlock>
                <div><p>Russian</p><p>100%</p></div>
                {/* <Icon iconId="progressOut" width="100%" height="100%"/>
                <Icon iconId="progressIn" width="100%" height="100%"/> */}
            </StyledLanguageBlock>
            <StyledLanguageBlock>
                <div><p>Belorussian</p><p>70%</p></div>
                {/* <Icon iconId="progressOut" width="100%" height="100%"/>
                <Icon iconId="progressIn" width="70%" height="100%"/> */}
            </StyledLanguageBlock>
            <StyledLanguageBlock>
                <div><p>English</p><p>30%</p></div>
                {/* <Icon iconId="progressOut" width="100%" height="100%"/>
                <Icon iconId="progressIn" width="30%" height="100%"/> */}
            </StyledLanguageBlock>
        </StyledLanguages>
    )
}

const StyledLanguages = styled.div`
    
`

const StyledLanguageBlock = styled.div`
    div {
        display: flex;
        justify-content: space-between;
    }
`