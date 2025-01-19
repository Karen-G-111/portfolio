import { useEffect, useRef, useState } from 'react';
import BrandItem from './BrandItem';
import style from './Brands.module.css';

import img1 from './images/brand1.png';
import img2 from './images/brand2.png';
import img3 from './images/brand3.png';
import img4 from './images/brand4.png';
import img5 from './images/brand5.png';
import img6 from './images/brand6.png';

function Brands({ move, objectSize }) {

    let id = useRef(null);

    useEffect(() => {
        interval();
    }, []);

    return (<div
        onMouseEnter={() => { clearInterval(id.current) }}
        onMouseLeave={() => { interval(); }}
        onTouchStart={() => { clearInterval(id.current) }}
        onTouchEnd={() => { interval(); }}
        className={style.container}>
        <div data-parent className={style.body}>
            <BrandItem imgHref={img1} />
            <BrandItem imgHref={img2} />
            <BrandItem imgHref={img3} />
            <BrandItem imgHref={img4} />
            <BrandItem imgHref={img5} />
            <BrandItem imgHref={img6} />
        </div>
    </div>)

    function interval() {
        id.current = setInterval(() => {
            move(true);
        }, 2000)
    }

}

export default Brands;