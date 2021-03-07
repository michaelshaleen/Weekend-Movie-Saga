import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import ThisMovie from '../ThisMovie/ThisMovie';
import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    //on page load, run this
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
        <main className="main">
            {/* <h1>MovieList</h1> */}

            {/* map out list of all movies in DB */}
              <section className="card">
                <div className="profile-sidebar"></div>
                  <div className="profile-main"></div>  
                {movies.map(movie => {
                  return (
                    <ThisMovie
                    movie = {movie} />
                    );
                  })}
              </section>
        </main>
    )
}

export default MovieList;