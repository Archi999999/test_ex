import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {Layout} from "@/widgets/Layout/Layout";

const MainPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/product');
    }, [router]);


    return <Layout>
        <h3>Loading...</h3>
    </Layout>
}

export default MainPage;