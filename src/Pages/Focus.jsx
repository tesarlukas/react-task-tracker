import React from 'react';
import { useContext } from 'react';
import NavButtons from '../components/NavButtons';
import { FocusTaskContext } from '../context';

const Focus = () => {
  const { focusTask } = useContext(FocusTaskContext);

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  return (
    <div className='container' style={containerStyles}>
      <h1 className='text-center'>Your main focus today is</h1>
      <div className='task' style={{ margin: '20px 5px' }}>
        {focusTask.text ? (
          <>
            <h3>{focusTask.text}</h3>
            <p>{focusTask.day}</p>
          </>
        ) : (
          <p className='text-center'>There is no task you are focused on</p>
        )}
      </div>
      <NavButtons />
    </div>
  );
};

export default Focus;
