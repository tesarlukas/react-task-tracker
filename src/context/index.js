import { createContext, useState } from 'react';

export const FocusTaskContext = createContext();

export const FocusTaskContextProvider = ({ children }) => {
  const [focusTask, setFocusTask] = useState({});
  return (
    <FocusTaskContext.Provider value={{ focusTask, setFocusTask }}>
      {children}
    </FocusTaskContext.Provider>
  );
};
