import { useContext } from 'react';
import { FocusTaskContext } from '../context/index';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  const { setFocusTask } = useContext(FocusTaskContext);

  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      {/* <div className={'task' + task.reminder ? ' reminder' : ''} onDoubleClick={() => onToggle(task.id)}> */}
      <h3>
        {task.text}{' '}
        <FaTimes
          onClick={() => setFocusTask(task)}
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
