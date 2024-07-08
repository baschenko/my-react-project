import s from './App.module.css';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import TaskList from './TaskList/TaskList';
import initialTasks from '../tasks.json';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('');

  const addTasks = newTack => {
    setTasks(prevTasks => {
      return [...prevTasks, newTack];
    });
  };

  const deleteTask = taskId => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={s.container}>
      <Form onAdd={addTasks} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}
