import React from 'react'
import './footer.css'
import Iframe from 'react-iframe'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer() {
    return (
        <section className='footer-container grid grid--1x2' data-aos='slide-right'>
            <div className='introduction'>
                <p>Zapraszamy do kontaktu, z przyjemnością odpowiemy na wszystkie pytania.
                    Realizujemy bezpłatne konsultacje na miejscu - w zakładzie klienta.
                </p>
                <div className='footer__contact'>
                <h2>VG CONTROL</h2>
                <p>Myśliwska 9/25</p>
                <p>80-283 Gdańsk</p>
                <p>NIP: 8471598082</p>
                <p>REGON: 389905509 </p>
                </div>
            </div>
            <div>
                <Iframe id='map' url="https://snazzymaps.com/embed/397490" frameBorder={0} />
            </div>
        </section>
    )
}

export default Footer
