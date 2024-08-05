import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { theme } from "../../../styles/Theme"

export const SameLogos = () => {
    return (
        <StyledLogos>
                <Icon iconId={'footLogo1'} height="140" width="140" viewBox="0 0 140 140"></Icon>
                <Icon iconId={'footLogo2'} height="140" width="140" viewBox="0 0 140 140"></Icon>
                <Icon iconId={'footLogo3'} height="140" width="140" viewBox="0 0 140 140"></Icon>
                <Icon iconId={'footLogo4'} height="140" width="140" viewBox="0 0 140 140"></Icon>
        </StyledLogos>
    )
}

const StyledLogos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    svg {
        min-width: 140px;

        @media ${theme.media.tablet} {
        flex-basis: 50%;
        }
    }
`