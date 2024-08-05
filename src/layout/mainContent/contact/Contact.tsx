import styled from "styled-components"
import mapImage from "../../../assets/imgs/map.webp"
import { Icon } from "../../../components/icon/Icon"
import { theme } from "../../../styles/Theme"
import { YMaps, Map } from "@pbe/react-yandex-maps"

export const Contact = () => {
    return (
        <StyledContact>
            <StyledContactBlock>
                <StyledLeaveInfo>
                    <h2>Leave us your info</h2>
                    <form className="leaveInfo">
                        <label>Your Full Name (Required)</label>
                        <input type="text"></input>
                        <label>Your Email (Required)</label>
                        <input type="mail"></input>
                        <label>Subject</label>
                        <input type="text"></input>
                        <label>Your Message</label>
                        <textarea></textarea>
                        <button>SEND MESSAGE</button>
                    </form>
                </StyledLeaveInfo>
                <StyledContactInformation>
                    <h2>Contact Information</h2>
                    <StyledContactCard>
                        <div className="bgCircle">
                            <Icon iconId={'location'} width="40" height="40" viewBox="-12.5 -12.5 40 40" />
                        </div>
                        <div><h4>Country:</h4><p>Belarus</p></div>
                        <div className="center"><h4>City:</h4><p>Pinsk</p></div>
                        <div><h4>Street:</h4><p>Molchanova</p></div>
                    </StyledContactCard>
                    <StyledContactCard>
                        <div className="bgCircle">
                            <Icon iconId={'mail'} width="40" height="40" viewBox="-12.5 -13.25 40 40" />
                        </div>
                        <div><h4>Email:</h4><p>dimabelanovskiy@outlook.com</p></div>
                        <div className="center"><h4>Skype:</h4><p>-</p></div>
                        <div><h4>Telegram:</h4><p>@kuvams</p></div>
                    </StyledContactCard>
                    <StyledContactCard>
                        <div className="bgCircle">
                            <Icon iconId={'mobile'} width="40" height="40" viewBox="-14.75 -12.5 40 40" />
                        </div>
                        <div><h4>Support Service:</h4><p>123123</p></div>
                        <div className="center"><h4>Office:</h4><p>123123</p></div>
                        <div><h4>Personal:</h4><p>123123</p></div>
                    </StyledContactCard>
                </StyledContactInformation>
            </StyledContactBlock>
            <YMaps>
                <Map 
                    style={{width: "100%", height: "300px"}}
                    defaultState={{ center: [52.115482, 26.102875], zoom: 15 }} />
            </YMaps>
            {/* <img src={mapImage} alt='Map' /> */}
        </StyledContact>
    )
}

const StyledContact = styled.div`
margin-top: 70px;
`
const StyledLeaveInfo = styled.div`
    flex-grow: 21;
button {
    min-height: 35px;
    max-width: 159px;
    border: none;
    margin-bottom: 3px;
    background-color: #FFB400;
    font-size: 14px;
    font-weight: 600;
    color: #2B2B2B;
}
input, textarea {
    margin-bottom: 25px;
    margin-top: 8px;
    border: none;
    background-color: #F0F0F6;
}
input {
    min-height: 50px;
}
textarea {
    min-height: 210px;
    resize: none;
}
label {
    font-size: 18px;
    font-weight: 500;
    color: #767676;
}
    form {
        display: flex;
        flex-direction: column;
        padding: 25px;
    }
    .leaveInfo {
        background-color: #fff;
    }
`

const StyledContactInformation = styled.div`
    flex-grow: 3;
`
const StyledContactBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 30px;
    h2 {
        margin-bottom: 50px;
    }
`

const StyledContactCard = styled.div`
    padding: 25px 25px 15px 25px;
    margin-bottom: 18px;
    min-height: 210px;
    background-color: #ffffff;
    text-align: center;
    svg {
        margin-bottom: 31px;
        display: block;
        margin: 0 auto;
        position: relative;
    }
    .bgCircle {
        position: relative;
    }
    .bgCircle::before {
        position: absolute;
        content: "";
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 40px;
        background-color: ${theme.colors.accent};
        border-radius: 50%;
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    .center {
        margin: 15px 0;
    }
    h4{
        color: #767676;
    }
`