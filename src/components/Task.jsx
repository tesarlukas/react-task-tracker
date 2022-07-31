import { useContext } from 'react';
import { FocusTaskContext } from '../context/index';

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
        <div>
          <i
            className='fas fa-check'
            onClick={() => setFocusTask(task)}
            style={{ color: 'blue', cursor: 'pointer' }}
          />
          <i
            className='fas fa-times'
            onClick={() => onDelete(task.id)}
            style={{ color: 'red', cursor: 'pointer', marginLeft: '5px' }}
          />
        </div>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
