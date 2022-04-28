import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { ImMobile } from 'react-icons/im'
import MAP from '../../assets/map.png'

function Contact() {
    return (
        <div id='contact' className='contact'>
            <div className='contact-container'>
                <div className='contac-with-us'>
                    <h1>Skontaktuj się z nami</h1>
                </div>
                <div className='contact-options'>
                    <article className='contact-option'>
                        <a href='mailto:g.ulanowski@vgcontrol.pl' target='_blank'>
                            <AiOutlineMail className='contact-option-icon' />
                            <h4>Email</h4>
                            <h5>g.ulanowski@vgcontrol.pl</h5>
                            <h5>Wyślij wiadomość</h5>
                        </a>
                    </article>
                    <article className='contact-option'>
                        <a href='https://api.whatsapp.com/send?phone+48509896280' target='_blank' >
                            <AiOutlineWhatsApp className='contact-option-icon' />
                            <h4>WhatsApp</h4>
                            <h5>+48 509 896 280</h5>
                            <h5>Wyślij wiadomość</h5>
                        </a>
                    </article>
                    <article className='contact-option'>
                        <a href='https://api.whatsapp.com/send?phone+48509896280' target='_blank' >
                            <ImMobile className='contact-option-icon' />
                            <h4>Telefon</h4>
                            <h5>+48 509 896 280</h5>
                            <h5>Zadzwoń</h5>
                        </a>
                    </article>
                </div>
                <form action=''>
                    <input type='text' name='Imię' placeholder='Imię i nazwisko' required />
                    <input type='email' name='email' placeholder='Email' required />
                    <input type='mobile' name='mobile' placeholder='Telefon' required />
                    <textarea name='wiadomość' rows='9' placeholder='Wiadomość' required></textarea>
                    <button type='submit' className='btn'>Wyślij wiadomość</button>
                </form>
            </div>
            <div className='contact-adress-container'>
                <div className='adress'>
                    <h2>VG CONTROL</h2>
                    <h3>ul. Myśliwska 98/25 <br />
                        80-283, Gdańsk <br />
                        NIP : 8471598082 <br />
                        REGON: 389905509</h3>
                </div>
                <div className='contact-map'><img src={MAP} alt="" /></div>
            </div>
        </div>
    )
}

export default Contact
