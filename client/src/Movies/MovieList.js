import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import {Link} from 'react-router-dom';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, [props.match.params.id]);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}><MovieCard movie={movie}/></Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
