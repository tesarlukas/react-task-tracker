import React from 'react';
// import { useParams } from 'react-router-dom';
import NavButtons from '../components/NavButtons';

const About = () => {
  // const { topic } = useParams();
  const containerStyle = {
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  return (
    <div className='container' style={containerStyle}>
      <h1 className='text-center'>About This Application</h1>
      <p>
        This is an application serving as a simple Task Tracker application. Its
        main purpose is to show practical usage of the React library and its
        main features in comparison to the Svelte framework.
      </p>
      <NavButtons />
    </div>
  );
};

export default About;
