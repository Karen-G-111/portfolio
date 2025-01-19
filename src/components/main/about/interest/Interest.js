import style from './Interest.module.css'
import InterestItem from './InterestItem'

import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'

function Interest() {

    return (<div className={style.block}    >
        <InterestItem text="Sport" imgHref={img1} />
        <InterestItem text="Lorem Ipsum" imgHref={img2} />
        <InterestItem text="Development" imgHref={img3} />
        <InterestItem text="Analysis" imgHref={img4} />
        <InterestItem text="Dolor Sitema" imgHref={img5} />
    </div>)
}

export default Interest