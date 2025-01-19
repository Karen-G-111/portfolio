import ClientMess from './ClientMess'

import style from './Clients.module.css'

import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';

function Clients({ move }) {
    return (<>
        <div className={style.main}>
            <div className={style.body}>
                <ClientMess
                    starsCount={5}
                    name="Jillian Wyat"
                    prof="Marketing Specialist"
                    img={img1}
                    message={"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim"}
                />
                <ClientMess
                    starsCount={5}
                    name="Mira Edorra"
                    prof="Marketing Manager"
                    img={img2}
                    message={"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim. Lisque persius"}
                />
                <ClientMess
                    starsCount={5}
                    name="Carla Housto"
                    prof="Unvab Inc."
                    img={img3}
                    message={"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim. Lisque persius interesset"}
                />
                <ClientMess
                    starsCount={5}
                    name="John Raz"
                    prof="Starbox Inc."
                    img={img4}
                    message={"Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim"}
                />
            </div>
        </div>
        <div className={style.btns}>
            <button onClick={() => move(true)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
            <button onClick={() => move(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>
        </div>
    </>)
}

export default Clients