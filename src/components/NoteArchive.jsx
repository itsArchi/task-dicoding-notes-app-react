import React from "react";
import NoteItem from "./NoteItem";

function NoteArchive({ notes, onDeleteNote, onArchiveNote }) {
  // const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="notes-archive">
      <h2>Arsip</h2>
      <div className="notes-archive__list">
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
      </div>
    </div>
  );
}

export default NoteArchive;
