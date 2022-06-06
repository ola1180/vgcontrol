import './hero.css'
import Mainvideo from '../../assets/mainvideo.webm'
import AOS from 'aos';
import 'aos/dist/aos.css';





function Hero() {
    return (
        <section className='hero-container container grid grid--1x2' data-aos='slide-right' >
            <div className='left__hero__container'>
                <video autoPlay loop muted>
                    <source src={Mainvideo} type='video/webm' />
                </video>
                <div className="banner-text"><h1>
                    Automatyzacja <br /><span>produkcji</span>
                </h1></div>
            </div>
            <div id='about' className='right__hero__container'>
                <div><h2><p className='first-paragraph'>O naszej </p>
                    <p>firmie</p></h2>
                <p> W VGC wspieramy naszych klientów automatyzacją produkcji w ich dążeniu do biznesowych celów i osiąganiu stawianych założeń: zwiększania wydajności, skracania czasu produkcji czy poprawy komfortu w środowisku pracy, tworząc konkurencyjną jakość.
                </p>
                </div>
                <a href='aboutSection' className='link-arrow'>Więcej</a>
            </div>
        </section >
    )
}

export default Hero
