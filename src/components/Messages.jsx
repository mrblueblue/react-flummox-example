import React from 'react';
import FluxComponent from 'flummox/component';
import {MessageList} from './MessageList';

export class MessagesView extends React.Component {

  render() {
    return (
      <FluxComponent 
        connectToStores={'messages'}
        flux={this.props.flux}
      >
        <MessageList />
      </FluxComponent>
   
    );
  }

}