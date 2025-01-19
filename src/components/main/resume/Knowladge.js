import style from './Knowladge.module.css';

function Knowladge({ list }) {

    const arr = list.map((v, i) => {
        return <span className={style.item} key={i}>{v}</span>
    })

    return (<div className={style.block}>
        {arr}
    </div>)
}

export default Knowladge;