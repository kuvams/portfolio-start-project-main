import styled from "styled-components"
import { theme } from "../../../styles/Theme"

export const Info = () => {
    return (
        <StyledInfo>
            <div>
                <p className="leftText">Age:</p>
                <p>23</p>
            </div>
            <div>
                <p className="leftText">Residence:</p>
                <p>BY</p>
            </div>
            <div>
                <p className="leftText">Freelance:</p>
                <p>Available</p>
            </div>
            <div>
                <p className="leftText">Adress:</p>
                <p>Pinsk, Belarus</p>
            </div>
        </StyledInfo>
    )
}

const StyledInfo = styled.div`
    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    p {
        color: ${theme.colors.gradient.darkGrey};
    }
    .leftText {
        position: relative;
        z-index: 0;
        ::before {
            position: absolute;
            left: -5px;
            content: "";
            display: inline-block;
            inset: -1px -5px;
            background-color: ${theme.colors.accent}; 
            z-index: -1;
        }
    }
`