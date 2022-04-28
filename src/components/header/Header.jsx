import React from 'react'
import './header.css'
// import Mainvideo from '../../assets/mainVideo.mp4'
import Mainvideo from '../../assets/mainvideo.webm'
import { HiOutlineArrowNarrowUp } from 'react-icons/hi'


function Header() {
    return (
        <header id='home' className='header-container'>
                <div className='left-header-container'>
                    <video autoPlay loop muted>
                        <source src={Mainvideo} type='video/webm' />
                    </video>
                    {/* <div className='banner-text'><h2>Automatyzacja <span>produkcji</span> </h2></div> */}
                </div>
                <div className='right-header-container'>
                    <div className='text-container'>
                        <h1>O naszej firmie</h1>
                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus dolores, pariatur in magnam perferendis modi, repellat facilis quas dolorum ipsa iusto dolor sit expedita! Iusto sed enim dolorem! Fugit, culpa.
                        </h3>
                        <button>NASZE REALIZACJE</button>
                    </div>
                </div>
            <a href='#home'><HiOutlineArrowNarrowUp className='arrow-up-icon' /></a>
        </header >
    )
}

export default Header
