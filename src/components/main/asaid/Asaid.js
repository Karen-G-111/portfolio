import style from './Asaid.module.css';

import Contact from './Contact';
import Links from './Links';
import Name from './Name';
import Photo from './Photo';

function Asaid() {
    return (<div className={style.container}>
        <aside className={style.aside}>
            <div className={style.body}>
                <Photo />
                <Name />
                <Links />
                <Contact />
            </div>
        </aside>
    </div>);
}

export default Asaid;