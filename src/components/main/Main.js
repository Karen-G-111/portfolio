import style from './Main.module.css'

import { Outlet, useOutletContext } from 'react-router-dom'

function Main() {
    const { activePage } = useOutletContext();


    return (<main className={style.main}>
        <div className={style.body}>
            <Outlet context={{ activePage }} />
        </div>

    </main>)
}

export default Main