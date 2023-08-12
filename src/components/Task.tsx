
import styles from './Task.module.css';

export function Taks() {
  return (
    <div className={styles.newTaks}>
      <input type="text" className={styles.inputTaks} placeholder="Adicione uma nova tarefa" />

      <button className={styles.button}>Criar</button>
    </div>
  )
}