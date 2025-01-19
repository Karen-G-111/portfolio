import style from "./Logo.module.css";

function Logo() {
    return (<a className={style.logo} title="Gstar">
        <span className={style.G}>G</span>
        <span>star</span>
    </a>);
}

export default Logo;