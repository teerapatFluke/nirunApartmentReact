import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const date = today.toISOString().split("T")[0];

function CreateRoom() {
	return (
		<div>
			<Container maxWidth="md" >
				<h1 align="center">เพิ่มห้องพัก</h1>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField required id="standard-basic" label="รหัสห้องพัก" />
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField required id="standard-basic" label="ราคาห้องพัก" />
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="standard-basic"
							label="มิเตอร์ไฟฟ้าปัจจุบัน"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="standard-basic"
							label="มิเตอร์น้ำประปาปัจจุบัน"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							disabled
							id="standard-basic"
							label="วันที่เพิ่มข้อมูล"
							defaultValue={date}
						/>
					</Grid>
					<Grid item xs={12} sm={6}></Grid>
					<Grid item xs={12} sm={6}></Grid>
					<Grid item xs={12} sm={6}>
						<Button
							variant="contained"
							color="primary"
							size="large"
							startIcon={<SaveIcon />}
						>
							Save
						</Button>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default CreateRoom;