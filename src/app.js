import React from 'react';
import {flux} from './flux';
import {MessagesView} from './components/Messages'

React.render(
  <MessagesView flux={flux} />, 
  document.getElementById('app')
);