import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTaskContext } from "../contexts/TaskContext.jsx";
import {useState, useEffect} from "react";
import {useUIContext} from "../contexts/UIContext.jsx";

export const InputModal = () => {
	const {
		addTask,
		updateTask,
		deleteTask
	} = useTaskContext();

	const {
		isOpen,
		setIsOpen,
		currentAction,
		selectedTask,
	} = useUIContext()

	const [input, setInput] = useState("");

	useEffect(() => {
		if (isOpen) {
			// Set input based on current action
			setInput(currentAction === 'edit' ? selectedTask?.text : "");
		}
	}, [isOpen, currentAction, selectedTask]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (currentAction === 'edit') {
			updateTask({ ...selectedTask, text: input });
		} else if (currentAction === 'add') {
			addTask(input);
		} else if (currentAction === 'delete') {
			deleteTask(selectedTask.id);
		}

		setIsOpen(false);
	};

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<DialogTitle>
				{currentAction === 'edit' ? 'Edit Task' :
					currentAction === 'delete' ? 'Delete Task' : 'Add Task'}
			</DialogTitle>
			<DialogContent>
				{currentAction === 'delete' ? (
					<DialogContentText>
						Are you sure you want to delete "{selectedTask?.text}"?
					</DialogContentText>
				) : (
					<TextField
						autoFocus
						fullWidth
						variant="standard"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setIsOpen(false)}>Cancel</Button>
				<Button
					type="submit"
					color={currentAction === 'delete' ? "error" : "primary"}
					onClick={handleSubmit}
				>
					{currentAction === 'delete' ? "Delete" :
						currentAction === 'edit' ? "Update" : "Add"}
				</Button>
			</DialogActions>
		</Dialog>
	);
};