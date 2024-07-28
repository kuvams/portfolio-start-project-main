import styled from "styled-components"
import profilePhoto from "../../../assets/imgs/my photo mini.webp"
import { Icon } from "../../../components/icon/Icon"

export const Profile = () => {
    return (
        <div>
            <img src={profilePhoto} height={"150"} width={"150"} alt="face of profiler" />
            <h3>Rayan Adlardard</h3>
            <p>Font-end Developer</p>
            <StyledSocNets>
                <Icon iconId="fb" />
                <Icon iconId="inst" />
                <Icon iconId="tw" />
                <Icon iconId="li" />
                <Icon iconId="yt" />
                <Icon iconId="dribbb" />
            </StyledSocNets>
        </div>
    )
}

const StyledSocNets = styled.div`
    display: flex;
`

