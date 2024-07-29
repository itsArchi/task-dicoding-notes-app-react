import React from 'react'

function NoteItemAction({ onDeleteNote, onArchiveNote }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={onDeleteNote}>Delete</button>
      <button className="note-item__archive-button" onClick={onArchiveNote}>Arsipkan</button>
    </div>
  );
}

export default NoteItemAction