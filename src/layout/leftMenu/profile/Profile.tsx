import styled from "styled-components"
import profilePhoto from "../../../assets/imgs/my photo mini.webp"
import { Icon } from "../../../components/icon/Icon"

export const Profile = () => {
    return (
        <StyledProfile>
            <img src={profilePhoto} height={"150"} width={"150"} alt="face of profiler" />
            <h3>Rayan Adlardard</h3>
            <p>Font-end Developer</p>
            <StyledSocNets>
                <Icon height="24" width="24" iconId="fb" />
                <Icon height="24" width="24" iconId="inst" />
                <Icon height="24" width="24" iconId="tw" />
                <Icon height="24" width="24" iconId="li" />
                <Icon height="24" width="24" iconId="yt" />
                <Icon height="24" width="24" iconId="dribbb" />
            </StyledSocNets>
        </StyledProfile>
    )
}

const StyledSocNets = styled.div`
    display: flex;
    gap: 15px;
`
const StyledProfile = styled.div`
text-align: center;
    img{
        border-radius: 50%;
        margin-bottom: 31px;
    }
    p {
        margin: 15px 0;
    }
`
