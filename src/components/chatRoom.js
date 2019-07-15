import React, {Component} from 'react'

class Chatroom extends Component {
	constructor(props, context){
		super(props, context)
		this.submit = this.submit.bind(this)
		this.updateUserName = this.updateUserName.bind(this)
		this.updateMessage = this.updateMessage.bind(this)
		this.state = {
			username: '',
			message: ''

		}
	}

	submit(event){
		var pkg = {
			username: this.state.username, 
			message: this.state.message
		}
		console.log('submit: '+JSON.stringify(pkg))

	}

	updateUserName(event){
		console.log('updateUserName: '+event.target.value)
		this.setState({
			username: event.target.value
		})
	}

	updateMessage(event){
		console.log('updateMessage: '+event.target.value)
		this.setState({
			message: event.target.value
		})
	}


	render() {
		return (
			<div>
			This is the Chatroom!<br /> 

			<input onChange={this.updateUserName} id="username" type="text" placeholder="Username" /><br />
			<textarea onChange={this.updateMessage} id="message" placeholder="Message"></textarea><br />
			<button onClick={this.submit}>Send Message</button> 
			</div> 
		)
	}
}

export default Chatroom