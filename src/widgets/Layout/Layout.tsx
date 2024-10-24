import {PropsWithChildren, ReactNode} from "react";
import {Meta, MetaProps} from "@/shared/seo/Meta";
import {Header} from "@/widgets/Header/Header";
import {Footer} from "@/widgets/Footer/Footer";

type Props = {
    children?: ReactNode;
} & PropsWithChildren &
    Omit<MetaProps, 'children'>

export const Layout = ({children, ...rest}: Props) => {
    return (
        <Meta {...rest}>
            <Header/>
                <div className={`main_container page_container`}>
                       {children}
                </div>
            <Footer/>
        </Meta>
    );
}