import Link from "next/link";
import Image from "next/image";

import style from './Header.module.scss'

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={`main_container ${style.header_top}`}>
                {/*<div>*/}
                    <Image src="/assets/images/logo.svg" width={116} height={40} alt="logo" className={style.logo}/>
                    <Image src="/assets/images/logo2.svg" width={51} height={45} alt="logo" className={style.logo_2}/>
                    <input placeholder="Search" />
                {/*</div>*/}
                <button/>
            </div>
            <div className={`main_container ${style.links}`}>
                <Link href="/">Main page</Link>
                <Link href="/delivery">Delivery</Link>
                <Link href="/contact">Contacts</Link>
                <Link href="/blog">Blog</Link>
            </div>
        </div>
    )
}