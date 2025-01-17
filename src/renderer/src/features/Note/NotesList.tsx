import { useNotes } from './hooks/useNotes'

function NotesList() {
  const notes = useNotes()
  return (
    <ul className="notes-list">
      {notes.map((note) => (
        <li key={note.name} className="note-item">
          <h3>{note.name}</h3>
          <p>{note.content}</p>
          <p>{note.timestamp.toLocaleString()}</p>
        </li>
      ))}
    </ul>
  )
}

export default NotesList
