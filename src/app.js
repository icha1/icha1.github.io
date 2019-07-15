import React, {Component} from 'react'
import ReactDom from 'react-dom'
import ChatRoom from './components/ChatRoom'

class App extends Component {

	render(){
		return (
			<div>
				<ChatRoom />
			</div>
		)
	}
}

ReactDom.render(<App />, document.getElementById('app'))