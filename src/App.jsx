import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import Layout from './components/layout/Layout'
import Robotics from './components/roboticDiscountPage/RoboticDiscountPage'
import AboutSection from './components/about/About'
import ScrollToTop from './components/ScrollToTop';
import RoboticStations from './components/media/RoboticStations';
import Machines from './components/media/Machines';


const App = () => {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="robotics" element={<Robotics />}></Route>
                    <Route path="aboutSection" element={<AboutSection />}></Route>
                    <Route path="roboticStations" element={<RoboticStations />}></Route>
                    <Route path="machines" element={<Machines />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App


