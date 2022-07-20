import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <nav>
          <div className='logo'>TrackerApp |</div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/' element={<About />} />
          <Route path='/about/:topic' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <footer>This is footer</footer>
      </div>
    </Router>
  );
};

export default App;
