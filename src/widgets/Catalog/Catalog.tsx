import {useLazyGetAllProductsQuery} from "@/services/products/product";
import {CartProduct} from "@/widgets/Cart/CartProduct";

import style from './Catalog.module.scss'
import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/router";

const Catalog = () => {
    const [getProducts, {data: products, isError}] = useLazyGetAllProductsQuery()
    const [fetching, setFetching] = useState(false)
    const [limit, setLimit] = useState(6)
    const params = useSearchParams();
    const category = params?.get('category');
    // const limit = Number(params?.get('limit')) || 6;
    // const { replace } = useRouter()

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


    if (isError) {
        return <h3>Error</h3>;
    }

    return(
        <div className={style.catalog}>
            <span>Main {'>'} Catalog</span>
            <h2>Catalog</h2>
            <span>Price v</span>
            <div className={style.carts_block}>
                {products?.map(product=> <CartProduct key={product.id} product={product}/>)}
            </div>
        </div>
    )
}

export default Catalog;
