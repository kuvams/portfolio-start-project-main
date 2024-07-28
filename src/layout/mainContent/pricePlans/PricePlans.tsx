import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { MainContentBlock } from "../../../components/mainContentBlock/MainContentBlock"

export const PricePlans = () => {
    return (
        <MainContentBlock 
        header={"Price Plans"} 
        content={"Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum"}
        children={
            <StyledPlansList>
                <StyledSilverPlan>
                    <h3>Silver</h3>
                    <p><span>$0.00</span> /Hour</p>
                    <p>For most businesses that want to optimize web queries</p>
                    <ul>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>UI Design</p>
                        </li>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>web development</p>
                        </li>
                        <li>
                            <Icon iconId={"cross"}></Icon>
                            <p>logo design</p>
                        </li>
                        <li>
                            <Icon iconId={"cross"}></Icon>
                            <p>seo optimization</p>
                        </li>
                        <li>
                            <Icon iconId={"cross"}></Icon>
                            <p>wordPress integration</p>
                        </li>
                        <li>
                            <Icon iconId={"cross"}></Icon>
                            <p>5 Websites</p>
                        </li>
                        <li>
                            <Icon iconId={"cross"}></Icon>
                            <p>unlimited user</p>
                        </li>
                        <li>
                            <Icon iconId={"cross"}></Icon>
                            <p>20 gB bandwith</p>
                        </li>
                    </ul>
                    <button>Order Now</button>
                </StyledSilverPlan>
                <StyledGoldPlan>
                    <h3>Gold</h3>
                    <p><span>$50.00</span> /Hour</p>
                    <p>For most businesses that want to optimize web queries</p>
                    <ul>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>UI Design</p>
                        </li>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>web development</p>
                        </li>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>logo design</p>
                        </li>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>seo optimization</p>
                        </li>
                        <li>
                            <Icon iconId={"cross"}></Icon>
                            <p>wordPress integration</p>
                        </li>
                        <li>
                            <Icon iconId={"cross"}></Icon>
                            <p>5 Websites</p>
                        </li>
                        <li>
                            <Icon iconId={"cross"}></Icon>
                            <p>unlimited user</p>
                        </li>
                        <li>
                            <Icon iconId={"cross"}></Icon>
                            <p>20 gB bandwith</p>
                        </li>
                    </ul>
                    <button>Order Now</button>
                </StyledGoldPlan>
                <StyledDiamondPlan>
                    <h3>Diamond</h3>
                    <p><span>$80.00</span> /Hour</p>
                    <p>For most businesses that want to optimize web queries</p>
                    <ul>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>ui design</p>
                        </li>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>web development</p>
                        </li>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>logo design</p>
                        </li>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>seo optimization</p>
                        </li>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>wordPress integration</p>
                        </li>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>5 websites</p>
                        </li>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>unlimited user</p>
                        </li>
                        <li>
                            <Icon iconId={"mark"}></Icon>
                            <p>20 gB bandwith</p>
                        </li>
                    </ul>
                    <button>Order Now</button>
                </StyledDiamondPlan>
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
const StyledSilverPlan = styled.div`
    background-color: #fff;
    padding: 31px;
    `

const StyledGoldPlan = styled.div`
    background-color: #fff;
    padding: 31px;

`

const StyledDiamondPlan = styled.div`
    background-color: #fff;
    padding: 31px;

`

// TODO: Сделать все планы одним компонентом с параметрами, чтобы нужно было только передать planName и внутри уже делалась логика для цвета текста разных услуг.