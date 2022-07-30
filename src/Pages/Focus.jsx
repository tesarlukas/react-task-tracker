import React from 'react';
import { useContext } from 'react';
import { FocusTaskContext } from '../context';

const Focus = () => {
  const { focusTask } = useContext(FocusTaskContext);
  return <div>{focusTask.text}</div>;
};

export default Focus;
