import style from './MostRecentWork.module.css'

function MostRecentWork({ svg, title, text }) {
    return (<div className={style.card}>
        <span className={style.svg}>{svg}</span>
        <p className={style.title}>{title}</p>
        <p className={style.text}>{text}</p>
    </div>)
}

export default MostRecentWork