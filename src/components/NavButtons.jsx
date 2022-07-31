import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavButtons = () => {
  const navigate = useNavigate();

  return (
    <div className='buttons'>
      <button className='btn' onClick={() => navigate(-1)}>
        Back
      </button>
      <button className='btn' onClick={() => navigate('/')}>
        Go Home
      </button>
    </div>
  );
};

export default NavButtons;
