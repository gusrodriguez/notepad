import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import TweenMax from "gsap/umd/TweenMax";
import DeleteIcon from '../delete-icon';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleOnEnter = this.handleOnEnter.bind(this);
    this.handleOnExit = this.handleOnExit.bind(this);
    this.registerAnimationCallback = this.registerAnimationCallback.bind(this);
  }

  handleOnEnter(node) {
    TweenMax.from(node, 0.3, {
      alpha: 0,
      delay: 1,
      onComplete: this.animationCallback
    })
  }

  handleOnExit(node) {
    TweenMax.to(node, 0.3, {
      alpha: 0,
      onComplete: this.animationCallback
    })
  }

  registerAnimationCallback(node, done) {
    this.animationCallback = done;
  }

  render() {
    const { props } = this;
    const deleteIcon = props.id ? <DeleteIcon id={props.id} deleteNote={props.deleteNote}/> : null;
    const columnClassName = props.id ? 'list__column--left' : 'list__column--empty';
    const rowClassName = props.id ? 'list__row' : 'list__row empty';
    return (
      <Transition
        onEnter={this.handleOnEnter}
        onExit={this.handleOnExit}
        addEndListener={this.registerAnimationCallback}
        in={props.in}
        onExited={props.onExited}
        unmountOnExit={false}
      >
        <div className={rowClassName}>
          <div className={columnClassName}>
            {props.text}
          </div>
          <div className="list__column--right">
            {deleteIcon}
          </div>
        </div>
      </Transition>
    );
  }
}

export default ListItem;
