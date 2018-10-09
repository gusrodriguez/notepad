import React from 'react';
import DeleteIcon from '../delete-icon';

function ListItem(props) {
  const deleteIcon = props.id ? <DeleteIcon id={props.id} deleteNote={props.deleteNote} /> : null; 
  const columnClassName = props.id  ? 'list__column--left' : 'list__column--empty';
  const rowClassName = props.id  ? 'list__row' : 'list__row empty';
  return (
    <div className={rowClassName}>
      <div className={columnClassName}>
        {props.text}
      </div>
      <div className="list__column--right">
        {deleteIcon}
      </div>
    </div>
  );
}

export default ListItem;
