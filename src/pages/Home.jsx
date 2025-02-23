import { Box, Typography } from "@mui/material";
import { TaskList } from "../components/TaskList.jsx";
import {AddButton} from "../components/AddButton.jsx";
import {SelectTasks} from "../components/SelectTasks.jsx";
import {useTaskContext} from "../contexts/TaskContext.jsx";
import {useState} from "react";
import {InputModal} from "../components/InputModal.jsx";

export const Home = () => {
	const { filteredTasks } = useTaskContext();
	const [filterTasks, setFilterTasks] = useState("all");

	const tasksToDisplay = filteredTasks(filterTasks);

	return (
		<>
			<Typography
				variant="h2"
				component="h1"
				sx={{
					color: "#10233E",
					textAlign: "center",
					marginBlock: "2rem"
				}}
			>
				Todo List
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "100%"
				}}
			>
				<Box sx={{ display: "flex", width: "100%", maxWidth: 400, justifyContent: "space-between", alignItems: "center", mb: 2 }}>
					<SelectTasks value={filterTasks} onChange={setFilterTasks} />
					<AddButton />
				</Box>
				<TaskList tasks={tasksToDisplay} />

				<InputModal />
			</Box>
		</>
	);
};
