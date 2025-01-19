import { Link } from 'react-router-dom';
import style from './ReadyWork.module.css'

function ReadyWork({ click, isFullS = false }) {

    return (<div className={`${style.block} ${isFullS ? style.anotherBlock : ''}`}>
        <p className={`${style.bigText} ${isFullS ? style.anotherBigText : ''}`}>Are you Ready for your dream project to work with me?</p>
        <p className={style.text}>Let's embark on dream project and turn our shared aspirations into reality with creativity and determination</p>
        <Link onClick={click} className={style.button} to='/contact'>Let's Contact</Link>
    </div>)
}

export default ReadyWork;