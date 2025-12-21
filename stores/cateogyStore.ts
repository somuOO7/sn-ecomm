import { create } from "zustand";

interface CategoryState {
  cateogries: string[];
  selectedCategoryIdx: number;
  setCategories: (categories: string[]) => void;
  setSelectedCategoryIdx: (idx: number) => void;
}

export const useCategory = create<CategoryState>((set) => ({
  cateogries: [] as string[],
  selectedCategoryIdx: 0,
  setCategories: (categories: string[]) => set({ cateogries: categories }),
  setSelectedCategoryIdx: (idx: number) => set({ selectedCategoryIdx: idx }),
}));