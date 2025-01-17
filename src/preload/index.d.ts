import { ElectronAPI } from '@electron-toolkit/preload'
import type { NotesApi } from 'src/shared/types'

declare global {
  interface Window {
    electron: ElectronAPI
    api: NotesApi
  }
}
