import React from 'react';
import Tasks from '../components/Tasks';
import { useState } from 'react';

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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id !== id ? task : { ...task, reminder: !task.reminder }
      )
    );
  };
  return (
    <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
  );
};

export default Home;
