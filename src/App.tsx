import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './style/global.scss'
import style from './style/app.module.scss'
import { Post } from "./components/Post"

function App() {

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
