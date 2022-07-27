import style from './style.module.scss'

interface IAvatarProps {
    avatar: string;
    hasBorder: boolean;
}

export function Avatar({avatar, hasBorder = true}: IAvatarProps) {
    return (
        <img className={hasBorder ? style.avatarWithBorder : style.avatar} src={avatar} alt="Foto de perfil do Luis Felipe" />
    )
}