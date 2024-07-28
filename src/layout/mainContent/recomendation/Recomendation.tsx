import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import fRecPhoto from "../../../assets/imgs/Profilereview.webp"
import sRecPhoto from "../../../assets/imgs/Profilereview-1.webp"
import tRecPhoto from "../../../assets/imgs/Profilereview-2.webp"
import { MainContentBlock } from "../../../components/mainContentBlock/MainContentBlock"

export const Recomendation = () => {
    return (
        <MainContentBlock
            header={"Recomendations"}
            content={"Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum"}
            children={
                <StyledRecomendationList>
                    <StyledRecomendationCard>
                        <StyledRecStarsBlock>
                            <Icon iconId={'star'} /><Icon iconId={'star'} /><Icon iconId={'star'} /><Icon iconId={'star'} /><Icon iconId={'star'} />
                        </StyledRecStarsBlock>
                        <h4>Great Quality!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                        <StyledRecomendatorBlock>
                            <img src={fRecPhoto} alt="recomender" />
                            <div>
                                <h4>James Gouse</h4>
                                <p>Graphic Designer</p>
                            </div>
                        </StyledRecomendatorBlock>
                    </StyledRecomendationCard>
                    <StyledRecomendationCard>
                        <StyledRecStarsBlock>
                            <Icon iconId={'star'} /><Icon iconId={'star'} /><Icon iconId={'star'} /><Icon iconId={'star'} /><Icon iconId={'star'} />
                        </StyledRecStarsBlock>
                        <h4>Amazing work!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                        <StyledRecomendatorBlock>
                            <img src={sRecPhoto} alt="recomender" />
                            <div>
                                <h4>Tiana Philips</h4>
                                <p>Photographer</p>
                            </div>
                        </StyledRecomendatorBlock>
                    </StyledRecomendationCard>
                    <StyledRecomendationCard>
                        <StyledRecStarsBlock>
                            <Icon iconId={'star'} /><Icon iconId={'star'} /><Icon iconId={'star'} /><Icon iconId={'star'} /><Icon iconId={'star'} />
                        </StyledRecStarsBlock>
                        <h4>Great Quality!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                        <StyledRecomendatorBlock>
                            <img src={tRecPhoto} alt="recomender" />
                            <div>
                                <h4>Talan Westervelt</h4>
                                <p>Business man</p>
                            </div>
                        </StyledRecomendatorBlock>
                    </StyledRecomendationCard>
                </StyledRecomendationList>
            } />
    )
}

const StyledRecomendationList = styled.div`
    display: flex;
    gap: 21px;
`
const StyledRecomendationCard = styled.div`
    background-color: #fff;
    padding: 25px;
    h4 {
        margin-bottom: 18px;
    }
    p {
        text-align: start;
        line-height: 24px;
    }
`
const StyledRecStarsBlock = styled.div`
    display: flex;
    `

const StyledRecomendatorBlock = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    h4 {
        margin-bottom: 0;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
    }
`

// TODO: Сделать карточки рекомендаций одним компонентом, и передавать туда пропсы.