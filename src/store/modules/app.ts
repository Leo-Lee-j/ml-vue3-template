import { defineStore } from 'pinia'
// @ts-ignore
import { createStorage } from '@/utils/Storage'
import { store } from '@/store'
import { DEVICE } from '@/store/mutation-types'

const Storage = createStorage({ storage: localStorage })

export interface ISystem {
  device: string;
  originalRoute: string;
  announcement: string;
  terminalStatus: string;
  festival: string;
  openContactMe: number;
  openUserModule: number;
}

export const useAppStore = defineStore({
  id: 'app-system',
  state: (): ISystem => <ISystem>({
    device: Storage.getCookie(DEVICE) || 'PC',
    originalRoute: 'Dashboard'
  }),
  getters: {
    getDevice (): string {
      return this.device
    },
    getOriginalRoute (): string {
      return this.originalRoute
    }
  },
  actions: {
    setDevice (device: string) {
      Storage.setCookie(DEVICE, device)
      this.device = device
    },
    setOriginalRoute (originalRoute: string) {
      this.originalRoute = originalRoute
    }
  }
})

// Need to be used outside the setup
export function useUserStoreWidthOut () {
  return useAppStore(store)
}
