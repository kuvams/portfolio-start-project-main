import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"

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
    gap: 130px;
`