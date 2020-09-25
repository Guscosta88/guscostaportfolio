import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
const [click, setClick] = useState(false);
const [dropdown, setDropDown] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const onMouseEnter = () => {
    if(window.innerwidth < 960) {
        setDropDown(false);
    } else {
        setDropDown(true);
    }
};

const onMouseLeave = () => {
    if(window.innerwidth < 960) {
        setDropDown(false);
    } else {
        setDropDown(false);
    }
};

    return (
        <>
        <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
            Italian Bar <i class="fas fa-record-vliny"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           
            <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                Menu
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
            </Link>
            </li>
        </ul>
        </nav>
        </>
    )
}

export default Navbar;