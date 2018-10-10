import React from 'react';
import Transition from 'react-transition-group/Transition';
import TweenMax from 'gsap/umd/TweenMax';
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
    TweenMax.to(node, 0.3, { display: 'none', alpha: 0 });
  }
  registerAnimationCallback(node, done) {
    this.animationCallback = done;
  }
  render() {
    const { note } = this.props;
    return (
      <Transition
        in={this.props.in}
        onEnter={this.handleOnEnter}
        onExit={this.handleOnExit}
        addEndListener={this.registerAnimationCallback}
        appear={true}
        unmountOnExit={false}
      >
        <div className="list__row">
          <div className="list__column widget-list-item">
            <span className="widget__note">{note.text}</span>
          </div>
        </div>
      </Transition>
    );
  }
}

export default WidgetListItem;
