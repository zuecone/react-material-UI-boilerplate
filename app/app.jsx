import React from 'react'
import ReactDOM from 'react-dom'

var App = React.createClass({
	render: function() {
		//put your component below if needed
	}
})

const appDOM = document.getElementById('app')
//render() - a function from ReactDOM package
ReactDOM.render(
			<App />, appDOM
);