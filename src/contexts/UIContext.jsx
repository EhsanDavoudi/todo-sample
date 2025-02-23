import {createContext, useContext, useState} from "react";

const UIContext = createContext();

export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const value = {
    isOpen,
    setIsOpen,
    currentAction,
    setCurrentAction,
    selectedTask,
    setSelectedTask
  }

  return(
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  )
}