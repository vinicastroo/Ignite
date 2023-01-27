import { Header } from './Components/Header'
import './global.css'

import styles from './App.module.css';
import { Tasks } from './Components/Tasks';

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Tasks />
      </div>
    </>
  )
}

export default App
