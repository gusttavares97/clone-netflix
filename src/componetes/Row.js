import React, { useEffect } from 'react'
import { getMovies } from '../api'
import  './Row.css'

const imageHost =  `https://image.tmdb.org/t/p/original/`


function Row({title, path ,islargue}) {
  const[movies, setMovies] = React.useState([])
  
  const fetchMovies = async (_path)=>{
    try{
      const data = await getMovies(_path);
      setMovies(data?.results)
    }catch(error){ 
      console.log('fetcmovies error:', error)
    }
  };
  
  useEffect(()=>{
    fetchMovies(path)
  },[path])

  return( <div className='row-container'>
    <h2 className='row-header'>{title}</h2>
<div className='row-card'>
  {movies?.map(movie =>{
    return(
      <img 
      className={`img-card ${islargue && "img-card-largue"}`}
      key={movie.id} 
      src={`${imageHost}${islargue ? movie.backdrop_path: movie.poster_path}`} 
      alt={movie.name}></img>
    )
  })}
</div>
</div>
  
  );
}

export default Row;