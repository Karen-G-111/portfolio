import style from './Skills.module.css'

function Skills({ skills }) {
    let arr = skills.map((v, i) => {
        return (<div className={style.item} key={i}>
            <p className={style.text}><span>{v.name}</span><span>{v.percent}%</span></p>
            <span className={style.percent}><span style={{ width: v.percent + '%' }}></span></span>
        </div>)
    })
    return <div className={style.main}>
        {arr}
    </div>
}

export default Skills