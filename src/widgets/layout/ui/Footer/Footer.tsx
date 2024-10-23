import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={` ${style.footer}`}>
            <span className={'main_container'}>
                 © ООО “Gushop” 2002—2019. All rights reserved
            </span>
        </div>
    );
};
