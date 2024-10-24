import {useLazyGetAllProductsQuery} from "@/services/products/product";
import {CartProduct} from "@/widgets/Cart/CartProduct";
import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";

import style from './Catalog.module.scss'

export const Catalog = () => {
    const [getProducts, {data: products, isError}] = useLazyGetAllProductsQuery()
    const [fetching, setFetching] = useState(false)
    const [limit, setLimit] = useState(6)
    const [sort, setSort] = useState<'asc' | 'desc'>('asc')
    const params = useSearchParams();
    const category = params?.get('category');

    useEffect(() => {
        if (category) {
            getProducts({category})
            setLimit(6)
            setFetching(false)
        } else {
            getProducts({limit: 6})
        }
    }, [category]);

    useEffect(() => {
        if (fetching && limit < 20 ) {
            getProducts({limit: limit + 6, ...(category && { category })}).then(()=> {
                setFetching(false)
                setLimit(prevState => prevState + 6);
            })

        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return ()=> document.removeEventListener("scroll", scrollHandler)
    }, []);

    const scrollHandler = (e: any) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 150){
            if (!fetching) {
                setFetching(true)
            }
        }
    }
    const handleChangeSort = () => {
        setSort(prev => prev === 'asc' ? 'desc' : 'asc')
    }

    const sortedProducts = sort === 'asc'
        ? products?.slice().sort((a, b) => a.price - b.price)
        : products?.slice().sort((a, b) => b.price - a.price);


    if (isError) {
        return <h3>Error</h3>;
    }

    return(
        <div className={style.catalog}>
            <span className={style.span_path}>Main {'>'} <strong>Catalog</strong></span>
            <h2>Catalog</h2>
            <button className={style.button} onClick={handleChangeSort}>Price {sort === 'asc' ? '↓' : '↑'}</button>
            <div className={style.carts_block}>
                {sortedProducts?.map(product=> <CartProduct key={product.id} product={product}/>)}
            </div>
        </div>
    )
}

