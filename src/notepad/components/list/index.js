import React from 'react';
import ListItem from './list-item';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import styles from './styles.scss';

function List(props) {
  let rows = props.notes.map((note, index) => (
    // eslint-disable-next-line
    <ListItem key={`note_row_${note.id}`} id={note.id} text={note.text} deleteNote={props.deleteNote} />
  ));

  if (rows.length === 0) {
    rows = [
      <ListItem key="default" text="No notes yet..." />,
    ];
  }

  return (
    <section className="list">
      <h1>Your notes</h1>
      <div className="list__row">
        <hr />
      </div>
      <TransitionGroup appear={true}>
       {rows}
      </TransitionGroup>
    </section >
  );
}

export default List;
