import React, {Component} from 'react'
import ReactDom from 'react-dom'

class App extends Component {

	render(){
		return (
			<div>
				This is the React App!
			</div>
		)
	}
}

ReactDom.render(<App />, document.getElementById('app'))