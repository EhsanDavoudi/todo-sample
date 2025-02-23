import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useTaskContext} from "../contexts/TaskContext.jsx";
import {useUIContext} from "../contexts/UIContext.jsx";

export const AddButton = () => {
  const { setCurrentAction, setIsOpen, setSelectedTask } = useUIContext();

  return (
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      onClick={() => {
        setCurrentAction('add');
        setSelectedTask(null); // Clear any previous selection
        setIsOpen(true);
      }}
    >
      Add Task
    </Button>
  );
};