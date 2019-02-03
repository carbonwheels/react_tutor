import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//// NOTES: mountNode is a DOM node which you are telling ReactDOM to render the component into.
const mountNode = document.getElementById("root");

ReactDOM.render(<App />, mountNode);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
