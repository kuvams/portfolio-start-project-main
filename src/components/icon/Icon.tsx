// import styled from "styled-components"
import iconsSprite from "../../assets/imgs/icons/sprite.svg"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    stroke?: string
    circle?: boolean
    className?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg
        className={props.className || "" }
        stroke={props.stroke || "none"}
        fill={props.fill || "black"}
        width={props.width || "20px"}
        height={props.height || "20px"}
        viewBox={props.viewBox || "0"}
        xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
            </svg>
        //             <StyledSvg>
        // </StyledSvg>
    )
}

// const StyledSvg = styled.div`
    /* &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: #e00d0d;
    }     */
// `