import {Catalog} from "@/widgets/Catalog/Catalog";
import {Layout} from "@/widgets/Layout/Layout";
import {FiltersBlock} from "@/widgets/FiltersBlock/FiltersBlock";

import style from './MainPage.module.scss'

const ProductPage = () => {

    return (
        <Layout title="MainPage">
            <main className={style.main}>
                <FiltersBlock/>
                <Catalog/>
            </main>
        </Layout>
    );
}

export default ProductPage;