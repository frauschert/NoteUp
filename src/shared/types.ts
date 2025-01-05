export interface Note {
  name: string
  content: string
  timestamp: Date
}

export type GetNotes = () => Promise<Note[]>
export type SaveNote = (name: string, content: string) => Promise<void>
export type DeleteNote = (name: string) => Promise<void>
export type UpdateNote = (oldName: string, newName: string, content: string) => Promise<void>
