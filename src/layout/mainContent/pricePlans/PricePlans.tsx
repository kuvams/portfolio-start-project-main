import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { MainContentBlock } from "../../../components/mainContentBlock/MainContentBlock"
import { theme } from "../../../styles/Theme"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export const PricePlans = (props: any) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 1440, min: 1000 },
            items: 2.13,
            partialVisibilityGutter: -23,
        },
        tablet: {
            breakpoint: { max: 999, min: 464 },
            items: 3.13,
            partialVisibilityGutter: -200,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5,
            partialVisibilityGutter: 0,
        }
    }
   
    return (
        <MainContentBlock
            header={"Price Plans"}
            content={"Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum"}
            children={
                <div>
                    <StyledPlansList>
                    {/* <Carousel
                        responsive={responsive}
                        // centerMode={true}
                        partialVisbile={true}
                        focusOnSelect={props.deviceType === "desktop" ? false : true }
                        showDots={false}
                        swipeable={props.deviceType === "desktop" ? false : true }
                        draggable={props.deviceType === "desktop" ? false : true }
                        arrows={false}
                        sliderClass="slider"
                        > */}
                            <StyledPlan>
                                <h3>Silver</h3>
                                <p><span>$0.00</span> /Hour</p>
                                <p className="description">For most businesses that want to optimize web queries</p>
                                <ul>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>UI Desing</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>Web Development</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"cross"}></Icon>
                                        <p>Logo Design</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"cross"}></Icon>
                                        <p>Seo Optimization</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"cross"}></Icon>
                                        <p>WordPress Integration</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"cross"}></Icon>
                                        <p>5 Websites</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"cross"}></Icon>
                                        <p>Unlimited User</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"cross"}></Icon>
                                        <p>20 GB Bandwith</p>
                                    </li>
                                </ul>
                                <button>ORDER NOW</button>
                            </StyledPlan>
                            <StyledPlan>
                                <h3>Gold</h3>
                                <p><span>$50.00</span> /Hour</p>
                                <p className="description">For most businesses that want to optimize web queries</p>
                                <ul>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>UI Desing</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>Web Development</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>Logo Design</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>Seo Optimization</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"cross"}></Icon>
                                        <p>WordPress Integration</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"cross"}></Icon>
                                        <p>5 Websites</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"cross"}></Icon>
                                        <p>Unlimited User</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"cross"}></Icon>
                                        <p>20 GB Bandwith</p>
                                    </li>
                                </ul>
                                <button>ORDER NOW</button>
                            </StyledPlan>
                            <StyledPlan>
                                <h3>Diamond</h3>
                                <p><span>$80.00</span> /Hour</p>
                                <p className="description">For most businesses that want to optimize web queries</p>
                                <ul>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>UI Desing</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>Web Development</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>Logo Design</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>Seo Optimization</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>WordPress Integration</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>5 Websites</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>Unlimited User</p>
                                    </li>
                                    <li>
                                        <Icon iconId={"mark"} height={"12"} width={"17"} fill={theme.colors.accent}></Icon>
                                        <p>20 GB Bandwith</p>
                                    </li>
                                </ul>
                                <button>ORDER NOW</button>
                            </StyledPlan>
                    {/* </Carousel> */}
                        </StyledPlansList>
                </div>
            } />
    )
}

const StyledPlansList = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    flex-wrap: wrap;
    h3 {
        text-align: center;
        margin-bottom: 19px;
    }
    span {
        font-size: 32px;
        font-weight: 700;
        color: #000000;
    }
    `

const StyledPlan = styled.div`
    background-color: #fff;
    width: 310px;
    /* margin-right: 20px; */
    padding: 54px 30px 25px;
    text-align: center;
    h3 {
        margin-bottom: 19px;
    }
    .description {
        margin-top: 8px;
        margin-bottom: 21px;
    }
    li {
        display: flex;
        gap: 15px;
        margin-bottom: 16px;
        align-items: center;
    }
    button {
        width: 169px;
        height: 38px;
        border: none;
        border-radius: 30px;
        box-shadow: 0px 1px 10px 0px rgba(34, 60, 80, 0.15);
        background-color: ${theme.colors.gradient.white};
        font-size: 14px;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
    }
    button:hover {
        background-color: ${theme.colors.accent};
    }
`

// TODO: Сделать все планы одним компонентом с параметрами, чтобы нужно было только передать planName и внутри уже делалась логика для цвета текста разных услуг.