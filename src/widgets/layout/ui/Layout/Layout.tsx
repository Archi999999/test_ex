import {Meta, MetaProps} from "@/shared/seo/Meta";
import {Header} from "@/widgets/layout/ui/Header/Header";
import {Footer} from "@/widgets/layout/ui/Footer/Footer";
import {PropsWithChildren, ReactNode} from "react";

type Props = {
    children?: ReactNode;
} & PropsWithChildren &
    Omit<MetaProps, 'children'>

export const Layout = ({children, ...rest}: Props) => {
    return (
        <Meta {...rest}>
            <Header />
                <div className={`main_container page_container`}>
                 {children}
                </div>
            <Footer/>
        </Meta>
    );
}