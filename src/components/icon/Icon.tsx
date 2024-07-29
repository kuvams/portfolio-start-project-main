import styled from "styled-components"
import iconsSprite from "../../assets/imgs/icons/sprite.svg"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    stroke?: string
    circle?: boolean
}

export const Icon = (props: IconPropsType) => {
    return (
        <StyledSvg>
            <svg
                stroke={props.stroke || "none"}
                fill={props.fill || "none"}
                width={props.width || "20"}
                height={props.height || "20"}
                viewBox={props.viewBox || "0"}
                xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
            </svg>
        </StyledSvg>
    )
}

const StyledSvg = styled.div`
    /* &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: #e00d0d;
    }     */
`