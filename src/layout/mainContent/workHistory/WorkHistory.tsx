import styled from "styled-components"
import { MainContentBlock } from "../../../components/mainContentBlock/MainContentBlock"

export const WorkHistory = () => {
    return (
        <MainContentBlock
            header={"Work History"}
            content={"Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum"}
            children={
                <StyledWorkList>
                    <WorkBlock
                        place={"Lead Web Designer"}
                        doc={"Certificate of Web Training"}
                        pos={"Student"}
                        date={"Jan 1016 - Dec 2021"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}
                    />
                    <WorkBlock
                        place={"Junior Web Designer"}
                        doc={"Certificate of Web Training"}
                        pos={"Student"}
                        date={"Jan 1016 - Dec 2021"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}
                    />
                    <WorkBlock
                        place={"Junior Web Designer"}
                        doc={"Certificate of Web Training"}
                        pos={"Student"}
                        date={"Jan 1016 - Dec 2021"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}
                    />
                </StyledWorkList>
            } />

    )
}

const StyledWorkList = styled.div`
    background-color: #fff;
    padding: 42px 33px;
    display: flex;
    flex-direction: column;
    gap: 28px;
`

const StyledWorkBlock = styled.div`
    display: flex;
    h4 {
        margin-bottom: 28px;
    }
    .pos {
        color : #000000;
    }
    .personInfo {
        display: flex;
        gap: 21px;
        justify-content: start;
    }
    .info {
        flex-basis: 140%;
    }
    .date {
        background-color: #FFB400;
        color: #FFFFFF;
        font-size: 10px;
        padding: 4px 7px;
        border-radius: 1px;
    }
`

type WorkBlockType = {
    place: string
    doc: string
    pos: string
    date: string
    text: string
}

const WorkBlock = (props: WorkBlockType) => {
    return (
        <StyledWorkBlock>
            <div className="info">
                <h4 className="place">{props.place}</h4>
                <div className="personInfo">
                    <p className="pos">{props.pos}</p>
                    <div className="date">{props.date}</div>
                </div>
            </div>
            <div className="content">
                <h4 className="doc">{props.doc}</h4>
                <p className="text">{props.text}</p>
            </div>
        </StyledWorkBlock>
    )
}