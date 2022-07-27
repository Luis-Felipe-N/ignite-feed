import style from './style.module.scss'
import logoSvg from '../../assets/logo.svg'

export function Header() {
    return (
        <header className={style.header}>
            <div>
                <img src={logoSvg} alt="Logo do ignite" />
                <h1>Ignite Feed</h1>
            </div>
        </header>
    )
}