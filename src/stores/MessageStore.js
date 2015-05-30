import { Store } from 'flummox';

export class MessageStore extends Store {

  constructor(flux) {
    super();

    const messageActionIds = flux.getActionIds('messages');
    this.register(messageActionIds.createMessage, this.handleNewMessage);

    this.state = {
      messages: ['hello', 'goodbye'],
    };
  }

  handleNewMessage(message) {
    this.setState({
      messages: this.state.messages.concat([message]),
    });
  }

}