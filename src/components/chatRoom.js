import React, {Component} from 'react'

class ChatRoom extends Component {
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
	componentDidMount(){
		var _this = this
		firebase.database().ref('messages/').on('value', function(snapshot){
			
			var currentThread = snapshot.val()
			console.log(JSON.stringify(currentThread))

			var timestamps = Object.keys(currentThread).sort()

			// var thread = []
			// for (var i=0; i<timestamps.length; i++){
			// 	var timestamp = timestamps[i]
			// 	var pkg = currentThread[timestamp]
			// 	thread.push(pkg)
			// }

			var thread = timestamps.map(timestamp =>
				currentThread[timestamp]
			)

			_this.setState({
				thread
			})
		})
	}

	submit(event){
		var pkg = {
			username: this.state.username, 
			message: this.state.message,
			id: Math.floor(Date.now() / 1000)
		}

		console.log(JSON.stringify(pkg))
		
		//submit to Firebase
		firebase.database().ref('messages/'+pkg.id).set(pkg)
		// var thread = [...this.state.thread, pkg]
		// //thread.push(pkg)
		// this.setState({
		// 	thread,
		// 	username: '',
		// 	message:'' 	
		// })

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
				{msg.username} : {msg.message}
				</li>
			)
		})

		return (
			<div>
			This is the Chatroom!<br /> 

			<input onChange={this.updateUserName} id="username" type="text" placeholder="Username" value={this.state.username}/><br />
			<textarea onChange={this.updateMessage} id="message" placeholder="Message" value={this.state.message}></textarea><br />
			<button onClick={this.submit}>Send Message</button> 

			<h2>Conversation</h2>
			<ul>
				{conversation}
			</ul>
			</div> 
		)
	}
}

export default ChatRoom