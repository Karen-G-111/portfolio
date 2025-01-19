import { Link } from 'react-router-dom';
import style from './NavItem.module.css'

function NavItem({ name, isActive, to }) {
    return (
        <Link
            className={`${style.item} ${isActive ? style.active : ''}`}
            to={`/${to}`}>
            {name}
        </Link>)
}

export default NavItem;