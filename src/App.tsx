import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './style/global.scss'
import style from './style/app.module.scss'
import { Post } from "./components/Post"
import { Avatar } from "./components/Avatar"
import { FormEvent, useState } from "react"
import { v4 as uuidV4 } from 'uuid'
import { IPost } from "./types/Post"


function App() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [newPost, setNewPost] = useState('')

  function handleCreateNewPost(event: FormEvent) {
    event.preventDefault()
    const content = newPost.split('\n').map(line => {
      if (line.startsWith('https://') || line.startsWith('http://')) {
        return {
          type: 'link',
          content: line
        }
      } else {
        return {
          type: 'paragraph',
          content: line
        }
      }
    })
    const tempPost = {
      id: uuidV4(),
      author: {
        name: 'Luis Felipe',
        role: 'Estágiario Django',
        avatarUrl: 'https://github.com/Luis-Felipe-N.png'
      },
      published_at: new Date(),
      content
    }

    const postsIsEmpty = posts.length === 0

    if (postsIsEmpty) {
      setPosts([tempPost])
    } else {
      setPosts(state => [...state, tempPost])
    }

    setNewPost('')
  }

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <form
            className={style.writePost}
            onSubmit={handleCreateNewPost}
            >
            <Avatar avatar="https://github.com/Luis-Felipe-N.png" hasBorder={false} />
            <div>
              <textarea
                placeholder="Diga o que está pensando"
                value={newPost}
                onChange={(event) => setNewPost(event?.target.value)}
              />
              <div>
                <button>
                  Publicar  
                </button>
              </div>
            </div>
          </form>
          {posts.length > 0 ? (
            posts.map(post => (
              <Post post={post} />
            ))
          ) : (
            <div className={style.noPosts}>
              <h1>Não há posts aqui</h1>
              <h2>Seja o primeiro a postar algo</h2>
              <p>:)</p>
            </div>
          )}
          {/* <Post />
          <Post /> */}
        </main>
      </div>
    </>
  )
}

export default App
