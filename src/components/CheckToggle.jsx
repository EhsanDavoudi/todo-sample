import {Checkbox, ListItemIcon} from "@mui/material";
import {useTaskContext} from "../contexts/TaskContext.jsx";

export const CheckToggle = ({task}) => {
  const {updateTask} = useTaskContext()

  const handleToggle = () => {
    updateTask({...task, is_completed: !task.is_completed})
  }

  return (
    <ListItemIcon onClick={handleToggle}>
      <Checkbox
        edge="start"
        checked={task.is_completed}
        abIndex={-1}
        disableRipple
      />
    </ListItemIcon>
  )
}