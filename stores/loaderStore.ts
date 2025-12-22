import { create } from "zustand";

interface LoaderState {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useLoader = create<LoaderState>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));