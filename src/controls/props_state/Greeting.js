import React from "react";

//// NOTES: This is a Class Component
////        It allows you to use state variables
// class Greeting extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h2>Class Component</h2>
// 				{this.props.message}
// 			</div>
// 		);
// 	}
// }

//// NOTES: Functional Stateless Component
////        Do not use state variables only pass in props
// const Greeting = props => (
// 	<div>
// 		<h2>Functional Stateless Component</h2>
// 		{props.message}
// 	</div>
// );

//// NOTES: Example of passing explicit props
const Greeting = ({ message, isShow }) => (isShow ? <b>{message}</b> : null);

export default Greeting;
