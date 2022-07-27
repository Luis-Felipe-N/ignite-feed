import { FormEvent, FormEventHandler, InvalidEvent, useState } from 'react'
import { IPost } from '../../types/Post';
import { formartDistanceDate } from '../../utils/formatDate';
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import style from './style.module.scss'

interface IAvatar {
    name: string;
    role: string;
    avatarUrl: string
}

interface IComment {
    content: string;
    published_at: Date;
}

interface IPostProps {
    post: IPost
}

export function Post({post}: IPostProps) {
    const [ comment, setComment ]= useState('')
    const [comments, setComments] = useState([
        {
            content: 'Muito legal',
            published_at: new Date()
        }
    ])

    function handleAddComment(event: FormEvent) {
        event.preventDefault()
        const tempComment = {
            content: comment,
            published_at: new Date()
        }
        setComments([...comments, tempComment])
        setComment('')
    }

    function handleDeleteComment(commentToDelete: IComment) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment.published_at !== commentToDelete.published_at)
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = comment.length === 0

    return (
        <article className={style.post}>
            <header className={style.post__header}>
                <Avatar avatar={'https://github.com/Luis-Felipe-N.png'} alt="Foto de perfil do Luis Felipe" />
                <div>
                    <strong>Luis Felipe</strong>
                    <p>Dev Front-End</p>
                </div>
                <time title="data da publicação">Publicado {formartDistanceDate(post.published_at)}</time>
            </header>
            <div className={style.post__content}>
                {post.content.map(line => {
                    if (line.type === "link") {
                        return (<p><a href={line.content} target="_blank" rel="noopener noreferrer">{line.content}</a></p>)
                    } else {
                        return (<p>{line.content}</p>)
                    }
                })}
            </div>
            <form onSubmit={handleAddComment} className={style.post__commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment"
                    placeholder='Escreva um comentário...'
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
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
                          key={comment.content}
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