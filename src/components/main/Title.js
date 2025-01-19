import style from './Title.module.css';

function Title({ title, tag }) {

    return (<div className={style.block}>
        <h1 className={style.title}><span>{title}</span></h1>
        <div className={style.content}>{tag}</div>
    </div>)
}

export default Title;