import React from 'react';
import styles from './styles.scss';

class LaunchIcon extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.displayWidget();
  }
  render() {
    if (!this.props.visible) return null;

    return (
      <aside className='launch-icon' onClick={this.handleClick}>
        <svg width="80px" height="80px" xmlns='http://www.w3.org/2000/svg' viewBox='17 176.375 48 60'>
          <path d='M41 176.375c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm14.814 27.584c0 2.2-1.799 4-4 4H48.77c-2.199 0-5.328 1.215-6.951 2.699l-5.032 4.602c-1.624 1.484-2.952.899-2.952-1.301v-2c0-2.2-1.8-4-4-4h-.149c-2.2 0-4-1.8-4-4v-12.316c0-2.199 1.8-4 4-4h22.13c2.199 0 4 1.801 4 4v12.316h-.002z'
          />
        </svg>
      </aside>);
  }
}

export default LaunchIcon;
