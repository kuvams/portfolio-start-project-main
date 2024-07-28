import styled from "styled-components"
import { Profile } from "./profile/Profile"
import { Info } from "./info/Info"
import { Languages } from "./languages/Languages"
import { Skills } from "./skills/Skills"
import { Icon } from "../../components/icon/Icon"
import { ExtraSkills } from "./extraSkills/ExtraSkills"

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
    background-color: #1d20ba;
`

const StyledBtn = styled.button`
    display: flex;
    gap: 5px;
`