import React from 'react';
import Transition from 'react-transition-group/Transition';
import TweenMax from 'gsap/umd/TweenMax';
import PropTypes from 'prop-types';
import Validations from '../../validations';
import DeleteIcon from '../../delete-icon';
import styles from './styles.scss';

class WidgetListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnEnter = this.handleOnEnter.bind(this);
    this.handleOnExit = this.handleOnExit.bind(this);
    this.registerAnimationCallback = this.registerAnimationCallback.bind(this);
  }
  handleOnEnter(node) {
    TweenMax.from(node, 0.3, {
      height: 0,
      alpha: 0,
      delay: 1,
      onComplete: this.animationCallback,
    });
  }
  handleOnExit(node) {
    TweenMax.to(node, 0.3, {
      display: 'none',
      alpha: 0,
      onComplete: this.registerAnimationCallback,
    });
  }
  registerAnimationCallback(node, done) {
    this.animationCallback = done;
  }
  render() {
    const { note, deleteNote } = this.props;
    const validations = note.validations.length > 0 ? <Validations validations={note.validations} small /> : null;
    const deleteIcon = note.id ? <DeleteIcon id={note.id} deleteNote={deleteNote} small/> : null;
    return (
      <Transition
        in={this.props.in}
        onEnter={this.handleOnEnter}
        onExit={this.handleOnExit}
        addEndListener={this.registerAnimationCallback}
        appear
        unmountOnExit={false}
        {...this.props}
      >
        <div className="list__row">
          <div className="list__column widget-list-item--left">
            <span className="widget__note">{note.text}</span>
            {validations}
          </div>
          <div className="list__column widget-list-item--right">
            {deleteIcon}
          </div>
        </div>
      </Transition>
    );
  }
}

WidgetListItem.propTypes = {
  note: PropTypes.array.isRequired,
  deleteNote: PropTypes.func.isRequired,
  in: PropTypes.bool.isRequired,
};

export default WidgetListItem;
