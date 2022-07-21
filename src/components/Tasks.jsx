import Task from './Task';
import Header from './Header';
import AddTask from './AddTask';
import { useState } from 'react';

const Tasks = ({ tasks, onDelete, onToggle, onAddTask }) => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className='container'>
      <Header
        title='Tasks'
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAddTask={onAddTask} />}
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
