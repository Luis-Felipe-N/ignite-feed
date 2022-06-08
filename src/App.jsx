import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './style/global.scss'
import style from './style/app.module.scss'

function App() {

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>sdasdasd</main>
      </div>
    </>
  )
}

export default App
