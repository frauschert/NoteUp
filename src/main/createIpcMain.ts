import { ipcMain, IpcMainEvent, IpcMainInvokeEvent } from 'electron'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any

export function createIpcMain<T extends Record<string, AnyFunction>>() {
  return {
    ...ipcMain,
    on<K extends keyof T & string>(
      channel: K,
      listener: (event: IpcMainEvent, ...args: Parameters<T[K]>) => ReturnType<T[K]>
    ) {
      ipcMain.on(channel, listener)
    },
    handle<K extends keyof T & string>(
      channel: K,
      listener: (event: IpcMainInvokeEvent, ...args: Parameters<T[K]>) => ReturnType<T[K]>
    ) {
      ipcMain.handle(channel, listener)
    }
  }
}
