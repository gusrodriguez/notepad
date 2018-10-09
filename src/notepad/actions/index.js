import {
  DISPLAY_WIDGET,
  CLOSE_WIDGET,
  ADD_NOTE,
  DELETE_NOTE,
} from './types';

const maxNotes = 9999;

const displayWidget = () => {
  return {
    type: DISPLAY_WIDGET,
    payload: true,
  }
};

const closeWidget = () => {
  return {
    type: CLOSE_WIDGET,
    payload: false,
  };
};

const addNote = (text) => {
  return {
    type: ADD_NOTE,
    payload: {
      id: Math.floor(Math.random() * maxNotes),
      text,
    },
  };
};

const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};

export default {
  addNote,
  displayWidget,
  closeWidget,
  deleteNote,
};
