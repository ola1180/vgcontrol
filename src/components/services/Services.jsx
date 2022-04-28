import React from 'react'
import './services.css'
import PLC from '../../assets/plc-board.png'


function Services() {
    return (
        <div id='services' className='services-container'>
            <div class='grid'>
                <div className='left-icon'>
                    <img src={PLC} alt="" />
                </div>
                <div className='right-text'>
                    <h2>Stanowiska zrobotyzowane</h2>
                    <h3>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, atque.</h3>
                </div>
            </div>
        </div>
    )
}

export default Services
