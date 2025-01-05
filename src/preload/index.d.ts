import { ElectronAPI } from '@electron-toolkit/preload'
import type { GetNotes, SaveNote, DeleteNote, UpdateNote } from 'src/shared/types'

type NotesApi = {
  getNotes: GetNotes
  saveNote: SaveNote
  deleteNote: DeleteNote
  updateNote: UpdateNote
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: NotesApi
  }
}
