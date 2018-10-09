import React from 'react';
import { connect } from 'react-redux';
import List from './components/list';
import Widget from './components/widget';
import LaunchIcon from './components/launch-icon';
import CloseIcon from './components/close-icon';
import actions from './actions';
import styles from './styles.scss';

function Notepad(props) {
  const { addNote, displayWidget, closeWidget, deleteNote } = props;
  return (
    <section className="notepad">
      <List notes={props.notes} deleteNote={deleteNote} />
      <Widget addNote={addNote} visible={props.widgetVisible} notes={props.notes}/>
      <LaunchIcon displayWidget={displayWidget} visible={!props.widgetVisible} />
      <CloseIcon closeWidget={closeWidget} visible={props.widgetVisible} />
    </section>
  );
}

const mapStateToProps = (state) => {
  return { 
    widgetVisible: state.widgetVisible,
    notes: state.notes,
  };
};

export default connect(mapStateToProps, actions)(Notepad);

