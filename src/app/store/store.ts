import {configureStore} from '@reduxjs/toolkit'
import {productsApi} from "@/services/products/product";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})