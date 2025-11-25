import style from "./Photo.module.css"

import img from "./photo.jpg";

function Photo() {
    return (<div className={style.photo}>
        <img
            alt="photo"
            src={img} />

        <span className={style.circle}><span><span>Abailable for work</span></span></span>
    </div>)
}

export default Photo