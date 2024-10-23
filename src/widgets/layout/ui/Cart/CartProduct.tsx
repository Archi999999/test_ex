import {Product} from "@/services/products/types";
import Image from "next/image";

import style from './CartProduct.module.scss'

interface Props {
    product: Product
}

export const CartProduct = ({product}: Props) => {
    return (
        <div className={style.cart}>
            <div className={style.header_cart}>
                <div>
                    <span>{product.category}</span>
                    <h4>{product.title}</h4>
                </div>
                <button className={style.button_favorite}>
                    <Image src={'/assets/icons/heart.svg'} width={20} height={20} alt={'heart icon'}/>
                </button>
            </div>
            <div className={style.image_wrapper}>
                <Image src={product.image} layout="fill" objectFit="contain"  alt={'image product'}/>
            </div>
            <span>{product.price}</span>
        </div>
    )
}