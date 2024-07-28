import styled from "styled-components"
import { Icon } from "../icon/Icon"

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href=""><Icon iconId="home"/></a></li>
                <li><a href=""><Icon iconId="services"/></a></li>
                <li><a href=""><Icon iconId="cv"/></a></li>
                <li><a href=""><Icon iconId="portfolio"/></a></li>
                <li><a href=""><Icon iconId="blog"/></a></li>
                <li><a href=""><Icon iconId="contact"/></a></li>
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        flex-direction: column;
    }
`