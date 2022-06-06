import React from 'react'
import './machines.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BoxConveyor from '../../assets/large.jpg'
import { GoTriangleRight } from 'react-icons/go'

function Machines() {

  return (
    <section id='machines' className="machines-container container grid grid--1x2" data-aos='slide-left'>
      <h2 className='first-paragraph'>Maszyny</h2>
      <div className='grid grid--1x2'></div>
      <div>
        <ul className='list machine-list'>W ramach budowy stanowisk zrobotyzowanych zajmujemy się konstruowaniem wyspecjalizowanych i dostosowanych do indywidualnych potrzeb maszyn, chwytaków robotów oraz oprzyrządowania. <br /><br /> Zrobotyzowane stanowiska to między innymi:
          <li> <GoTriangleRight className='list-point'/>maszyny formujące oraz zaklejające kartony,</li>
          <li><GoTriangleRight className='list-point'/>przenośniki kartonów, produktów i palet, </li>
          <li><GoTriangleRight className='list-point'/>chwytaki robotów, </li>
          <li><GoTriangleRight className='list-point'/>ultradźwiękowe zgrzewarki,</li>
          <li><GoTriangleRight className='list-point'/>obrotniki spawalnicze, </li>
          <li><GoTriangleRight className='list-point'/>maszyny produkcyjne do cięcia i obróbki rur,</li>
          <li><GoTriangleRight className='list-point'/>procesowe stacje testujące,</li>
          <li><GoTriangleRight className='list-point'/>niestandardowe maszyny produkcyjne </li></ul></div>
      <div> <img src={BoxConveyor} alt="" /></div>
    </section>
  )
}


export default Machines
