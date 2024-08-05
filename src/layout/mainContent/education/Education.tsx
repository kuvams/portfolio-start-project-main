import styled from "styled-components"
import { MainContentBlock } from "../../../components/mainContentBlock/MainContentBlock"
import { theme } from "../../../styles/Theme"

export const Education = () => {
    return (
        <MainContentBlock
            header={"Education"}
            content={"Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum"}
            children={
                <StyledEducationList>
                    <EducationBlock
                        place={"University of Toronto"}
                        doc={"Certificate of Web Training"}
                        pos={"Student"}
                        date={"Jan 1016 - Dec 2021"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}
                    />
                    <hr />
                    <EducationBlock
                        place={"Programming Course"}
                        doc={"Certificate of Web Training"}
                        pos={"Student"}
                        date={"Jan 1016 - Dec 2021"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}
                    />
                    <hr />
                    <EducationBlock
                        place={"Web developer courses"}
                        doc={"Certificate of Web Training"}
                        pos={"Student"}
                        date={"Jan 1016 - Dec 2021"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."}
                    />
                </StyledEducationList>
            } />

    )
}

const StyledEducationList = styled.div`
    background-color: #fff;
    padding: 42px 0;
    display: flex;
    flex-direction: column;
    gap: 28px;
    hr {
        width: 100%;
        background-color: ${theme.colors.gradient.light};
        border: none;
        height: 1px;
    }
`

const StyledEducationBlock = styled.div`
    display: flex;
    margin: 0 33px;
    @media ${theme.media.tablet} {
        flex-wrap: wrap;
    }

    h4 {
        margin-bottom: 28px;

        @media ${theme.media.tablet} {
            margin-bottom: 10px;
        }
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

        @media ${theme.media.tablet} {
            margin-bottom: 30px;
        }
    }
    .date {
        background-color: #FFB400;
        color: #FFFFFF;
        font-size: 10px;
        padding: 4px 7px;
        border-radius: 1px;
    }

    @media ${theme.media.tablet} {}
`

type EducationBlockType = {
    place: string
    doc: string
    pos: string
    date: string
    text: string
}

const EducationBlock = (props: EducationBlockType) => {
    return (
        <StyledEducationBlock>
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
        </StyledEducationBlock>
    )
}