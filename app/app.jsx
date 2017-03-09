
import React from 'react'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Example from 'Example'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


var App = React.createClass({
	render: function() {
		return (
			<div class="container">
				<MuiThemeProvider muiTheme={getMuiTheme()}>
    			<Example />
  			</MuiThemeProvider>
			</div>
		)

	}
})

const appDOM = document.getElementById('app')
//render() - a function from ReactDOM package
ReactDOM.render(
			<App />, appDOM
);
