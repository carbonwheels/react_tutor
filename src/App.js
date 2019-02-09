import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from "react-router-dom"

// NOTES: This will utilize materials themes into the app
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue"
import green from "@material-ui/core/colors/green"

import Header from "./controls/templates/Header"
import Menu from './controls/templates/Menu'
import Home from './pages/Home';
import Jason from './pages/Jason'
import JasonReduxSaga from './pages/JasonReduxSaga'
import AboutUs from './pages/AboutUs'
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
	constructor(props) {
		super(props);
		this.state = { showMenu: false };

		//// NOTES: We must explicitly bind the parent function to the child component function
		////		https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb
		this.handleToggleMenu = this.handleToggleMenu.bind(this);
	}

	//// NOTES: This event will be used to hide the Menu 
	handleToggleMenu = function () {
		console.log(this.state.showMenu)
		this.setState({ showMenu: !this.state.showMenu });
	}

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Header toggleMenu={this.handleToggleMenu} />
				<div style={{ paddingTop: "60px" }} />
				<BrowserRouter>
					<div className="App">
						{/* NOTES: showMenu - will be the property to display or hide the menu
								   closeMenuDrawer - will be the event to trigger this.handleToggleMenu   */}
						<Menu showMenu={this.state.showMenu} closeMenuDrawer={this.handleToggleMenu} />
						<Switch>
							<Route path="/jason" component={Jason} />
							<Route path="/jasonreduxsaga" component={JasonReduxSaga} />
							<Route path="/aboutus" component={AboutUs} />

							{/* NOTES: This is the catch all route */}
							<Route component={Home} />
						</Switch>
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		);
	}
}

export default App
