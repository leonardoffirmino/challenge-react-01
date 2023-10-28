
import styles from './InfoTask.module.css';
import { ClipboardText } from 'phosphor-react';


export function InfoTaks() {
  return (
    <div className={styles.Taks}>

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

      <hr />

      <div className={styles.Empty}>
        <ClipboardText size={56} />
        <strong>Você ainda não tem tarefas cadastradas </strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>




    </div>
  )
}