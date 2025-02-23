import { List } from '@mui/material';

import { TaskItem } from "./TaskItem.jsx";

export const TaskList = ({tasks}) => {
	return (
		<List sx={{ width: '100%', bgcolor: "background.paper" }}>
			{tasks
				.sort((a, b) => a.is_completed - b.is_completed)
				.map((task) => (
					<TaskItem
						key={task.id}
						task={task}
					/>
				))
			}
		</List>
	);
};
