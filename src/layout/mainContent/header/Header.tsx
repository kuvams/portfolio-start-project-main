import styled from "styled-components"
import myPhoto from "../../../assets/imgs/Your Image 1.webp"
import { theme } from "../../../styles/Theme"
import { LeftMenu } from "../../leftMenu/LeftMenu"
import { useState } from "react"


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <PopupWrapper isOpen={isOpen}>
                <LeftMenu popup />
                <BurgerButton popup={true} onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}><span></span></BurgerButton>
            </PopupWrapper>
            <StyledHeader>
                <BurgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}><span></span></BurgerButton>
                <div className="header">
                    <h1 className="header">I’m Rayan Adlrdard<br /><span className="header">Front-end</span> Developer</h1>
                    <h6 className="header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</h6>
                    <StyledButton>Hire me</StyledButton>
                </div>
                <img className="header" src={myPhoto} alt="Developer" />
            </StyledHeader>
        </div>
    )
}

const PopupWrapper = styled.div<{ isOpen: boolean }>`
    display: ${props => props.isOpen ? "block" : "none"};
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    max-width: 500px;
    /* background-color: rgba(222, 8, 8, 0.7); */
    z-index: 1;
`

const StyledHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    padding: 0 60px;
    position: relative;
    h1 {
        font-size: 48px;
    }
    h6 {
        font-size: 16px;
        font-weight: 400;
        color: #767676;
    }
    span {
        color: #FFB400
    }
    div {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        max-width: 523px;

        @media ${theme.media.tablet} {
        padding: 0 30px;
    }
    }

    @media ${theme.media.tablet} {
        padding: 100px 0px 0px;
    }
`
const StyledButton = styled.button`
    background-color: #FFB400;
    color: #000000;
    border: none;
    padding: 16px 32px;
    border-radius: 5px;
`

const BurgerButton = styled.button<{ isOpen: boolean, popup?: boolean }>`
    cursor: pointer;
    display: none;
    position: absolute;
    top: 30px;
    left: ${props => props.popup ? "92%" : "60px"};
    transform: ${props => props.popup ? "translateX(-50%)" : "none"};
    width: 30px;
    height: 22px;
    background-color: transparent;
    border: none;

    @media ${theme.media.sideBar} {
        display: block;
    }

    ${props => !props.isOpen && `
        @media ${theme.media.tablet} {
            left: 30px;
    }`}
    
    span {
        position: absolute;
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${theme.colors.accent};

        ${props => props.isOpen && `background-color: rgba(255, 255, 255, 0);`}

        &::before {
            position: absolute;
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.accent};
            transform: translateY(-6px);
            border-radius: 30px;
            ${props => props.isOpen && 'transform: rotate(45deg);'}
        }

        &::after {
            position: absolute;
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.accent};
            transform: translateY(6px);
            border-radius: 30px;
            ${props => props.isOpen && 'transform: rotate(-45deg);'}
        }
    }
`

