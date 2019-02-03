import React, { Component } from 'react';
import Home from './pages/Home';
import './App.css';

// NOTES: This will utilize materials themes into the app
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: green
	},
	status: {
		danger: "orange"
	}
});

class App extends Component {
	render() {

		return (
			<MuiThemeProvider theme={theme}>
				<div className="App">
					<Home />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
