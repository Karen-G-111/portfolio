import style from './TitleContent.module.css'

import TitleInfo from './TitleInfo';

function TitleContent() {
    return (<div>
        <p className={style.hello}>Hello I'm <span className={style.name}>Karen Galoyan</span>, a frontand developer</p>
        <p className={style.describe}>Hello i'm a Karen a front-end developer passionate about creating engaging and user-friendly web experiences</p>
        <TitleInfo />
    </div>)
}

export default TitleContent;