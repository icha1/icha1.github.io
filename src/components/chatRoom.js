import React, {Component} from 'react'

class Chatroom extends Component {
	constructor(props, context){
		super(props, context)
		this.submit = this.submit.bind(this)
		this.updateUserName = this.updateUserName.bind(this)
		this.updateMessage = this.updateMessage.bind(this)
		this.state = {
			username: '',
			message: '',
			thread: []

		}
	}

	submit(event){
		var pkg = {
			username: this.state.username, 
			message: this.state.message
		}
	
		var thread = [...this.state.thread, pkg]
		//thread.push(pkg)
		this.setState({
			thread
		})

	}

	updateUserName(event){
		this.setState({
			username: event.target.value
		})
	}

	updateMessage(event){
		this.setState({
			message: event.target.value
		})
	}


	render() {
		var conversation = this.state.thread.map(function(msg,i){
			return (
				<li key={i}>
				{msg.message}
				</li>
			)
		})

		return (
			<div>
			This is the Chatroom!<br /> 

			<input onChange={this.updateUserName} id="username" type="text" placeholder="Username" /><br />
			<textarea onChange={this.updateMessage} id="message" placeholder="Message"></textarea><br />
			<button onClick={this.submit}>Send Message</button> 

			<h2>Conversation</h2>
			<ul>
				{conversation}
			</ul>
			</div> 
		)
	}
}

export default Chatroom