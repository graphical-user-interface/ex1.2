import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	Grid,
	Container,
	Checkbox,
	Paper,
	TextField,
	Button
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
		textAlign: "center",
		color: theme.palette.text.secondary
	},
	row: {
		padding: theme.spacing(0.5, 2),
		textAlign: "center"
	},
	input: {
		height: 2
	}
}))

export default function App() {
	const [binary, setBinary] = useState([0, 0, 0, 0, 0, 0, 0, 0])
	const handleChange = (e) => {
		const newBinary = [...binary]
		newBinary[e.target.value] = e.target.checked ? 1 : 0
		setBinary(newBinary)
	}

	const renderCheckbox = () => {
		const html = []
		let i
		for (i = 0; i < 8; i++) {
			html.push(
				<Checkbox
					onChange={handleChange}
					inputProps={{
						"aria-label": "primary checkbox"
					}}
					key={i}
					value={i}
				/>
			)
		}

		return html
	}

	const classes = useStyles()
	const [convertedValue, setConvertedValue] = useState(0)
	const convertBinary = () => {
		const convertedNum = parseInt(binary.join(""), 2)
		setConvertedValue(convertedNum)
	}
	return (
		<div className={classes.root}>
			<Container maxWidth='sm'>
				<Grid container>
					<Grid item xs={2}></Grid>
					<Grid item xs={8}>
						<Paper elevation={2}>
							<Grid container className={classes.row}>
								{renderCheckbox()}
							</Grid>
							<Grid container className={classes.row}>
								<Grid item xs={12}>
									<TextField
										value={binary.join("")}
										variant='outlined'
										InputProps={{
											classes: {
												input: classes.input
											}
										}}
									/>
								</Grid>
							</Grid>
							<Grid container className={classes.row}>
								<Grid item xs={12}>
									<Button
										variant='contained'
										color='primary'
										onClick={convertBinary}>
										Convert
									</Button>
								</Grid>
							</Grid>
							<Grid container className={classes.row}>
								<Grid item xs={12}>
									<TextField
										value={convertedValue.toString()}
										variant='outlined'
										InputProps={{
											classes: {
												input: classes.input
											}
										}}
									/>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={2}></Grid>
				</Grid>
			</Container>
		</div>
	)
}
