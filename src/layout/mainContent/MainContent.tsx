import styled from "styled-components"
import { Header } from "./header/Header"
import { Services } from "./services/Services"
import { PricePlans } from "./pricePlans/PricePlans"
import { Recomendation } from "./recomendation/Recomendation"
import { Education } from "./education/Education"
import { WorkHistory } from "./workHistory/WorkHistory"
import { Portfolio } from "./portfolio/Portfolio"
import { Blog } from "./blog/Blog"
import { Contact } from "./contact/Contact"
import { SameLogos } from "./sameLogos/SameLogos"
import { Footer } from "./footer/Footer"
import { LeftMenu } from "../leftMenu/LeftMenu"
import { RightMenu } from "../rightMenu/RightMenu"

export const MainContent = () => {
    return (
        <StyledMainContent>
            <a id="home"></a>
            <Header />
            <a id="services"></a>
            <Services />
            <PricePlans />
            <Recomendation />
            <a id="education"></a>
            <Education />
            <WorkHistory />
            <a id="portfolio"></a>
            <Portfolio />
            <a id="blog"></a>
            <Blog />
            <a id="contact"></a>
            <Contact />
            <SameLogos />
            <Footer />
        </StyledMainContent>
    )
}

const StyledMainContent = styled.main`
    max-width: 1000px;
    width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    /* gap: 70px; */
    margin: 0 auto;
    /* margin-left: 320px;
    margin-right: 120px; */
`