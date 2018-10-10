import React from 'react';
import Transition from 'react-transition-group/Transition';
import TweenMax from 'gsap/umd/TweenMax';
import styles from './styles.scss';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnEnter = this.handleOnEnter.bind(this);
    this.handleOnExit = this.handleOnExit.bind(this);
    this.registerAnimationCallback = this.registerAnimationCallback.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      inputValue: '',
    };
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  submit(e) {
    e.preventDefault();
    this.props.addNote(this.state.inputValue);
  }
  handleOnEnter(node, firstTime) {
    TweenMax.to(node, firstTime ? 0 : 0.3, {
      scale: 1,
      onComplete: this.animationCallback,
    });
  }
  handleOnExit(node) {
    TweenMax.to(node, 0.3, {
      scale: 0,
      onComplete: this.animationCallback,
    });
  }
  registerAnimationCallback(node, done) {
    this.animationCallback = done;
  }
  render() {

    let rows = this.props.notes.map((note, index) => (
      <div className="list__row" key={`note_row_${note.id}`}>
        <div className="list__column">
          <span className="widget__note">{note.text}</span>
        </div>
      </div>
    ));

    if (rows.length === 0) {
      rows = [
        <div className="list__row" key="default">
          <div className="list__column">
            <span className="widget__note" >No notes yet</span>
          </div>
        </div>,
      ];
    }
    return (
      <Transition
        in={this.props.visible}
        onEnter={this.handleOnEnter}
        onExit={this.handleOnExit}
        addEndListener={this.registerAnimationCallback}
        appear={true}
        unmountOnExit={false}
      >
        <aside className="widget">
          <section className="widget__modal">
            <header className="widget__header">
              <h2>New note</h2>
            </header>
            <section className="widget__list">
              {rows}
            </section>
            <footer>
              <form onSubmit={this.submit} className="widget__form">
                <input
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                  type="text"
                  className="widget__input"
                  placeholder="Type your note..."
                />
                <button onClick={this.submit} className="widget__button" type="submit">
                  Add
                </button>
              </form>
            </footer>
          </section>
        </aside>
      </Transition>
    );
  }
}

export default Widget;
