import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { plansList } from "./plansList"

type PlanComponentProps = {
    plan: string
}

export const PlanComponent = (props: PlanComponentProps) => {

    return (
        <StyledPlanComponent>
            <h3>${plansList.silver.name}</h3>
            <p><span>${props.plan}</span> /Hour</p>
            <p>{props.plan}</p>
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
        </StyledPlanComponent>
    )
}


const StyledPlanComponent = styled.div`
    background-color: #fff;
    padding: 31px;
`
