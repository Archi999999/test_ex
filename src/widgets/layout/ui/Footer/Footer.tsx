import style from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={`main_container ${style.footer}`}>
            © ООО “Gushop” 2002—2019. All rights reserved
        </div>
    );
};
