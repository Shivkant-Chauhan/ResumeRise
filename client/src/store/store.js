import { create } from 'zustand';

const useStore = create((set) => ({
  isUserAuth: false,
  loggedIn: () => set((state) => ({ isUserAuth: true })),
  loggedOut: () => set((state) => ({ isUserAuth: false }))
}))

export default useStore;