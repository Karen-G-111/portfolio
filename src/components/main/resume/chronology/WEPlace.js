import style from './WEPlace.module.css'

function WEPlace({ major, name, text }) {
    return (<div className={style.block}>
        <p className={style.name}>{name}</p>
        <p className={style.major}>{major}</p>
        <p className={style.text}>{text}</p>
    </div>)
}

export default WEPlace