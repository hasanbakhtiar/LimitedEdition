import React from 'react'
import Nav from '../components/Nav';
import Home from '../components/pages/Home';
import MovieList from '../components/pages/MovieList';
import AddMovies from '../components/form/AddMovies';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { MovieProvider } from '../components/context/MovieContext';
const AppRouter = () => {
  return (
    <MovieProvider>
      <BrowserRouter>
    <Nav />
        <div className="mt-5 container">
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path ="/movies" element={<MovieList />}></Route>
            <Route path ="/add" element={<AddMovies />}></Route>
        </Routes>
        </div>
    </BrowserRouter>
    </MovieProvider>
    
  )
}

export default AppRouter