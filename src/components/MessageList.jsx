import React from 'react';

export class MessageList extends React.Component {
	render(){
		return (
			<ul>
				{this.props.messages.map((message) => {
					return (
						<li>{message}</li>
					)
				})}
			</ul>
		)
	}
}