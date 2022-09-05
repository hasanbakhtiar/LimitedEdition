import React,{ useContext} from 'react'
import { MovieContext } from '../context/MovieContext'
import Movie from './Movie';

const MovieList = () => {
  const [movies,setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map(data=>{
        return <Movie title={data.name} earn={data.price} key={data.id} />
      })}
    </div>
  )
}

export default MovieList