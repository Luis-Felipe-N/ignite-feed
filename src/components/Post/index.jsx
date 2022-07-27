import { useState } from 'react'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import style from './style.module.scss'

export function Post({author, content, published_at}) {
    const [ comment, setComment ]= useState('')
    const [comments, setComments] = useState([
        {
            content: 'Muito legal',
            published_at: new Date()
        }
    ])

    function handleAddComment(event) {
        event.preventDefault()
        const tempComment = {
            content: comment,
            published_at: new Date()
        }
        setComments([...comments, tempComment])
        setComment('')
    }

    function handleDeleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment.published_at !== commentToDelete.published_at)
        setComments(commentsWithoutDeletedOne)
    }

    function handleSetInvalidMessage(event) {
        console.log(event.target)
    }

    const isNewCommentEmpty = comment.length === 0

    return (
        <article className={style.post}>
            <header className={style.post__header}>
                <Avatar avatar={'https://github.com/Luis-Felipe-N.png'} />
                <div>
                    <strong>Luis Felipe</strong>
                    <p>Dev Front-End</p>
                </div>
                <time title="data da publicação">Publicado há 1h</time>
            </header>
            <div className={style.post__content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">👉 jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto</a>
                <a href="">#nlw</a>
                <a href="">#rocketseat</a></p>
            </div>
            <form onSubmit={handleAddComment} className={style.post__commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment"
                    placeholder='Escreva um comentário...'
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    onInvalid={handleSetInvalidMessage}
                    required
                />
                <footer>
                    <button
                        disabled={isNewCommentEmpty}
                    >Publicar</button>
                </footer>
            </form>
            <div>
                { comments ? (
                    comments.map(comment => (
                        <Comment
                          key={comment.published_at}
                          comment={comment}
                          onResquestDelete={handleDeleteComment}
                        />
                    ))
                ): (
                    <h1>Sem comentários</h1>
                )}
                
            </div>
        </article>
    )
}