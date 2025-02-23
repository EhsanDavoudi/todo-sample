import {IconButton} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useUIContext} from "../contexts/UIContext.jsx";

export const EditButton = ({task}) => {
  const { setCurrentAction, setIsOpen, setSelectedTask } = useUIContext();

  return (
    <IconButton
      onClick={() => {
        setCurrentAction('edit');
        setSelectedTask(task); // Store the task to edit
        setIsOpen(true); // Set modal to Open
      }}
      edge="end"
    >
      <EditIcon />
    </IconButton>
  );
};