import styled from "styled-components"
import { Menu } from "../../components/Menu/Menu"
import { Icon } from "../../components/icon/Icon"

export const RightMenu = () => {
    return (
        <StyledRightMenu>
            <Icon height="25" width="25" iconId="contrast"/>
            <Menu/>
        </StyledRightMenu>
    )
}

const StyledRightMenu = styled.nav`
    display: flex;
    padding-top: 50px;
    min-width: 108px;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
`

