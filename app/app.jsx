import React from 'react'
import ReactDOM from 'react-dom'
import Bootstrap from 'bootstrap.css'

import Example from 'Example'


var App = React.createClass({
	render: function() {
		return (
			<div class="container">
				<Example />
			</div>
		)

	}
})

const appDOM = document.getElementById('app')
//render() - a function from ReactDOM package
ReactDOM.render(
			<App />, appDOM
);