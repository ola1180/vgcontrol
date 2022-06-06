import React from 'react'
import {Outlet} from "react-router-dom"
import Nav from '../nav/Nav'
import ScrollArrow from '../scrollArrow/ScrollArrow'
import Footer from '../footer/Footer'


function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
            <ScrollArrow />
            <Footer />
        </>
    )
}

export default Layout
