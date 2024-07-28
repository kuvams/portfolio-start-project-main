import styled from "styled-components"
import myPhoto from "../../../assets/imgs/Your Image 1.webp"


export const Header = () => {
    return (
        <StyledHeader>
            <div>
                    <h1>I’m Rayan Adlrdard<br/><span>Front-end</span> Developer</h1>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</h6>
                    <StyledButton>Hire me</StyledButton>
                </div>
                <img src={myPhoto} alt="Developer" />
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    padding: 0 60px;
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
    }
`
const StyledButton = styled.button`
    background-color: #FFB400;
    color: #000000;
    border: none;
    padding: 16px 32px;
    border-radius: 5px;
`