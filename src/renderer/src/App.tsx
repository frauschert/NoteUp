import { NoteEdit } from './features/Note/NoteEdit'
import NotesList from './features/Note/NotesList'

function App() {
  return (
    <div className="grid-container">
      <NotesList />
      <NoteEdit />
    </div>
  )
}

export default App
