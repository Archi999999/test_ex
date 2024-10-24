import {RootState} from "@/app/store/store";
import {Product} from "@/services/products/types";

export const favoritesSelector = (state: RootState): Product[] => state.favoriteSlice
export const favoritesIdsSelector = (state: RootState): number[] => state.favoriteSlice.map((favorite) => favorite.id)