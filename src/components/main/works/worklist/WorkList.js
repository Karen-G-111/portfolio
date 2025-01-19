import { useState } from 'react'
import WorkFilter from './WorkFilter'
import style from './WorkList.module.css'
import WorkCard from './WorkCard';

import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'

const listOfWorks = [
    { work: <WorkCard key={1} name="Brand Canvans" kindOf="Landing" img={img1} />, type: "landing" },
    { work: <WorkCard key={2} name="Personal Zenith" kindOf="Web Site" img={img2} />, type: "website" },
    { work: <WorkCard key={3} name="Next gen Portfolio" kindOf="Web Site" img={img3} />, type: "website" },
    { work: <WorkCard key={4} name="Marketing Muse" kindOf="Web Site" img={img4} />, type: "website" },
    { work: <WorkCard key={5} name="Portfolio Vista" kindOf="Landing" img={img5} />, type: "landing" },
    { work: <WorkCard key={6} name="Showcase Hub" kindOf="Landing" img={img6} />, type: "landing" },
]

const filters = [
    (v) => { return v.type },
    (v) => { return v.type === 'landing' },
    (v) => { return v.type === 'website' },
]

function WorkList() {

    const [active, setActive] = useState(1);

    const arr = listOfWorks.filter(filters[active - 1]);

    return (<div>
        <WorkFilter list={['Show All', 'Landing', 'Web Site']} activeNumber={active} click={(a) => { setActive(a) }} />
        <div className={style.works}>
            {arr.map(v => { return v.work })}

        </div>
    </div>)
}

export default WorkList