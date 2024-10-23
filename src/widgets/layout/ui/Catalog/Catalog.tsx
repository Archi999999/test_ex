import {useGetAllProductsQuery} from "@/services/products/product";

import {CartProduct} from "@/widgets/layout/ui/Cart/CartProduct";
import style from './Catalog.module.scss'

export const Catalog = () => {
    const { data: products } = useGetAllProductsQuery({});

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