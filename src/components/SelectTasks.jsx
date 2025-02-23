import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectTasks = ({ value, onChange }) => {
	const handleChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<FormControl sx={{ minWidth: 120 }} size="small">
			<Select
				id="task-filter"
				value={value}
				onChange={handleChange}
				displayEmpty
			>
				<MenuItem value="all">All</MenuItem>
				<MenuItem value="completed">Completed</MenuItem>
				<MenuItem value="uncompleted">Uncompleted</MenuItem>
			</Select>
		</FormControl>
	);
};
