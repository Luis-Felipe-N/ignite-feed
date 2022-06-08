import style from './style.module.scss'

export function Sidebar(){
    return (
        <aside className={style.sidebar}>
            <img className={style.sidebar__cover} src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50" />
            <div>
                <img src="https://github.com/Luis-Felipe-N.png" alt="imagem de perfil do Luis felipe" />
                <strong>Luis Felipe</strong>
                <span>Desenvolvedor web</span>
            </div>
            <footer>
                <a href="">Editar perfil</a>
            </footer>
        </aside>
    )
}