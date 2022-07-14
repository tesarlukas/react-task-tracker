import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tasks from './components/Tasks';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

const App = () => {
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
    <Router>
      <div className='app'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/' element={<About />} />
          <Route path='/about/:topic' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        <footer>This is footer</footer>
      </div>
    </Router>
  );
};

export default App;
