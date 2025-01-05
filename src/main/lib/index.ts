import { app } from 'electron'
import fs from 'node:fs/promises'
import path from 'node:path'
import { APP_NAME } from '../../shared/constants'
import { GetNotes } from '../../shared/types'

async function fileExists(name: string) {
  try {
    await fs.stat(name)
    return true
  } catch {
    return false
  }
}

export function getDocumentsPath() {
  return app.getPath('documents')
}

export function getNoteUpDir() {
  return path.join(getDocumentsPath(), APP_NAME)
}

export async function createNoteUpDir() {
  const dir = getNoteUpDir()
  const exists = await fileExists(dir)
  if (!exists) {
    await fs.mkdir(dir)
  }
}

export async function getNoteFileNames() {
  const files = await fs.readdir(getNoteUpDir(), { withFileTypes: false, encoding: 'utf-8' })
  return files.filter((file) => file.endsWith('txt'))
}

async function getNoteByName(name: string) {
  const stats = await fs.stat(path.join(getNoteUpDir(), name))
  const content = await fs.readFile(path.join(getNoteUpDir(), name), { encoding: 'utf-8' })
  return {
    name: name.replace(/\.txt$/, ''),
    content,
    timestamp: stats.mtime
  }
}

export const getNotes: GetNotes = async () => {
  const noteFileNames = await getNoteFileNames()
  return Promise.all(noteFileNames.map((name) => getNoteByName(name)))
}

export async function saveNote(name: string, content: string) {
  await fs.writeFile(path.join(getNoteUpDir(), `${name}.txt`), content)
}

export async function deleteNote(name: string) {
  await fs.unlink(path.join(getNoteUpDir(), `${name}.txt`))
}

export async function updateNote(oldName: string, newName: string, content: string) {
  await saveNote(newName, content)
  await deleteNote(oldName)
}
