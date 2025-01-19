import TitleCard from './TitleCard';

import style from './TitleInfo.module.css'

function TitleInfo() {
    return (<div className={style.block}>
        <TitleCard num="2+" text="Years Experiance" />
        <TitleCard num="10+" text="Happy Clients" />
        <TitleCard num="20+" text="Projects Done" />
        <TitleCard num="3" text="Get Awards" />
    </div>)
}

export default TitleInfo;