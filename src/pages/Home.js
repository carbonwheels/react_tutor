import React from "react";

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
				{this.state.appMessage}
			</div>
		)
	}
}

export default Home;