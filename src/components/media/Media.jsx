import React, { useState } from 'react';
import './media.css';
import MediaComponent from '../media_component/Media_component';
import MediaComponent2 from '../media_component/Media_component2';
import { machine, plc, robotics, service } from './imports';
import 'aos/dist/aos.css';



function Media() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <section id='media' className='container media-container' data-aos='slide-right'>
                <header>
                    <h2><p className='first-paragraph'>Nasze</p> <p>usługi</p></h2>
                </header>
                <div className='grid grid--1x2'>
                    <a href='roboticStations' className='media__btn '><MediaComponent2 imgUrl={robotics} banner="Stanowiska zrobotyzowane" text="Tworzymy zrobotyzowane stanowiska produkcyjne dla wszystkich branż."/></a>
                    <a  href='machines' className='media__btn'><MediaComponent2 imgUrl={machine} banner="Maszyny" text="W ramach budowy stanowisk zrobotyzowanych zajmujemy się konstruowaniem wyspecjalizowanych maszyn. " /></a>
                    <a className='media__btn'><MediaComponent imgUrl={plc} banner="Systemy sterowania" text="Wykonujemy układy sterowania do maszyn, linii oraz robotów, współpracując z firmami produkcyjnymi oraz producentami maszyn. Zapraszamy również do kontaktu firmy, zajmujące się mechaniką w budowie maszyn." /></a>
                    <a className='media__btn'><MediaComponent imgUrl={service} banner="Serwis" text="Zajmujemy się serwisem oraz konserwacją maszyn własnych oraz innych producentów. Wspomagamy działy utrzymania ruchu." /></a>
                </div>
            </section>
        </>

    )
}

export default Media
