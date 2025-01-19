import { Outlet, useOutletContext } from 'react-router-dom';
import Asaid from './asaid/Asaid';
import style from './MainHelp.module.css'
import Footer from './Footer';

function MainHelp() {

    const { activePage } = useOutletContext();

    function load(arg) {
        activePage[1](arg);
    }

    return (<>
        <Asaid />
        <section className={style.content}>
            <div className={style.container}>
                <Outlet context={{ load: load }} />
            </div>
            <Footer />
        </section>
    </>)
}

export default MainHelp;