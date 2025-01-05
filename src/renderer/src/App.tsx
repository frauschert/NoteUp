import { NoteEdit } from './components/NoteEdit'
import NotesList from './components/NotesList'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="grid-container">
      <NotesList
        notes={[
          { name: 'Note 1', content: 'Content 1', timestamp: new Date() },
          { name: 'Note 2', content: 'Content 2', timestamp: new Date() }
        ]}
      />
      <NoteEdit />
      {/* <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div> */}
    </div>
  )
}

export default App
