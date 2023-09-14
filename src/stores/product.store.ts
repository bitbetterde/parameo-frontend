import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { IProduct } from "@interfaces/IProduct";
import { productService } from "@services";

interface ProductStore {
  allProducts: IProduct[];
  selectedProduct: IProduct | null;
  loadAllProducts: () => Promise<void>;
  loadProduct: (id: number) => Promise<void>;
}

const useProductStore = create<ProductStore>()(
  devtools((set, get) => ({
    allProducts: [],
    selectedProduct: null,
    loadAllProducts: async () => {
      if (!get().allProducts.length) {
        const allProducts = await productService.getProducts();
        set((state) => ({ ...state, allProducts }));
      }
    },
    loadProduct: async (id) => {
      if (!get().selectedProduct || get().selectedProduct?.id !== id) {
        const product = await productService.getProduct(id);
        set((state) => ({ ...state, selectedProduct: product }));
      }
    },
  }))
);

export default useProductStore;
