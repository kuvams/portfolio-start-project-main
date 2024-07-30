import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { MainContentBlock } from "../../../components/mainContentBlock/MainContentBlock"
import { theme } from "../../../styles/Theme"

export const PricePlans = () => {
    return (
        <MainContentBlock 
        header={"Price Plans"} 
        content={"Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum"}
        children={
            <StyledPlansList>
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
            </StyledPlansList>
        }/>
    )
}

const StyledPlansList = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 21px;
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