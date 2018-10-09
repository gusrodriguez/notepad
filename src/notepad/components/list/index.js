import React from 'react';
import ListItem from '../list-item';
import styles from './styles.scss';

function List(props) {
  let rows = props.notes.map((note, index) => (
    // eslint-disable-next-line
    <ListItem key={`note_row_${index}`} id={note.id} text={note.text} deleteNote={props.deleteNote} />
  ));

  if (rows.length === 0) {
    rows = [
      <ListItem  text="No notes yet..." />,
    ];
  }

  return (
    <section className="list">
      <h1>Your notes</h1>
      <div className="list__row">
        <hr />
      </div>
      {rows}
    </section >
  );
}

export default List;
