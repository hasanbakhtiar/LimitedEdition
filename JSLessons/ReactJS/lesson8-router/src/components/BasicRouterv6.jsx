// rafce -> react arrow function component export 
import React from 'react'
import { Routes, Route, Link ,BrowserRouter } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <ul className='d-flex'>
                <li className='ms-3'><Link to="/">Home</Link></li>
                <li className='ms-3'><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}

const Home = () => {
    return (
        <div>Home</div>
    )
}

const About = () => {
    return (
        <div>About</div>
    )
}
const NotFoundPage = () => {
    return (
        <div>NotFoundPage</div>
    )
}
const BasicRouterv6 = () => {
    return (
        <div className='container'>
            <BrowserRouter>
            <Nav /> 
                <Routes>
                    
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='*' element={<NotFoundPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default BasicRouterv6