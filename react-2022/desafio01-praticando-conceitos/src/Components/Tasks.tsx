import styles from './Tasks.module.css';

import Clipboard from '../assets/Clipboard.png';

import { Task } from './Task';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface TaskProps {
  id: number;
  description: string;
  completed: boolean;
}

export function Tasks() {
  const [newTaskContent, setNewTaskContent] = useState('');
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskContent(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, { id: tasks.length + 1, description: newTaskContent, completed: false }]);
    setNewTaskContent('')
  }

  function handleCheckedTask(id: number) {
    const findIndexTask = tasks.findIndex(taskElement => id === taskElement.id);

    const newTasks = tasks;
    const task = newTasks[findIndexTask];
    newTasks[findIndexTask] = { ...task, completed: !task.completed }
    setTasks([...newTasks])
  }

  function handleDeleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => { return task.id !== id })
    setTasks(tasksWithoutDeletedOne)
  }

  const totalTasks = tasks.length;
  const totalTasksCompleted = tasks.filter(task => task.completed).length;

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleCreateNewTask}>
          <input type="text" placeholder='Adicione uma nova tarefa' onChange={handleNewTaskChange} value={newTaskContent} />

          <button>
            Criar <PlusCircle size={20} />
          </button>
        </form>
      </div>

      <header className={styles.header}>
        <div className={styles.tasksCreated}>
          <strong>Tarefas criadas</strong>
          <span>{totalTasks}</span>
        </div>
        <div className={styles.tasksCompleted}>
          <strong>Concluídas</strong>
          <span>
            {totalTasksCompleted > 0 ? (
              `${totalTasksCompleted} de ${totalTasks}`
            ) : (
              `${totalTasksCompleted}`
            )}
          </span>
        </div>
      </header>

      {
        tasks.map(task => {
          return (<Task key={task.id} task={task} onCheckedTask={handleCheckedTask} onDeletedTask={handleDeleteTask} />)
        })
      }


      {totalTasks === 0 && (
        <div className={styles.empty}>
          <img src={Clipboard} alt="" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}


    </>
  );
}