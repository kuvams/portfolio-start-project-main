import styled from "styled-components"
import { Profile } from "./profile/Profile"
import { Info } from "./info/Info"
import { Languages } from "./languages/Languages"
import { Skills } from "./skills/Skills"
import { Icon } from "../../components/icon/Icon"
import { ExtraSkills } from "./extraSkills/ExtraSkills"
import { theme } from "../../styles/Theme"

type LeftMenuPropsType = {
    popup?: boolean
}

export const LeftMenu = (popup: LeftMenuPropsType) => {
    return (
        <StyledLeftMenu popup={popup.popup}>
            <div>
                <Profile />
                <hr />
                <Info />
                <hr />
                <Languages />
                <hr />
                <Skills />
                <hr />
                <ExtraSkills />
                <hr />
                <StyledBtn>
                    <p>Download CV</p>
                    <Icon iconId="dwnldBlack" />
                </StyledBtn>
            </div>
        </StyledLeftMenu>
    )
}



const StyledLeftMenu = styled.div<LeftMenuPropsType>`
display: flex;
justify-content: center;
overflow-y: auto;
div {
    max-width: 220px;
}
    background-color: #ffffff;
    position: ${({ popup }) => popup ? "relative" : ""};
    box-shadow: ${({ popup }) => popup ? "7px 7px 5px 0px rgba(34, 60, 80, 0.2)" : ""};
    max-height: 1315px;
    min-width: 305px;
    padding: 50px 43px 25px 43px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    hr {
        margin: 25px 0;
    }

    @media ${theme.media.sideBar} {
        display: ${({ popup }) => popup ? "" : "none"};
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