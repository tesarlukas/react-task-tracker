import Task from './Task';
import Header from './Header';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className='container'>
      <Header title='Tasks' />
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          ></Task>
        ))
      ) : (
        <h3>There are no tasks</h3>
      )}
    </div>
  );
};

export default Tasks;
