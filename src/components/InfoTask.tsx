
import styles from './InfoTask.module.css';


export function InfoTaks() {
  return (
    <div className={styles.InfoTaks}>

      <div className={styles.Info}>
        <p>
          Tarefas criadas
          <span>0</span>
        </p>

        <p>
          Concluidas
          <span>0</span>
        </p>


      </div>
    </div>
  )
}