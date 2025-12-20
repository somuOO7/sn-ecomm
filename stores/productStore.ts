import { Product } from '@/models/Product';
import { create } from 'zustand';

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
  removeProducts: () => void;
}

export const useProduct = create<ProductState>((set) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }),
  removeProducts: () => set({ products: [] }),
}));