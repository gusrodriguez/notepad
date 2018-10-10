import React from 'react';
import styles from './styles.scss';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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
  render() {
    if (!this.props.visible) return null;

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
    );
  }
}

export default Widget;
