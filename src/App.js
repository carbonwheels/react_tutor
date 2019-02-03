import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";

// NOTES: This will utilize materials themes into the app
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

import Home from './pages/Home';
import Jason from './pages/Jason'
import './App.css';

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

				<div style={{ paddingTop: "55px" }} />
				<BrowserRouter>
					
					<div className="App">
						<Link to="/">Home</Link> <Link to="/jason">Jason</Link>
						<Switch>
							<Route path="/Jason" component={Jason} />
							{/* NOTE: This is the catch all route */}
							<Route component={ Home } />
						</Switch>
					</div>
				</BrowserRouter>

			</MuiThemeProvider>
		);
	}
}

export default App;
