import styled from "styled-components"

type MainContentBlockType = {
    header: string
    content?: string
    children: React.ReactNode
    className?: string
}
export const MainContentBlock = (props: MainContentBlockType) => {
    return (
        <StyledMainContentBlock className={props.className}>
            <h2>{props.header}</h2>
            {props.content && <p className="blockInfo">{props.content}</p>}
            <div className="children">{props.children}</div>
        </StyledMainContentBlock>
    )
}

const StyledMainContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        margin-top: 70px;
    }
    .blockInfo {
        margin-top: 25px;
        max-width: 438px;
        text-align: center;
    }
    .children {
        width: 100%;
        margin-top: 50px;
    }
`


