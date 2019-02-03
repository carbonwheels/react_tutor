import React from "react";
import Typography from "@material-ui/core/Typography";

//// NOTES: Old javascript functions are declared as:
////					ClickCounter = function(props) { return x }
//// 				As it returns value x, it implicitly returns what is inside {}

const ClickCounter = props => {
	return (
		<div>
			<Typography variant="body1">Click Counter {props.count}</Typography>
		</div>
	);
}

export default ClickCounter;
