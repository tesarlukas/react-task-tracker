import React from 'react';
import { useState } from 'react';
import Tasks from '../components/Tasks';

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Tidy up',
      day: '20/5/2022',
      reminder: false,
    },
    {
      id: 2,
      text: 'Go buy groceries',
      day: '26/9/2021',
      reminder: false,
    },
    {
      id: 3,
      text: 'Do some work',
      day: '5/8/2021',
      reminder: false,
    },
    {
      id: 4,
      text: 'Do homework',
      day: '29/7/2021',
      reminder: false,
    },
  ]);
  // setTasks([...tasks, {}])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id !== id ? task : { ...task, reminder: !task.reminder }
      )
    );
  };
  return (
    <>
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
        onAddTask={addTask}
      />
    </>
  );
};

export default Home;
