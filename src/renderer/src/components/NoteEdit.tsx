export function NoteEdit(): JSX.Element {
  return (
    <div className="note-edit">
      <input type="text" placeholder="Note name" />
      <textarea style={{ width: '100%' }} />
    </div>
  )
}
