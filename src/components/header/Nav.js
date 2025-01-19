import style from "./Nav.module.css";
import NavItem from "./NavItem";

function Nav({ show, activePage }) {

    const [active, setActive] = activePage;

    return (<nav className={style.nav}>
        <div onClick={() => { show[1](false) }} className={`${style.body} ${show[0] ? style.active : ''}`}>
            <NavItem name='About' isActive={!(1 - active)} to='' />
            <NavItem name='Services' isActive={!(2 - active)} to='services' />
            <NavItem name='Resume' isActive={!(3 - active)} to='resume' />
            <NavItem name='Works' isActive={!(4 - active)} to='works' />
            <NavItem name='Contact' isActive={!(5 - active)} to='contact' />
        </div>
    </nav>);


}

export default Nav