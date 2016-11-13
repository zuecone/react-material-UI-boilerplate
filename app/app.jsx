import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from 'TodoApp'

var App = React.createClass({
	render: function() {
		//put your component below if needed
	}
})

//render() - a function from ReactDOM package
ReactDOM.render(
			<App />,
			document.getElementById('app')
);