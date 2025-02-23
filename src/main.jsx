import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {TaskProvider} from "./contexts/TaskContext.jsx";
import {UIProvider} from "./contexts/UIContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UIProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </UIProvider>
  </StrictMode>,
)
