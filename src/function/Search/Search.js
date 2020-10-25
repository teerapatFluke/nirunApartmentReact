import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(0),
		minWidth: 170,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const date = today.toISOString().split("T")[0];
function Search() {
	const classes = useStyles();
	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<div>
			<Container maxWidth="md">
				<h1 align="center">สืบค้นข้อมูล</h1>

				<Grid container spacing={3}>
					<Grid item xs={12} sm={4}>
						<FormControl className={classes.formControl}>
							<InputLabel id="demo-simple-select-label">
								เรื่องที่ต้องการสืบค้น
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								onChange={handleChange}
							>
								<MenuItem value={10}>Tenrrrrrrrrrrrrrrr</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							<FormHelperText></FormHelperText>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField  id="standard-basic" label="รหัส" />
					</Grid>
					<Grid item xs={12} sm={4}>

						<Button
							variant="contained"
							color="primary"
							size="large"
							startIcon={<SearchIcon />}
						></Button>
					</Grid>
				
				</Grid>
			</Container>
		</div>
	);
}

export default Search;