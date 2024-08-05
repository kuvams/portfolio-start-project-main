import styled from "styled-components"
import firPortfolioImage from "../../../assets/imgs/Imageportfolio.webp"
import secPortfolioImage from "../../../assets/imgs/Imageportfolio-1.webp"
import thirdPortfolioImage from "../../../assets/imgs/Imageportfolio-2.webp"
import foursPortfolioImage from "../../../assets/imgs/Imageportfolio-3.webp"
import fivesPortfolioImage from "../../../assets/imgs/Imageportfolio-4.webp"
import sixsPortfolioImage from "../../../assets/imgs/Imageportfolio-5.webp"
import sevensPortfolioImage from "../../../assets/imgs/Imageportfolio-6.webp"
import eightsPortfolioImage from "../../../assets/imgs/Imageportfolio-7.webp"
import ninesPortfolioImage from "../../../assets/imgs/Imageportfolio-8.webp"
import { MainContentBlock } from "../../../components/mainContentBlock/MainContentBlock"

export const Portfolio = () => {
    return (
        <MainContentBlock
            header="Portfolio"
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
            children={
                <div>
                    {/* <StyledPortfolioFilters>
                            <li><h4>All Categories</h4></li>
                            <li><h4>UI Design</h4></li>
                            <li><h4>Web Templates</h4></li>
                            <li><h4>Logo</h4></li>
                            <li><h4>Branding</h4></li>
                    </StyledPortfolioFilters> */}
                    <StyledPortfolioList>
                        <img src={firPortfolioImage} alt="portfolio item"></img>
                        <img src={secPortfolioImage} alt="portfolio item"></img>
                        <img src={thirdPortfolioImage} alt="portfolio item"></img>
                        <img src={foursPortfolioImage} alt="portfolio item"></img>
                        <img src={fivesPortfolioImage} alt="portfolio item"></img>
                        <img src={sixsPortfolioImage} alt="portfolio item"></img>
                        <img src={sevensPortfolioImage} alt="portfolio item"></img>
                        <img src={eightsPortfolioImage} alt="portfolio item"></img>
                        <img src={ninesPortfolioImage} alt="portfolio item"></img>
                    </StyledPortfolioList>
                </div>
            } />
    )
}

const StyledPortfolioFilters = styled.ul`
            display: flex;
            /* flex-wrap: wrap; */
            justify-content: center;
            gap: 20px;
            margin-bottom: 50px;
`

const StyledPortfolioList = styled.div`
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            gap: 20px;
            `
const StyledPortfolioElement = styled.div`
            flex-grow: 1;
            img {
                max-width: 310px;
                max-height: 304px;
            }
            `