// // app styles
import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Notepad from './notepad';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Notepad />
  </Provider>,
  document.getElementById('app'),
);
