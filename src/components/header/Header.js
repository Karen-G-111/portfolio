import style from './Header.module.css'

import Logo from './Logo'
import Nav from './Nav'
import Theme from './Theme'
import Burger from './Burger'

import { useState } from 'react'

function Header({ activePage }) {


    const showBurger = useState(false);


    return (<header className={style.header}>
        <div className={style.ends}><Logo /></div>
        <div className={style.navigation}><Nav show={showBurger} activePage={activePage} /></div>
        <div className={`${style.ends} ${style.right}`}><Theme /> <Burger showBurger={showBurger} /></div>
    </header>)
}

export default Header