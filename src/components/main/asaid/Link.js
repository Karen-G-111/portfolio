import style from './Link.module.css'

function Link({ svg, hover }) {
    return (<div className={`${style.block} ${hover}`}>
        <a>
            {svg}
        </a>
    </div>)
}

export default Link;