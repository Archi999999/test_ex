import {Product} from "@/services/products/types";
import Image from "next/image";

import style from './CartProduct.module.scss'
import {useRouter} from "next/router";
import {HeartIcon} from "@/shared/icon/Heart";
import {useSelector} from "react-redux";
import {favoritesIdsSelector} from "@/features/favorites/model/selectors";

interface Props {
    product: Product
}

export const CartProduct = ({product}: Props) => {
    const {replace} = useRouter()
    const favoritesIds = useSelector(favoritesIdsSelector);
    const isFavorite = favoritesIds.includes(product.id)

    const selectProduct = () => {
        replace(`product/${product.id}`)
    }

    return (
        <div className={style.cart} onClick={selectProduct}>
            <div className={style.header_cart}>
                <div>
                    <span>{product.category}</span>
                    <h4>{product.title}</h4>
                </div>
                <div className={style.favorite_icon} >
                    <HeartIcon color={ isFavorite? 'red' : ''}/>
                </div>
            </div>
            <div className={style.image_wrapper}>
                <Image src={product.image} fill style={{objectFit: 'contain'}} priority alt={'image product'}
                       sizes="(max-width: 600px) 30vw, (min-width: 600px) 15vw"/>
            </div>
            <span className={style.price}>{`${product.price} $`}</span>
        </div>
    )
}