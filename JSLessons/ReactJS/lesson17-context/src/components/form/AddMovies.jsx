import React, { useContext } from "react";
import { useState } from "react";
import { MovieContext } from "../context/MovieContext";

const AddMovies = props => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [movies,setMovies] = useContext(MovieContext);

    const updateName = e =>{
        setName(e.target.value);
    }
    const updatePrice = e =>{
        setPrice(e.target.value);
    }
    const addMovies = e =>{
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name:name,price:price}])
        props.history.push('/movies')
    }
  return (
    <div>
      <h1>AddMovies</h1>
      <form onSubmit={addMovies}>
      <div className="mt-3"><input onChange={updateName} type="text" placeholder="enter movie name" /></div>
      <div className="mt-3"><input onChange={updatePrice} type="text" placeholder="enter movie price" /></div>
      <div className="mt-3 "><button className="btn btn-primary">Add Movies</button></div>
      </form>
    </div>
  );
};

export default AddMovies;
