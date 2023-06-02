import { create } from 'zustand'

export const useOffline = create((set)=>({
    offlineMode: false,
    setOfflineMode: () => set((state:any)=>({offlineMode: !state.offlineMode}))
}))