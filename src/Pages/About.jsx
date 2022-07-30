import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const { topic } = useParams();

  return (
    <div>
      {topic ? `This is the page about ${topic}` : 'This is the about page'}
      <button className='btn' onClick={() => navigate('/')}>
        Back
      </button>
    </div>
  );
};

export default About;
