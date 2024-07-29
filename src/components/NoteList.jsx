import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDeleteNote, onArchiveNote }) {
  // const activeNotes = notes.filter((note) => !note.archived);
  // const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            archived={note.archived}
            onDeleteNote={() => onDeleteNote(note.id)}
            onArchiveNote={() => onArchiveNote(note.id)}
          />
        ))
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}

      {/* {archivedNotes.length > 0 ? (
        archivedNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            archived={note.archived}
            onDeleteNote={() => onDeleteNote(note.id)}
            onArchiveNote={() => onArchiveNote(note.id)}
          />
        ))
      ) : (
        <p className="notes-list__empty-message"></p>
      )} */}
    </div>
  );
}

export default NoteList;