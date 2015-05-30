import React from 'react';
import FluxComponent from 'flummox/component';
import {MessageList} from './MessageList';
import {MessageInput} from './MessageInput';

export class MessagesView extends React.Component {

  render() {
    return (
      <FluxComponent 
        connectToStores={'messages'}
        flux={this.props.flux}
      >
        <MessageInput/>
        <MessageList/>
      </FluxComponent>
   
    );
  }
}