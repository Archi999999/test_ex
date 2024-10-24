import Link from "next/link";
import Image from "next/image";

import style from './Header.module.scss'

export const Header = ({setFavoriteOpen}: {setFavoriteOpen: (value: boolean)=>void}) => {

    return (
        <header className={style.header}>
            <div className={`main_container ${style.header_top}`}>
                <Image src="/assets/images/logo.svg" width={116} height={40} alt="logo" className={style.logo}/>
                <Image src="/assets/images/logo2.svg" width={51} height={45} alt="logo" className={style.logo_2}/>
                <input placeholder="Search"/>
                <button onClick={() => setFavoriteOpen(true)} className={style.button}>
                    <Image src={'/assets/icons/heart.svg'} className={style.favorite_icon} width={20} height={20} alt={'heart icon'}/>
                    Favorite
                </button>
            </div>
            <hr className={style.line}/>
            <nav className={`main_container ${style.links}`}>
                <Link href="/">Main page</Link>
                <Link href="/delivery">Delivery</Link>
                <Link href="/contact">Contacts</Link>
                <Link href="/blog">Blog</Link>
            </nav>
            <hr className={style.line}/>
        </header>
    )
}