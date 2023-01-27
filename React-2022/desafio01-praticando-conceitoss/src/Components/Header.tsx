import styles from './Header.module.css';
import todoLogo from '../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do todo" />
      <span className={styles.firstPartLogo}>to</span>
      <span className={styles.lastPartLogo}>do</span>
    </header>
  )
}