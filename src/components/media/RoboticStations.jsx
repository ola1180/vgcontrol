import React from 'react'
import './roboticStations.css'
import { useState } from 'react'
import 'aos/dist/aos.css';
import industrialRobot from '../../assets/Industrial_Robot_Companies_Yaskawa.jpg'
import Motoman from '../../assets/Motoman_GP8_0003.webp'

function RoboticStations() {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <section id='roboticStations' className="roboticStation-container container" data-aos='slide-left'>

      <h2><p className='first-paragraph'>Stanowiska </p><p>zrobotyzowane</p></h2>
      <div className='testimonial-robot'>
        <div className='container-one'>
          <p>Zrobotyzowane stanowiska produkcyjne to zupełnie nowa jakość funkcjonowania przedsiębiorstwa na każdej płaszczyźnie. Sprawdź, w jak wielu sektorach możesz usprawnić działanie swojej firmy, wspierając jej szeroko rozumiany rozwój.
            Robotyzacja produkcji pozwala podnieść wydajność (nawet do kilkuset %) – dzięki temu możesz produkować więcej w krótszym czasie. Dzięki robotyzacji możesz znacząco zmniejszyć ilość występujących pomyłek i błędów, podnosząc jakość swoich produktów. Natomiast przestoje produkcyjne mogą być zredukowane praktycznie do zera.
          </p>
        </div>
        <div className='photo-robot container-two'>
          <img src={industrialRobot} alt="" />
        </div>
        <div className='photo-robot2 container-three'>
          <img src={Motoman} alt="" />
        </div>
        <div>
          <p>
            Robotyzacja stanowiska pracy umożliwia dynamiczne zmiany również w strukturze zatrudnienia i wykorzystaniu jej potencjału. Specjaliści i wykwalifikowani pracownicy mogą zostać oddelegowani do innych obowiązków, zwiększając możliwości przedsiębiorstwa oraz umożliwiając przesunięcie zadań, które były najbardziej uciążliwe i szkodliwe dla zdrowia.
            Wszystko to wpływa na zwiększenie wydajności, jakości, a tym samym - konkurencyjności przedsiębiorstwa i osiąganej przez nie pozycji na rynku – z nami możesz więcej!
            Tworzymy zrobotyzowane stanowiska produkcyjne w zasadzie dla wszystkich branż. Każdy projekt to wnikliwa analiza potrzeb, znalezienie i wdrożenie trafnych oraz adekwatnych rozwiązań, które w pełni wpisują się w trend zwiększania możliwości oraz wzrostu zysków.
          </p>
        </div>
      </div>
      <div className='faq-wrapper container'>
        <div className='accordion'>
          {data.map((item, i) => (
            <div className='item'>
              <div className='title' onClick={() => toggle(i)}>
                <h4>{item.question}</h4>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div className={selected === i ? ' content show' : 'content'}>{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const data = [
  {
    question: 'Pakowanie',
    answer: 'Automatyzacja pakowania produktów - od zjazdu z linii produkcyjnej, do wyjazdu na magazyn. Szeroki zakres możliwości:Ważenie oraz liczenie,kontrola kształtu, prawidłowości montażu,formowanie, podklejanie i zaklejanie kartonu,pakowanie zbiorcze w kartony,etykietowanie,paletyzacja oraz depaletyzacja,owijanie folią stretch.'
  },
  {
    question: 'Spawanie',
    answer: 'Automatyzacja spawania jest procesem, który można bardzo efektywnie usprawnić dzięki robotyce. Spawanie przy pomocy robota przemysłowego to liczne zalety:Powtarzalność procesu,precyzja i estetyka wykonanych spoin,dokładność,kilkukrotne obniżenie kosztów spawania i zwiększenie mocy produkcyjnych zakładu.W aplikacjach stosujemy sprawdzone i dobrze znane rozwiązania „touch sensing” czy „seam/path tracking”. Duże prędkości spawania przy użyciu nowoczesnych źródeł spawalniczych skutecznie optymalizują proces spawania, przynosząc przedsiębiorstwu liczne korzyści.',
  },

  {
    question: 'Montaż',
    answer: 'Operacje montażu często wymagają powtarzalności ruchów oraz potrafią przysporzyć wielu problemów ze względu na błędy ludzkie, których w praktyce nie da się uniknąć. Wykorzystywane czujniki siły oraz momentu pozwalają dodać urządzeniu zmysł dotyku. Umożliwia to robotowi nie tylko dopasowywanie do potrzeb powierzchni, ale również wywieranie stałej siły, umieszczanie wałków, sworzni czy kół zębatych. Dzięki robotyzacji stanowisk montażowych, praca z delikatnymi elementami nie stanowi problemu. Natomiast integracja systemów wizyjnych pozwala reagować na błędy, powstające przy wytwarzaniu półproduktów.Robotyzacja stanowisk montażowych to nowa jakość, zwiększona wydajność i rosnące zyski przedsiębiorstwa',
  },

  {
    question: 'Obsługa maszyn',
    answer: 'Obsługa maszyn przez roboty pozwala zwiększyć zdolności produkcyjne w każdym przedsiębiorstwie. Ramię robotyczne umożliwia automatyzację niemal każdego zadania manualnego. Odsunięcie operatora od powtarzalnych, brudnych czy niebezpiecznych zadań, pozwala zmniejszyć ryzyko niebezpiecznych wypadków. A wszystko to wpływa nie tylko na zwiększenie potencjału przedsiębiorstwa, ale również jakość pracy zatrudnionych w nim specjalistów. ajmujemy się obsługą giętarek do rur, maszyn CNC, pras krawędziowych, wtryskarek oraz innych.',
  },

  {
    question: 'Roboty współpracujące – coboty',
    answer: 'Robotyzacja oraz automatyzacja procesów produkcji staje się wymogiem w przedsiębiorstwach, które chcą zachować rynkową konkurencyjność. Coboty, czyli roboty współpracujące, są odpowiedzią na potrzebę połączenia potencjału robotyki z kompetencjami człowieka. Ich unikalne walory pozwalają na bardzo szerokie i uniwersalne zastosowanie w różnych branżach i przedsiębiorstwach o zróżnicowanej specyfice.Uniwersalne,nie wymagają dużej przestrzeni,łatwe w programowaniu skracają czas produkcji,redukują przestoje oraz błędy,zwiększają poziom bezpieczeństwa,pozwalają bardziej efektywnie wykorzystywać zespół pracowniczy.Te niezwykle elastyczne w adaptacji do potrzeb stanowiska, efektywne, przyjazne w programowaniu i wydajne roboty pozwalają zadbać o precyzję i jakość, skracają czas, a więc i redukują koszty produkcji. Równocześnie dzięki ich specyfice i nowoczesnym technologiom, nie wymagają wdrażania dodatkowych procedur oraz systemów bezpieczeństwa i z powodzeniem mogą kooperować z ludźmi, bez konieczności projektowania osłoniętych stanowisk pracy. Roboty współpracujące sprawdzają się wszędzie tam, gdzie dynamika procesu produkcji jest niska (wolny proces). Coboty to inwestycja, która zawsze się opłaca.',
  },

  {
    question: 'Inne branże',
    answer: 'Malowanie natryskowe,szlifowanie,obróbka CNC,cięcie laserowe,wiercenie gwintowanie.',
  },
]

export default RoboticStations
