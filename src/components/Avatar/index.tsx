import style from './style.module.scss'

interface IAvatarProps {
    avatar: string;
    hasBorder?: boolean;
    alt?: string
}

export function Avatar({avatar, hasBorder = true, alt}: IAvatarProps) {
    return (
        <img className={hasBorder ? style.avatarWithBorder : style.avatar} src={avatar} alt={alt}/>
    )
}