import {Layout} from "@/widgets/Layout/Layout";
import {GetServerSideProps} from "next";
import {Product} from "@/services/products/types";
import Image from "next/image";

import style from './AboutProduct.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "@/features/favorites/model/slice";
import {HeartIcon} from "@/shared/icon/Heart";
import {favoritesIdsSelector} from "@/features/favorites/model/selectors";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;

    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()

    return {
        props: {
            product: data,
        },
    };
};

interface Props {
    product: Product
}

const AboutProduct = ({product}: Props) => {
    const dispatch = useDispatch();
    const favoritesIds = useSelector(favoritesIdsSelector);
    const isFavorite = favoritesIds.includes(product.id)

    const handleAddFavorite = () => {
        dispatch(addProduct(product))
    }

    return (
        <Layout>
            <section className={style.about_product_container}>
                <span className={style.span_path}>Main {'>'} Catalog {'>'} {product.title}</span>
                <div className={style.about_product}>
                    <Image src={product.image} width={192} height={256} alt={'image'}/>
                    <div className={style.info}>
                        <div className={style.info_header}>
                            <div>
                                <h3>{product.title}</h3>
                                <span>{product.rating.rate} stars ({product.rating.count} rated)</span>
                            </div>
                            <button  disabled={isFavorite} className={style.button_favorite} onClick={handleAddFavorite}>
                                {isFavorite ? 'Added' : 'Add'} to favorite
                                <HeartIcon color={isFavorite ? 'red' : ''}/>
                            </button>
                        </div>
                        <div className={style.info_bottom}>
                            <div className={style.description}>
                                <h4>Description</h4>
                                {product.description}
                            </div>
                            <div className={style.price_container}>
                                <span className={style.price}>{product.price} $</span>
                                <button className={style.button_buy}>Купить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AboutProduct