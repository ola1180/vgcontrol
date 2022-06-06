import React from 'react'
import './RoboticDiscountPage.css'
import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function RoboticDiscountPage() {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <section id='robotics' className="robotics-container container" data-aos='slide-left' data-aos-delay="500">

      <h2><p className='first-paragraph'>Ulga na </p><p>robotyzację</p></h2>
      <h3>Ulga na robotyzację 2022</h3>
          <div className='faq-wrapper container'>
            <div className='accordion'>
              {data.map((item, i) => (
                <div className='item'>
                  <div className='title' onClick={() => toggle(i)}>
                    <h4>{item.question}</h4>
                    <span>{selected=== i ? '-' : '+'  }</span>
                  </div>
                  <div className={selected=== i ? ' content show' : 'content'  }>{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
    </section>
  )
}

const data = [
  {
    question: 'Co warto wiedzieć, aby otrzymać finansowanie dla projektów robotyzacji i automatyzacji',
    answer: 'Celem wprowadzenia z początkiem 2022 roku ulgi na robotyzację było przyspieszenie procesu cyfrowej transformacji w polskich przedsiębiorstwach i zwiększenie ich konkurencyjności zarówno na rynku polskim, jak i rynkach międzynarodowych. Dzięki uldze właściciele firm mogą odliczyć koszty robotów i towarzyszących im urządzeń oraz oprogramowania.',
  },
  {
    question: 'Dla kogo jest ulga na robotyzację',
    answer: 'Ulga na robotyzacje przysługuje podatnikom, prowadzącym pozarolniczą działalność gospodarczą, którzy uzyskują przychody z działalności operacyjnej: „Podatnik uzyskujący przychody inne niż przychody z zysków kapitałowych może odliczyć od podstawy opodatkowania, ustalonej zgodnie z art. 18, kwotę stanowiącą 50% kosztów uzyskania przychodów poniesionych w roku podatkowym na robotyzację, przy czym kwota odliczenia nie może przekraczać kwoty dochodu uzyskanego przez podatnika w roku podatkowym z przychodów innych, niż przychody z zysków kapitałowych”.',
  },

  {
    question: 'W jakim terminie obowiązuje ulga na robotyzację',
    answer: 'Ulga na robotyzację podlega limitowi terminowemu i obowiązuje od początku 2022 do końca 2026 roku. Wydane na robotyzację środki rozliczyć będzie można do 2032 roku.',
  },
  
  {
    question: 'Jakie roboty i urządzenia podlegają odliczeniu',
    answer: 'Odliczeniu podlega zakup nowych robotów przemysłowych, maszyn oraz urządzeń peryferyjnych, potrzebnych do działania robotów przemysłowych, maszyn oraz urządzeń związanych z bezpieczeństwem na stanowisku pracy, na którym ma miejsce kooperacja robota przemysłowego i człowieka. W tej kategorii mieszczą się między innymi sterowniki, czujniki, przekaźniki, urządzenia ochronne i wiele innych. Uldze podlegają również maszyny oraz urządzenia, których zadaniem jest wsparcie robotów przemysłowych zarządzaniem, serwisem czy diagnostyką, a także wszystkich urządzeń, które są niezbędne podczas współpracy człowieka i maszyny. Ponadto rozliczeniom podlegają koszty, poniesione na wartości prawne i niematerialne, związane z uruchomieniem i działaniem robotów, szkolenia, niezbędne do ich obsługi i oprogramowania, a także opłaty leasingowe – jeśli przedsiębiorca decyduje się na finansowanie w systemie leasingowym.',
  },

  {
    question: 'Co jeszcze musisz wiedzieć o uldze na robotyzację',
    answer: 'Co istotne, do uwzględnienia ulgi konieczny jest zakup robota, który wpisuje się w określoną przez ustawodawcę definicję: roboty przemysłowe muszą być automatycznie sterowalne, programowalne, muszą móc pracować w trybie wielozadaniowym, mieć właściwości lokomocyjne lub manipulacyjne dla zastosowań przemysłowych, łączyć się z systemami teleinformatycznymi, przekazywać dane w postaci cyfrowej i posiadać minimum trzy stopnie swobody. Muszą to być urządzenia monitorowane cyfrowo z opcją integracji z innymi maszynami, a pracować mogą w systemie mobilnym lub stacjonarnym.',
  },

  {
    question: 'Jak otrzymać o ulgę',
    answer: 'Ulga na robotyzację uwzględniana jest we wszystkich przypadkach, o ile podatnik dopełnił wskazane wymogi formalne, wynikające z zapisów ustawy. Nie wymaga składania specjalnych wniosków.',
  },
]

export default RoboticDiscountPage
