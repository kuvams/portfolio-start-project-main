import styled from "styled-components"

export const Info = () => {
    return (
        <StyledInfo>
            <div>
                <p>Age:</p>
                <p>23</p>
            </div>
            <div>
                <p>Residence</p>
                <p>BY</p>
            </div>
            <div>
                <p>Freelance</p>
                <p>Available</p>
            </div>
            <div>
                <p>Adress</p>
                <p>Pinsk, Belarus</p>
            </div>
        </StyledInfo>
    )
}

const StyledInfo = styled.div`
    div {
        display: flex;
        justify-content: space-between;
    }
`