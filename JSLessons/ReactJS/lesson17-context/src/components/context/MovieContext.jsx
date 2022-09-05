import React,{useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name:"interstaller",
      price: 20,
      id:3312
    },
    {
      name:"batman",
      price: 25,
      id:24213
    },
    {
      name:"inception",
      price: 40,
      id:754
    }
  ])
  return (
    <MovieContext.Provider value={[movies,setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}

