import React from 'react'
import './about.css'
import Photo1 from '../../assets/download.jpg'
import Photo2 from  '../../assets/robot-jobs-arm.jpg'
import Photo3 from '../../assets/assembly-robots_0.jpg'



function About() {
  return (
    <section id='aboutSection' className="about-container" data-aos="slide-left" data-aos-delay="500"> 
      <div className="section-one grid about-container__grid-one container ">
        <h3>O nas</h3>
        <div className="section-one__text">
          <p>
            Automatyzacja i robotyzacja produkcji jest naturalną drogą rozwoju
            branż przemysłowych na całym świecie. Stała się nieodłączną częścią
            funkcjonowania licznych gałęzi przemysłowo-produkcyjnych i trudno
            sobie wyobrazić, aby ten trend miał ulec odwróceniu. Bez
            automatyzacji produkcji nie byłoby możliwe usprawnianie procesów,
            unowocześnianie linii produkcyjnych, ani rozumiany przez pryzmat
            mocy produkcyjnej, rozwój procesów powtarzalnych. Automatyzacja
            produkcji jest także czynnikiem, który w bezpośredni sposób odmienia
            funkcjonowanie przedsiębiorstwa w kontekście zasobów pracowniczych -
            zwiększa moce przerobowe, wydajność, bezpieczeństwo oraz komfort
            pracy.
          </p>
        </div>
      </div>
      <div className='testimonial-grid'>
        <div className='one testimonial'>
          <h4>
            Kompleksowe rozwiązania techniczne i technologiczne dla twojej firmy</h4>
          </div>

          <div className='two testimonial'>
            <p>
              W VGC wspieramy naszych klientów automatyzacją produkcji w ich dążeniu
              do biznesowych celów i osiąganiu stawianych założeń: zwiększania
              wydajności, skracania czasu produkcji czy poprawy komfortu w środowisku
              pracy, tworząc konkurencyjną jakość. Przyczyniamy się w ten sposób do
              optymalizacji kosztów produkcji i zwiększania dochodów firmy. Jesteśmy
              częścią branży, w której niezawodne rozwiązania wprowadzają firmy
              produkcyjne i przemysł na drogę innowacji i niezakłóconego, sprawnego
              funkcjonowania.
            </p>
            </div>
            <div className="three testimonial">
              <img src={Photo1} alt="" />
            </div>
        
            <div className="four testimonial">
              <img src={Photo2} alt="" />
            </div>
          <div className="five testimonial">
            <img src={Photo3} alt="" />
          </div>
          <div className='six testimonial'>
            <p>
              Nieustannie się uczymy i śledzimy rozwój naszej
              dziedziny, trendy oraz innowacje, zyskując pewność, że wdrażane przez
              nas, kompleksowe rozwiązania, pozwalają wynieść jakość działania małych
              i dużych przedsiębiorstw na zupełnie nowy poziom. Indywidualne podejście
              i rzetelna jakość Każdy projekt to nowe wyzwanie i indywidualne
              podejście do specyfiki profilu przedsiębiorstwa. Współpracę zawsze
              poprzedza głęboka analiza oczekiwań, dzięki której możemy proponować
              naszym klientom trafne i niezawodne technologicznie rozwiązania, które w
              pełni wpisują się w charakter potrzeb.
            </p>
          </div>
      </div>
      <div className='section-three'>
        <div className='container'>
          <h4>W ofercie VGC znajdziesz szeroki zakres prac inżynierskich:</h4>
          <ul>
            <li>Tworzenie stanowisk zrobotyzowanych – programujemy roboty wszystkich dostępnych producentów. </li>
            <li>Optymalizacja czasów cyklu pracy robotów przemysłowych.</li>
            <li>Rozbudowa funkcji programów robotów i maszyn. </li>
            <li>Szkolenia z obsługi robotów przemysłowych. </li>
            <li>Budowa maszyn, dostosowanych do potrzeb i specyfiki działania.</li>
            <li>Wymiana układów sterowania maszyn – retrofit.</li>
            <li>Projektowanie i uruchamianie układów sterowania: maszyn, linii,stanowisk robotów. </li>
            <li>Programowanie sterowników PLC, systemów SCADA orazpaneli HMI. </li>
            <li>Tworzenie i odtwarzanie zniszczonej/zgubionej dokumentacji elektrycznej. </li>
            <li>Analizy ryzyka bezpieczeństwa tworzonych układów sterowania. </li>
            <li>Usługi serwisu/konserwacji zakładów, maszyn oraz linii.</li>
          </ul>
        </div>
      </div>
    </section >

  )
}

export default About
