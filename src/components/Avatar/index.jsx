import style from './style.module.scss'

export function Avatar({avatar, hasBorder = true}) {
    return (
        <img className={hasBorder ? style.avatarWithBorder : style.avatar} src={avatar} alt="Foto de perfil do Luis Felipe" />
    )
}