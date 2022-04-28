import React from 'react'
import './about.css'
import Services from '../services/Services'

function About() {
    return (
        <div id='home' className='aboutvg-container'>
            <div className='aboutvg'>
                <h1>Nasze usługi</h1>
            </div>
            <div className='ourservices'>
            <Services />
            <Services />
            </div>
            <div className='ourservices'>
            <Services />
            <Services />
            </div>
        </div>
    )
}

export default About
