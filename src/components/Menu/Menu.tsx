import styled from "styled-components"
import { Icon } from "../icon/Icon"

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="#home"><Icon width="17" height="15" iconId="home"/></a></li>
                <li><a href="#services"><Icon width="17" height="18"  iconId="services"/></a></li>
                <li><a href="#education"><Icon width="17" height="18"  iconId="cv"/></a></li>
                <li><a href="#portfolio"><Icon width="15" height="15"  iconId="portfolio"/></a></li>
                <li><a href="#blog"><Icon width="14" height="15"  iconId="blog"/></a></li>
                <li><a href="#contact"><Icon width="15" height="15"  iconId="contact"/></a></li>
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    margin-top: 212px;
    ul {
        display: flex;
        gap: 30px;
        flex-direction: column;
    }
`