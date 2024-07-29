import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onFormSubmitEventHandler = this.onFormSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const limit = 50;
    this.setState(() => {
      return {
        title: event.target.value.slice(0, limit),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onFormSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form className="note-input" onSubmit={this.onFormSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {50 - this.state.title.length}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            onChange={this.onTitleChangeEventHandler}
            value={this.state.title}
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
            onChange={this.onBodyChangeEventHandler}
            value={this.state.body}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;