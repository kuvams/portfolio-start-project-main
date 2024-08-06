import styled from "styled-components"
import profilePhoto from "../../../assets/imgs/my photo mini.webp"
import { Icon } from "../../../components/icon/Icon"

export const Profile = () => {
    return (
        <StyledProfile>
            <img src={profilePhoto} height={"150"} width={"150"} alt="face of profiler" />
            <h3>Rayan Adlrdard</h3>
            <p>Font-end Developer</p>
            <StyledSocNets>
                <a href="https://www.linkedin.com/in/дима-белановский-b72849279/"><Icon height="24" width="24" iconId="fb" /></a>
                <a href="https://www.instagram.com/_kuvams_/"><Icon height="24" width="24" iconId="inst" /></a>
                <a href="https://x.com/belanouski25"><Icon height="24" width="24" iconId="tw" /></a>
                <a href="https://www.linkedin.com/in/дима-белановский-b72849279/"><Icon height="24" width="24" iconId="li" /></a>
                <a href="https://www.linkedin.com/in/дима-белановский-b72849279/"><Icon height="24" width="24" iconId="yt" /></a>
                <a href="https://www.linkedin.com/in/дима-белановский-b72849279/"><Icon height="24" width="24" iconId="dribbb" /></a>
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
