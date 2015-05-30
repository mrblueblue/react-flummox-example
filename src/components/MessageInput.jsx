import React from 'react';

export class MessageInput extends React.Component {

	constructor(){
		super();
		this.state={input:''};
	}

	render(){
		return (
			<div style={{display: 'flex', 'flex-direction': 'row'}}>
				<form onSubmit={this._handleSubmit.bind(this)}>
					<input type='text' value={this.state.input} onChange={this._handleChange.bind(this)} />
				</form>
				<button 
					type='submit' 
					onClick={this._handleSubmit.bind(this)}
				>
					Post
				</button>
			</div>
		)

	}

	_handleChange(event){
		let text = event.target.value
		this.setState({input: text})
	}

	_handleSubmit(e){
		e.preventDefault();
		let newMessage = this.state.input;
		this.props.flux.getActions('messages').createMessage(newMessage);
		this.setState({input:''});
	}

}