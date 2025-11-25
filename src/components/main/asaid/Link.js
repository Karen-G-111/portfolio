import style from './Link.module.css'

function Link({ svg, hover, to }) {
    return (<div className={`${style.block} ${hover}`}>
        <a href={to} target='_blank'>
            {svg}
        </a>
    </div>)
}

export default Link;