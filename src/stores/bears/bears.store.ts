// Definición del store de zustand ( con ts )

import { create } from 'zustand'

interface BearState {
  blackBears: number,
  polarBears: number,
  pandaBears: number,

  increaseBlackBears: (by: number) => void
}

export const useBearStore = create<BearState>()( ( set ) => ( {
  blackBears: 0,
  pandaBears: 1,
  polarBears: 10,

  increaseBlackBears: (by: number) => set((state) => ({blackBears: state.blackBears + by})),

} ) )