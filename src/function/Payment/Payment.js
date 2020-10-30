import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import SearchIcon from "@material-ui/icons/Search";



const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const date = today.toISOString().split("T")[0];
function Payment() {

	return (
		<div>
			<Container maxWidth="md">
				<h1 align="center">รับชำระค่าบริการ</h1>

				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField required id="standard-basic" label="รหัสห้องพัก" />

						<Button
							variant="contained"
							color="primary"
							size="large"
							startIcon={<SearchIcon />}
						></Button>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField disabled id="standard-basic" label="ประเภทห้องพัก" />
					</Grid>
                    <Grid item xs={12} sm={6}>
						<TextField
							disabled
							id="standard-basic"
							label="กำหนดชำระค่าบริการ"
							defaultValue={""}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							disabled
							id="standard-basic"
                            label="ค่าบริการรวม"
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							disabled
							id="standard-basic"
							label="วันที่ชำระค่าบริการ"
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

export default Payment;
