import { useState } from 'react';

import style from './Burger.module.css';


function Burger({ showBurger }) {

    return (<button
        className={`${style.burger} ${showBurger[0] ? style.active : ''}`}
        onClick={show}>
        <span className={style.first}></span>
        <span className={style.middle}></span>
        <span className={style.last}></span>
    </button>)

    function show() {
        showBurger[1](last => {
            return !last
        })
    }
}

export default Burger;