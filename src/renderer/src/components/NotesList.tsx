import { useEffect, useState } from 'react'
import type { Note } from '../../../shared/types'

const NotesList = () => {
  const [notes, setNotes] = useState<Note[]>([])
  useEffect(() => {
    window.api.getNotes().then((notes) => {
      setNotes(notes)
    })
  }, [])
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.name} className="note-item">
          <h3>{note.name}</h3>
          <p>{note.content}</p>
          <p>{note.timestamp.toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}

export default NotesList
