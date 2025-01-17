import { ipcRenderer } from 'electron'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createIpcRenderer<T extends Record<string, (...args: any[]) => any>>() {
  return {
    invoke<K extends keyof T & string>(channel: K, ...args: Parameters<T[K]>) {
      return ipcRenderer.invoke(channel, ...args)
    },
    send<K extends keyof T & string>(channel: K, ...args: Parameters<T[K]>) {
      ipcRenderer.send(channel, ...args)
    }
  }
}
