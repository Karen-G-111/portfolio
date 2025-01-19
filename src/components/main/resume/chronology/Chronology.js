import style from "./Chronology.module.css"
import WEPlace from "./WEPlace";

function Chronology({ chron }) {

    const arr = chron.map((v, i) => {
        return <WEPlace key={i} major={v.major} name={v.name} text={v.text} />
    })

    return (<div className={style.block}>
        {arr}
    </div>)
}

export default Chronology;