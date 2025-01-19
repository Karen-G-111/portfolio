import style from './WorkFilter.module.css'

function WorkFilter({ list, activeNumber = 1, click }) {


    const arr = list.map((v, i) => {
        return <li
            onClick={() => { click(i + 1) }}
            key={i}
            className={`${style.item} ${!(activeNumber - i - 1) ? style.active : ''}`}>{v}</li>
    })

    return (<div>
        <ul className={style.list}>
            {arr}
        </ul>
    </div>)
}

export default WorkFilter;