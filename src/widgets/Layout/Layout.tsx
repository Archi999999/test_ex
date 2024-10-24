import {lazy, PropsWithChildren, ReactNode, Suspense, useState} from "react";
import {Meta, MetaProps} from "@/shared/seo/Meta";
import {Header} from "@/widgets/Header/Header";
import {Footer} from "@/widgets/Footer/Footer";

const FavoriteProducts = lazy(() => import('@/features/favorites/ui/FavoriteProducts'))

type Props = {
    children?: ReactNode;
} & PropsWithChildren &
    Omit<MetaProps, 'children'>

export const Layout = ({children, ...rest}: Props) => {
    const [favoriteOpen, setFavoriteOpen] = useState(false)

    return (
        <Meta {...rest}>
            <Header setFavoriteOpen={setFavoriteOpen}/>
            <div className={`main_container page_container`}>
                {favoriteOpen ?
                    (<Suspense fallback={<div>Loading...</div>}>
                        <FavoriteProducts/>
                    </Suspense>)
                    : (children)
                }
            </div>
            <Footer/>
        </Meta>
    );
}