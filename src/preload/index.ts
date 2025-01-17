import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { getNotes, saveNote, deleteNote, updateNote, getNoteByName } from '../main/lib'
import { createIpcRenderer } from './createIpcRenderer'
import type { NotesApi } from '../shared/types'

const ipcRenderer = createIpcRenderer<NotesApi>()

// Custom APIs for renderer
const api = {
  getNoteByName: (...args: Parameters<typeof getNoteByName>) =>
    ipcRenderer.invoke('getNoteByName', ...args),
  getNotes: (...args: Parameters<typeof getNotes>) => ipcRenderer.invoke('getNotes', ...args),
  saveNote: (...args: Parameters<typeof saveNote>) => ipcRenderer.send('saveNote', ...args),
  deleteNote: (...args: Parameters<typeof deleteNote>) => ipcRenderer.send('deleteNote', ...args),
  updateNote: (...args: Parameters<typeof updateNote>) => ipcRenderer.send('updateNote', ...args)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
