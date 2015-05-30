import { Flummox } from 'flummox';
import { MessageActions } from './actions/MessageActions';
import { MessageStore } from './stores/MessageStore';

class Flux extends Flummox {
  constructor() {
    super();
    this.createActions('messages', MessageActions);
    this.createStore('messages', MessageStore, this);
  }

}

export const flux = new Flux();