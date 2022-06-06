import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { ImMobile } from 'react-icons/im'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    return (
        <section id='contact' className='container' data-aos='slide-right'>
            <header>
                <h2><p className='first-paragraph'>Skontaktuj</p> <p>się z nami</p></h2>
            </header>
            <div className='contact-container grid grid--1x2'>
                <div className='contact-options'>
                    <article className='contact-option'>
                        <a href='mailto:g.ulanowski@vgcontrol.pl' target='_blank'>
                            <AiOutlineMail className='contact-option-icon' />
                            <h4>Email</h4>
                            <p>g.ulanowski@vgcontrol.pl</p>
                            <p>Wyślij wiadomość</p>
                        </a>
                    </article>
                    <article className='contact-option'>
                        <a href='https://api.whatsapp.com/send?phone+48509896280' target='_blank' >
                            <AiOutlineWhatsApp className='contact-option-icon' />
                            <h4>WhatsApp</h4>
                            <p>+48 509 896 280</p>
                            <p>Wyślij wiadomość</p>
                        </a>
                    </article>
                    <article className='contact-option'>
                        <a href='tel:+48 509 896 28' target='_blank' >
                            <ImMobile className='contact-option-icon' />
                            <h4>Telefon</h4>
                            <p>+48 509 896 280</p>
                            <p>Zadzwoń</p>
                        </a>
                    </article>
                </div>
                <form action=''>
                    <input type='text' name='Imię' placeholder='Imię i nazwisko' required />
                    <input type='email' name='email' placeholder='Email' required />
                    <input type='mobile' name='mobile' placeholder='Telefon' required />
                    <textarea name='wiadomość' rows='9' placeholder='Wiadomość' required></textarea>
                    <button type='submit' className=' btn btn--primary'>Wyślij wiadomość</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
