import styled from "styled-components"
import firBlogImage from "../../../assets/imgs/Imageportfolio.webp"
import secBlogImage from "../../../assets/imgs/Imageportfolio-1.webp"
import thirdBlogImage from "../../../assets/imgs/Imageportfolio-2.webp"
import { MainContentBlock } from "../../../components/mainContentBlock/MainContentBlock"
import { Icon } from "../../../components/icon/Icon"
import { theme } from "../../../styles/Theme"

export const Blog = () => {
    return (
        <MainContentBlock
            header="Blog"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
            children={
                <StyledBlogList>
                    <StyledPost>
                        <img src={firBlogImage} alt="Blog item"></img>
                        <div className="content">
                            <h4>How to make web tempates</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna</p>
                            <a href="/">Learn More <Icon fill={theme.colors.accent} width="6" height="8" iconId="arrowRight"/></a>
                        </div>
                    </StyledPost>
                    <StyledPost>
                        <img src={secBlogImage} alt="Blog item"></img>
                        <div className="content">
                            <h4>How to make web tempates</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna</p>
                            <a href="/">Learn More <Icon fill={theme.colors.accent} width="6" height="8" iconId="arrowRight"/></a>
                        </div>
                    </StyledPost>
                    <StyledPost>
                        <img src={thirdBlogImage} alt="Blog item"></img>
                        <div className="content">
                            <h4>How to make web tempates</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna</p>
                            <a href="/">Learn More <Icon fill={theme.colors.accent} width="6" height="8" iconId="arrowRight"/></a>
                        </div>
                    </StyledPost>
                </StyledBlogList>
            } />
    )
}

const StyledBlogList = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
`

const StyledPost = styled.div`
    max-width: 310px;
    background-color: #ffffff;
    .content {
        padding: 25px 25px 16px 25px;
        h4 {    
            margin-bottom: 8px;
        }
        p {
            margin-bottom: 9px;
        }
        a {
            color: #FFB400;
        }
    }
`
