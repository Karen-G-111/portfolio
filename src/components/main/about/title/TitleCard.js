import styel from "./TitleCard.module.css"

function TitleCard({ num, text }) {

    return (<div className={styel.block}>
        <p className={styel.num}>{num}</p>
        <p className={styel.text}>{text}</p>
    </div>)
}

export default TitleCard