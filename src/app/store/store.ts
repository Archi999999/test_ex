import {configureStore} from '@reduxjs/toolkit'
import {productsApi} from "@/services/products/product";
import {favoriteSlice} from "@/features/favorites/model/slice";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        favoriteSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
