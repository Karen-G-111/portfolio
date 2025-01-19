import style from './Footer.module.css';

const date = new Date(Date.now());

function Footer({ isFullS = false }) {
    return (<footer className={`${style.footer} ${isFullS ? style.anotherFooter : ''}`}>
        <p className={style.text}>Copyright © <span>{date.getFullYear()}</span> <a>Gstar</a>. All Rights Reserved.</p>
    </footer>)
}

export default Footer;