import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { MainContentBlock } from "../../../components/mainContentBlock/MainContentBlock"
import { theme } from "../../../styles/Theme"


export const Services = () => {
    return (
        <MainContentBlock 
        header={"My Services"} 
        content={"Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum"} 
        children={
            <StyledServicesList>
                {/* <StyledSLFirstRow> */}
                    <StyledServiceBox>
                        <Icon iconId={`Web`} fill={theme.colors.accent} width="66" height="90" viewBox="0 -18 66 90"/>
                        <h4>Web Development</h4>
                        <p>Blog, E-commerce</p>
                    </StyledServiceBox>
                    <StyledServiceBox>
                        <Icon iconId={`uxUi`} fill={theme.colors.accent} width="68" height="90" viewBox="0 -11 68 90"/>
                        <h4>UX/UI</h4>
                        <p>Mobile App, Website Design</p>
                    </StyledServiceBox>
                    <StyledServiceBox>
                        <Icon iconId={`microphone`} fill={theme.colors.accent} width="49" height="90" viewBox="13 -8 49 90"/>
                        <h4>Sound Design</h4>
                        <p>Voice Over, Beat Making</p>
                    </StyledServiceBox>
                {/* </StyledSLFirstRow> */}
                {/* <StyledSLSecondRow> */}
                    <StyledServiceBox>
                        <Icon iconId={`gameDev`} fill={theme.colors.accent} width="74" height="90" viewBox="0 -10 74 90"/>
                        <h4>Game Design</h4>
                        <p>Character Design, Props & Objects</p>
                    </StyledServiceBox>
                    <StyledServiceBox>
                        <Icon iconId={`photograph`} fill={theme.colors.accent} width="72" height="90" viewBox="3 -6 72 90"/>
                        <h4>Photography</h4>
                        <p>Portrait, Produkt Photography</p>
                    </StyledServiceBox>
                    <StyledServiceBox className="last">
                        <h4>Advertising</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.</p>
                        <a href="/">ORDER NOW <Icon iconId="arrowRight" fill={theme.colors.accent} width="6" height="8" viewBox="0 0 6 8"/></a>
                    </StyledServiceBox>
                {/* </StyledSLSecondRow> */}
                {/* TODO : Сделать один компонент для сервисов */}
            </StyledServicesList>
        }/>
            
    )
}

const StyledServicesList = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
`

const StyledServiceBox = styled.div`
    padding: 30px 25px 25px;
    height: 225px;
    width: 310px;
    background-color: #ffffff;
    text-align: center;
    .last {
    }
    h4 {
        margin-bottom: 15px;
    }
    a {
        color: ${theme.colors.accent};
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        font-weight: 700;
        margin-top: 25px;
        display: block;
    }
    svg {
        /* margin-bottom: 25px; */
    }
`
