import React from "react";
import Button from "@material-ui/core/Button";


//// NOTES: Functional Stateless Component
////				Using props it communicates with the calling parent passing:
////						- buttonName: as a string to display
////						- buttonClick: from this button upon onClick it will pass buttonClick
const ToggleButton = ({ buttonName, buttonClick }) => (
	<Button variant="contained" onClick={buttonClick} color="primary">
		{buttonName}
	</Button>
);

export default ToggleButton;
