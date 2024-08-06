import styled from "styled-components"
import { Menu } from "../../components/Menu/Menu"
import { Icon } from "../../components/icon/Icon"
import { theme } from "../../styles/Theme"

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
    max-height: 1315px;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    order: 1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;

    @media ${theme.media.sideBar} {
        display: none;
    }
`

// TODO: сайдбары fixed, паддинги, чтобы зарезервировать место для майна
// TODO: все списки сделать гридам, в будующем сделать слайдером
// TODO: 