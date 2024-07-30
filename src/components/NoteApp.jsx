import React from "react";
import NoteList from "./NoteList";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteArchive from "./NoteArchive";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: '',
    };
  
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
  }
  
  onSearchQueryChange(event) {
    this.setState({ searchQuery: event.target.value });
  }
  
  onArchiveNoteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      };
    });
  }
  
  onDeleteNoteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  }
  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }
  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    const activeNotes = filteredNotes.filter(note => !note.archived);
    const archivedNotes = filteredNotes.filter(note => note.archived);
    
    return (
      <>
        <header className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
            <input
              type="text"
              placeholder="Cari catatan..."
              value={this.state.searchQuery}
              onChange={this.onSearchQueryChange}
            />
          </div>
        </header>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={activeNotes}
            onDeleteNote={this.onDeleteNoteHandler}
            onArchiveNote={this.onArchiveNoteHandler}
          />
          <NoteArchive
            notes={archivedNotes}
            onDeleteNote={this.onDeleteNoteHandler}
            onArchiveNote={this.onArchiveNoteHandler}
          />
        </div>
      </>
    );
    
  }
  
}

export default NoteApp;