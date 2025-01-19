import style from "./InterestItem.module.css"

function InterestItem({ text, imgHref }) {

    return (<div className={style.card}>
        <img className={style.img} src={imgHref} alt="" />
        <p className={style.text}>{text}</p>
    </div>)
}

export default InterestItem