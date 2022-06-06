import React, { useState } from 'react'
import './nav.css'
import LOGO from '../../assets/logo.png'
import { Link } from "react-router-dom"


function Nav() {
    
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 70) {
            setColor(true)
        } else {
            setColor(false)
        }
    }


    window.addEventListener('scroll', changeColor)

    return (

         <nav className={color ? 'nav--bg' : 'nav'}> 
            <Link to='/' className='logo' onClick={closeMobileMenu}><img src={LOGO} alt="" /></Link>
            <button class={click ? 'toggle-button--close' : 'toggle-button'} onClick={handleClick}>
                <span className='bar--first'></span>
                <span className='bar--second'></span>
                <span className='bar--third'></span>
            </button>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='list__item' onClick={closeMobileMenu}><a href='/#about'>O NAS</a></li>
                <li className='list__item' onClick={closeMobileMenu}><a href='/#media'>OFERTA</a></li>
                <li className='list__item' onClick={closeMobileMenu}><Link to='/robotics'>ULGA NA ROBOTYZACJĘ</Link></li>
                <li className='list__item' onClick={closeMobileMenu}><a href='/#contact'>KONTAKT</a></li>
            </ul>
        </nav>
    )
}

export default Nav
