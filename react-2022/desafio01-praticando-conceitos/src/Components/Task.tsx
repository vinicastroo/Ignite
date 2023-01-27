
import styles from './Task.module.css';
import { Trash, Check } from 'phosphor-react';

interface TaskProps {
  task: {
    id: number;
    description: string;
    completed: boolean;
  }
  onCheckedTask: (id: number) => void;
  onDeletedTask: (id: number) => void;
}


export function Task({ task, onCheckedTask, onDeletedTask }: TaskProps) {

  return (
    <div className={styles.container}>
      <div className={task.completed ? styles.checkboxChecked : styles.checkbox} onClick={() => onCheckedTask(task.id)}>
        {
          task.completed && (
            <Check size={10} weight="bold" />
          )
        }
      </div>

      <p className={task.completed ? styles.completedText : styles.unCompletedText}>{task.description}</p>

      <button>
        <Trash size={20} onClick={() => onDeletedTask(task.id)} />
      </button>
    </div>
  );
}