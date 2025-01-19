import style from './BrandItem.module.css'

function BrandItem({ imgHref }) {
    return (<div className={style.block}>
        <img src={imgHref} draggable="false" />
    </div>)
}

export default BrandItem;