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

export const MainContent = () => {
    return (
        <StyledMainContent>
            <Header/>
            <Services/>
            <PricePlans/>
            <Recomendation/>
            <Education/>
            <WorkHistory/>
            <Portfolio/>
            <Blog/>
            <Contact/>
            <SameLogos/>
            <Footer/>
        </StyledMainContent>
    )
}

const StyledMainContent = styled.main`
    max-width: 970px;
    display: flex;
    flex-direction: column;
    gap: 70px;
`