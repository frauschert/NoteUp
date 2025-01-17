import { useEffect, useState } from 'react'
import type { Note } from 'src/shared/types'

export function useNoteByName(name: string) {
  const [note, setNote] = useState<Note | null>(null)
  useEffect(() => {
    window.api.getNoteByName(name).then((note) => {
      setNote(note)
    })
  }, [name])
  return note
}
