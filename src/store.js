import { createStore } from 'redux';
import notepadReducer from './notepad/reducer';

const store = createStore(
  notepadReducer,
);

export default store;
