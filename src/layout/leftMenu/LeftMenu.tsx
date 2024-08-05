import styled from "styled-components"
import { Profile } from "./profile/Profile"
import { Info } from "./info/Info"
import { Languages } from "./languages/Languages"
import { Skills } from "./skills/Skills"
import { Icon } from "../../components/icon/Icon"
import { ExtraSkills } from "./extraSkills/ExtraSkills"
import { theme } from "../../styles/Theme"

export const LeftMenu = () => {
    return (
        <StyledLeftMenu>
            <Profile/>
            <hr/>
            <Info/>
            <hr/>
            <Languages/>
            <hr/>
            <Skills/>
            <hr/>
            <ExtraSkills/>
            <hr/>
            <StyledBtn>
                <p>Download CV</p>
                <Icon iconId="dwnldBlack"/>
            </StyledBtn>
        </StyledLeftMenu>
    )
}

const StyledLeftMenu = styled.div`
    background-color: #ffffff;
    /* position: fixed; */
    top: 0;
    left: 0;
    bottom: 0;
    max-height: 1315px;
    max-width: 305px;
    padding: 50px 43px 25px 43px;
    hr {
        margin: 25px 0;
    }

    @media ${theme.media.sideBar} {
        display: none;
    }
`

const StyledBtn = styled.button`
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 220px;
    border: none;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.gradient.darkGrey};
    p {
        color: ${theme.colors.gradient.darkGrey};
    }
`