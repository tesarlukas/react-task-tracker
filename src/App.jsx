import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import { FocusTaskContextProvider } from './context/index';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Focus from './pages/Focus';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <nav>
          <div className='logo'>TrackerApp</div>
          <div className='separator'>|</div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/focus'>Focus</Link>
        </nav>
        <Routes>
          <Route
            path='/'
            element={
              <FocusTaskContextProvider>
                <Home />
              </FocusTaskContextProvider>
            }
          />
          <Route path='/about/' element={<About />} />
          <Route path='/about/:topic' element={<About />} />
          <Route
            path='/focus/'
            element={
              <FocusTaskContextProvider>
                <Focus />
              </FocusTaskContextProvider>
            }
          />
          <Route path='*' element={<Error />} />
        </Routes>
        <footer>This is footer</footer>
      </div>
    </Router>
  );
};

export default App;
