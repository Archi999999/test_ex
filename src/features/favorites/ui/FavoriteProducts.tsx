import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import {favoritesSelector} from "@/features/favorites/model/selectors";

import style from './FavoriteProducts.module.scss'
import {removeProductById} from "@/features/favorites/model/slice";

const FavoriteProducts = () => {
    const products = useSelector(favoritesSelector)
    const dispatch = useDispatch();

    const handleRemoveProduct = (id: number) => {
        dispatch(removeProductById(id))
    }

    return (
        <div className={style.favorites}>
            <h1>Favorite</h1>
            <hr className={style.line}/>
            <span className={style.items_count}>{products.length} item(s)</span>
            {products.map(product => (
                <div key={product.id} className={style.product}>
                    <div className={style.left_side}>
                        <Image src={product.image} width={134} height={178} alt={'image'}/>
                        <div className={style.description}>
                            <span>{product.category}</span>
                            <h3>{product.title}</h3>
                        </div>
                    </div>
                    <div className={style.right_side}>
                        <span className={style.price}>{product.price} $</span>
                        <button className={style.button_remove} onClick={()=>handleRemoveProduct(product.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FavoriteProducts;