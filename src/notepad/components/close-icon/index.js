import React, { Component } from 'react';
import styles from './styles.scss';

class CloseIcon extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.closeWidget();
  }
  render() {
    if (!this.props.visible) return null;

    return (
      <aside className="close-icon" onClick={this.handleClick}>
        <svg width="90px" height="90px" xmlns='http://www.w3.org/2000/svg' data-name='Layer 1' viewBox='0 0 1024 1280'>
          <path d='M515 67.8c-243 0-440 197-440 440s197 440 440 440 440-197 440-440-197-440-440-440zm198 580.8c17.2 17.2 17.2 45 0 62.2-17.2 17.2-45 17.2-62.2 0L515 575 379.3 710.8c-17.2 17.2-45 17.2-62.2 0-17.2-17.2-17.2-45 0-62.2l135.8-135.8L317 377c-17.2-17.2-17.2-45 0-62.2 17.2-17.2 45-17.2 62.2 0L515 450.6l135.8-135.8c17.2-17.2 45-17.2 62.2 0 17.2 17.2 17.2 45 0 62.2L577.3 512.8 713 648.6z'
          />
        </svg>
      </aside>);
  }
}

export default CloseIcon;
