import { useEffect, useState } from 'react'
import { Note } from 'src/shared/types'

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([])
  useEffect(() => {
    window.api.getNotes().then((notes) => {
      setNotes(notes)
    })
  }, [])
  return notes
}
