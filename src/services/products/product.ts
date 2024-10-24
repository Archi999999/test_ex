import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "@/services/products/types";

interface GetAllProductsParams {
    category?: string;
    sort?: string;
    limit?: number;
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query <Product[], GetAllProductsParams>({
            query: (params) => {
                const { category, ...restParams } = params;

                if (category) {
                    return ({params: restParams, url: `/category/${category}`})
                }

                return ({params: restParams, url: '/'})
            },
        }),
    }),
})

export const { useLazyGetAllProductsQuery } = productsApi