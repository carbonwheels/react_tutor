import React from "react";
import Typography from "@material-ui/core/Typography";

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appMessage:
				"Welcome to React"
		};
	}

	render() {
		return (
			<div className="home">
				<Typography variant="body1" color="secondary">
					{this.state.appMessage}
				</Typography>
			</div>
		)
	}
}

export default Home;