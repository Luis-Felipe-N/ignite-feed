import style from './style.module.scss'
import { ImgHTMLAttributes } from 'react'

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    avatar: string;
    hasBorder?: boolean;
    alt?: string
}

export function Avatar({avatar, hasBorder = true, alt, ...rest}: IAvatarProps) {
    return (
        <img
          className={hasBorder ? style.avatarWithBorder : style.avatar}
          src={avatar}
          alt={alt}
          {...rest} />
    )
}