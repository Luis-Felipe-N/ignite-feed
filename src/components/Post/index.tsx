import style from './style.module.scss'

export function Post() {
    return (
        <article className={style.post}>
            <header>
                <img src="https://github.com/Luis-Felipe-N.png" alt="Foto de perfil do Luis Felipe" />
                <div>
                    <strong>Luis Felipe</strong>
                    <p>Dev Front-End</p>
                </div>
                <time title="data da publicação">Publicado há 1h</time>
            </header>
            <div className={style.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">👉 jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto</a>
                <a href="">#nlw</a>
                <a href="">#rocketseat</a></p>
            </div>
        </article>
    )
}