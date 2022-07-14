import Tasks from './components/Tasks';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Burn 2nd deg of unsp site right lower limb, ex ank/ft, sqla',
      day: '20/5/2022',
      reminder: false,
    },
    {
      id: 2,
      text: 'Other specified dorsopathies, occipito-atlanto-axial region',
      day: '26/9/2021',
      reminder: false,
    },
    {
      id: 3,
      text: 'Rheu vasculitis w rheumatoid arthritis of unsp shoulder',
      day: '5/8/2021',
      reminder: false,
    },
    {
      id: 4,
      text: 'Lacerat flexor musc/fasc/tend l thm at forarm lv, sequela',
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
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' />
        </Routes>
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      </div>
    </Router>
  );
};

export default App;
