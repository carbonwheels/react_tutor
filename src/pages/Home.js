import React from "react";
import Typography from "@material-ui/core/Typography";

import ClickCounter from "../controls/props_state/ClickCounter"
import ToggleButton from "../controls/props_state/ToggleButton";
import Greeting from "../controls/props_state/Greeting";

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clickCounter: 0,
			appMessage: "Welcome to React",
			buttonName: "Toggle Greeting",
			isShowMessage: true
		};
	}

	//// NOTES: This will handle the event when ToggleButton triggers buttonClick props
	handleToggleButtonOnClick = () => {
		this.setState(state => ({
			clickCounter: state.clickCounter + 1,
			appMessage: "Changed State from parent.",
			isShowMessage: !state.isShowMessage
		}));
	};

	//// NOTES: Home is a container that holds ClickCounter, ToggleButton, Greeting "Functional Stateless Components"
	////		It passes props aka properties to communicate between components
	render() {
		return (
			<div className="home">
				<Typography variant="h2" color="secondary">
					Home
			  </Typography>
				<Typography variant="body1">
					Containers should hold the state variables. Then pass state variables
					as properties into the controls.
			  </Typography>
				<Typography variant="body1">
					Use events to pass data, to call the parent-control-handle to update
					state variables.
			  </Typography>
				<br />
				<br />
				<ClickCounter count={this.state.clickCounter} />
				<br />
				<br />
				<ToggleButton
					buttonName={this.state.buttonName}
					buttonClick={this.handleToggleButtonOnClick}
				/>
				<br />
				<br />
				<Typography variant="body1" color="secondary">
					<Greeting
						message={this.state.appMessage}
						isShow={this.state.isShowMessage}
					/>
				</Typography>
			</div>
		);
	}
}

export default Home;