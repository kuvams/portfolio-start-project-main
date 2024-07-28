import iconsSprite from "../../assets/imgs/icons/sprite.svg"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    stroke?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg stroke={props.stroke || "none"} fill={props.fill || "none"} width={props.width || "40"} height={props.height || "40"} viewBox={props.viewBox || "0 0 40 40"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
        </svg>
    )
}