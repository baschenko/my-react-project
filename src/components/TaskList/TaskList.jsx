import Task from '../Task/Task';
import s from './TaskList.module.css';

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul className={s.list}>
      {tasks.map(task => (
        <li key={task.id} className={s.item}>
          <Task data={task} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
