import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { MainContentBlock } from "../../../components/mainContentBlock/MainContentBlock"


export const Services = () => {
    return (
        <MainContentBlock 
        header={"My Services"} 
        content={"Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum"} 
        children={
            <StyledServicesList>
                <StyledSLFirstRow>
                    <StyledServiceBox>
                        <Icon iconId={`Web`} width="80" height="80" viewBox="0 0 80 80"/>
                        <h6>Web Development</h6>
                        <p>Blog, E-commerce</p>
                    </StyledServiceBox>
                    <StyledServiceBox>
                        <Icon iconId={`uxUi`} width="80" height="80" viewBox="0 0 80 80"/>
                        <h6>UX/UI</h6>
                        <p>Mobile App, Website Design</p>
                    </StyledServiceBox>
                    <StyledServiceBox>
                        <Icon iconId={`microphone`} width="80" height="80" viewBox="0 0 80 80"/>
                        <h6>Sound Design</h6>
                        <p>Voice Over, Beat Making</p>
                    </StyledServiceBox>
                </StyledSLFirstRow>
                <StyledSLSecondRow>
                    <StyledServiceBox>
                        <Icon iconId={`gameDev`} width="80" height="80" viewBox="0 0 80 80"/>
                        <h6>Game Design</h6>
                        <p>Character Design, Props & Objects</p>
                    </StyledServiceBox>
                    <StyledServiceBox>
                        <Icon iconId={`photograph`} width="80" height="80" viewBox="0 0 80 80"/>
                        <h6>Photography</h6>
                        <p>Portrait, Produkt Photography</p>
                    </StyledServiceBox>
                    <StyledServiceBox>
                        <h6>Advertising</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.</p>
                    </StyledServiceBox>
                </StyledSLSecondRow>
                {/* TODO : Сделать один компонент для строк */}
            </StyledServicesList>
        }/>
            
    )
}

const StyledServicesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const StyledSLFirstRow = styled.div`
    display: flex;
    flex: 1;
    gap: 20px;
    flex-direction: row;
`

const StyledSLSecondRow = styled.div`
    display: flex;
    flex: 2;
    gap: 20px;
    flex-direction: row;
`

const StyledServiceBox = styled.div`
    height: 225px;
    width: 310px;
    background-color: #ffffff;
`
