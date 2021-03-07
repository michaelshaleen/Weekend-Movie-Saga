import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

import './MovieList.css'

function MovieList() {
  const history = useHistory();


    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    console.log(movies, )
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    const imageClick = (event) => {
      console.log("image click")
      history.push("/details");
      dispatch({
        type: 'FETCH_MOVIES',
        payload:{
          //id: id,
          value: event.target.value
        } 
      })
    }
    return (
        <main>
            <h1>MovieList</h1>
            <form onClick={imageClick}>
            <section className="movies">
                {movies.map(movie => {
                  return (
                    <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                  })}
            </section>
            </form>
        </main>

    );
}

export default MovieList;