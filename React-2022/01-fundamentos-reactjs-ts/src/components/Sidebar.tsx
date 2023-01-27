import styles from './Sidebar.module.css';
import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from './Avatar';
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/vinicastroo.png" />

        <strong>Vinicius Castro</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}