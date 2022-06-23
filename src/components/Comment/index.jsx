import style from './style.module.scss'
import trashIcon from '../../assets/trash.svg'

export function Comment() {
    return (
        <div className={style.comment}>
            <img src="https://github.com/Luis-Felipe-N.png" alt="Foto de usuário do Luis Felipe" />
            <div className={style.commentBox}>
                <div className={style.content}>
                    <header>
                        <div>
                            <strong>Luis Felipe <span>(você)</span></strong>
                            <span>Cerca de 2h</span>
                        </div>
                        <button>
                            <img src={trashIcon} alt="Icone de uma lixeira" title='Apagar comentário' aria-label='Apagar comentário' />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    Aplaudir
                </footer>
            </div>
        </div>
    )
}