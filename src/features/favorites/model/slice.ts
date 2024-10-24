import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "@/services/products/types";

type InitialState = Product[]

const initialState: InitialState = []

const favoriteProductsSlice = createSlice({
    initialState,
    name: "favoriteProducts",
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.push(action.payload)
        },
        removeProductById: (state, action: PayloadAction<number>) => {
            return state.filter(product => product.id !== action.payload);
        },
    }
})

export const { addProduct, removeProductById } = favoriteProductsSlice.actions;
export const favoriteSlice = favoriteProductsSlice.reducer;