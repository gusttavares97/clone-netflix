import React, { useEffect } from 'react';
import categories, { getMovies } from '../api';
import './Banner.css';

function Banner() {
  const [movie , setMovie] = React.useState({});

  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find(category => category.name === 'netflixOriginals').path;
      const data = await getMovies(netflixOriginalsCategory);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch(error) {
      console.log("banner fetchRandom error", error);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);


  function truncate (str, n){
    return str?.length > n ? str.subtr(0, n - 1) + "..." :  str;
  }
  return (
    <header className='Banner-container'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${movie.backdrop_path ? movie.backdrop_path : ''}")`,
        roundPosition: 'center-center',
      }}
    >

<div className='Banner-content'>
  <h1 className='Banner-title'>
    {movie?.title || movie?.name || movie?.original_name}
  </h1>
<div className='Banner-button-container'>
  <button className='Banner-button'>Assistir</button>
  <button className='Banner-button'>Minha lista</button>
</div>

<div className='Banner-description'>
  <h2>{truncate(movie?.overview)}</h2>
</div>
</div>

    </header>
  )
}

export default Banner;
