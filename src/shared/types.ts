export interface Note {
  name: string
  content: string
  timestamp: Date
}

export type NotesApi = {
  getNoteByName: (name: string) => Promise<Note>
  getNotes: () => Promise<Note[]>
  saveNote: (name: string, content: string) => Promise<void>
  deleteNote: (name: string) => Promise<void>
  updateNote: (oldName: string, newName: string, content: string) => Promise<void>
}
