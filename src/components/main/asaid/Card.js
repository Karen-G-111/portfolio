import style from './Card.module.css';

function Card({ svg, name, info }) {
    return (<div className={style.block}>
        <div className={style.icon}>
            <div>{svg}</div>
        </div>
        <div className={style.textinfo}>
            <p className={style.name}>{name}</p>
            <p className={style.text}>{info}</p>
        </div>
    </div>)
}

export default Card;