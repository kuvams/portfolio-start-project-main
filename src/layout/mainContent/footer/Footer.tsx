import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"

export const Footer = () => {
    return (
        <StyledFooter>
            <Icon iconId="citat" height="20" width="20" viewBox="0 0 20 20"/>
            <p>2021 All Rights Reserved.Ojjomedia</p>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    background-color: #c2c2c2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`