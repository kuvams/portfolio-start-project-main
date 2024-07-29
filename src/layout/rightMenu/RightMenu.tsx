import styled from "styled-components"
import { Menu } from "../../components/Menu/Menu"
import { Icon } from "../../components/icon/Icon"

export const RightMenu = () => {
    return (
        <StyledRightMenu>
            <Icon iconId="contrast"/>
            <Menu/>
        </StyledRightMenu>
    )
}

const StyledRightMenu = styled.nav`
    min-width: 108px;
    flex-direction: column;
    background-color: #afd856;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
`

