import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "@/services/products/types";

interface GetAllProductsParams {
    queryParams?: string;
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query <Product[], GetAllProductsParams>({
            query: (params) => {
                const { queryParams } = params || {}
                return `/${queryParams ? queryParams : ''}`
            },
        }),
    }),
})

export const { useGetAllProductsQuery } = productsApi