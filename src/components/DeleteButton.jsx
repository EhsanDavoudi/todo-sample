import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useUIContext} from "../contexts/UIContext.jsx";

export const DeleteButton = ({task}) => {
  const { setCurrentAction, setIsOpen, setSelectedTask } = useUIContext();

  return (
    <IconButton
      onClick={() => {
        setCurrentAction('delete');
        setSelectedTask(task); // Store the task to delete
        setIsOpen(true);
      }}
      edge="end"
    >
      <DeleteIcon color="error" />
    </IconButton>
  );
};