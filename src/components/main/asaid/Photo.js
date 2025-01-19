import style from "./Photo.module.css"

import img from "./test.png";

function Photo() {
    return (<div className={style.photo}>
        <img src={''} />
        <span className={style.circle}><span><span>Abailable for work</span></span></span>
    </div>)
}

export default Photo