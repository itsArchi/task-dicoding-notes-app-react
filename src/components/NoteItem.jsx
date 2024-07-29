import React from 'react'
import NoteItemBody from './NoteItemBody'
import NoteItemAction from './NoteItemAction'
import { showFormattedDate } from '../utils'

function NoteItem({ id, title, body, createdAt, onDeleteNote, onArchiveNote }) {
  return (
    <div className="note-item">
        <NoteItemBody id={id} title={title} body={body} createdAt={showFormattedDate(createdAt)} />
        <NoteItemAction onDeleteNote={onDeleteNote} onArchiveNote={onArchiveNote}/>
    </div>
  )
}

export default NoteItem