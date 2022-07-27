import style from './style.module.scss'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { formartDistanceDate } from '../../utils/formatDate'
import { useState } from 'react'

interface ICommentProps {
    content: string;
    onRequestDelete: () => void;
}

export function Comment({comment, onResquestDelete}: ICommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleAddLike() {
        setLikeCount(oldLikeCount => oldLikeCount + 1 )
    }

    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} avatar={'https://github.com/Luis-Felipe-N.png'} />
            <div className={style.commentBox}>
                <div className={style.content}>
                    <header>
                        <div>
                            <strong>Luis Felipe <span>(você)</span></strong>
                            <span>{formartDistanceDate(comment.published_at)}</span>
                        </div>
                        <button
                          title='Apagar comentário'
                          aria-label='Apagar comentário'
                          onClick={() => onResquestDelete(comment)}>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{comment.content}</p>
                </div>
                <footer>
                    <button
                        onClick={handleAddLike}
                    >
                        <ThumbsUp size={20} />
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}