import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Home from '../components/pages/Home';

const AppRouters = () => {
    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default AppRouters