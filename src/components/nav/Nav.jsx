import React from 'react'
import './nav.css'
import LOGO from '../../assets/logo.png'

function Nav() {
    return (
        <nav className='navbar-container'>
            <a href='#home' className='logo'><img src={LOGO} alt="" /></a>
            <a href='#' class="toggle-button">
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div className='navbar-links'>
                <ul>
                    <li><a href='#home'>O NAS</a></li>
                    <li><a href='#services'>OFERTA</a></li>
                    <li><a href='#services'>ULGA NA ROBOTYZACJĘ</a></li>
                    <li><a href='#contact'>KONTAKT</a></li>
                </ul>
                <div className='lang-menu'>
                    <span className='pl'>PL</span>
                    <div className='switcher'><input type="checkbox" className='check'></input></div>
                    <span className='eng'>ENG</span>
                </div>
            </div>
        </nav>
    )
}

export default Nav
