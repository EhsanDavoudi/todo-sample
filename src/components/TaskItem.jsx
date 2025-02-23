import {ListItem, ListItemButton, ListItemText, Box} from "@mui/material";
import {EditButton} from "./EditButton.jsx";
import {DeleteButton} from "./DeleteButton.jsx";
import {CheckToggle} from "./CheckToggle.jsx";

export const TaskItem = ({task}) => {
	return (
		<ListItem
			secondaryAction={
			  <Box sx={{display: "flex", gap: 1}}>
				  <EditButton task={task} />
					<DeleteButton task={task} />
				</Box>
			}
			disablePadding
		>
			<ListItemButton dense>
				<CheckToggle task={task} />
				<ListItemText
					primary={task.text}
					sx={{
						textDecoration: task.is_completed ? "line-through" : "none",
						color: task.is_completed ? "gray" : "inherit",
					}}
				/>
			</ListItemButton>

		</ListItem>
	);
}