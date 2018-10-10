import {
  DISPLAY_WIDGET,
  CLOSE_WIDGET,
  ADD_NOTE,
  DELETE_NOTE,
} from './types';

const maxNotes = 9999;

const validate = (text) => {
  const validations = [];
  if ((/^\s*$/).test(text)) { 
    validations.push('Error: The note is empty.');
  }
  if (text.length > 100) {
    validations.push('Error: The Note exceeds 100 characters.');
  }
  return validations;
};

const displayWidget = () => {
  return {
    type: DISPLAY_WIDGET,
    payload: true,
  };
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
      validations: validate(text),
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
