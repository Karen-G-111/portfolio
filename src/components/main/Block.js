import style from './Block.module.css';

function Block({ tag, title }) {
    return (<div className={style.block}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.content}>
            {tag}
        </div>
    </div>)
}

export default Block;