import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

import './MovieList.css'

function MovieList() {
  const history = useHistory();


    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    const imageClick = (event) => {
      console.log("image click")
      history.push("/details");
      dispatch({
        type: 'FETCH_MOVIES',
        payload:{
         // id: movie.id???
          value: event.target.value
        } 
      })
    }


  //   <form onSubmit={handleSubmit}>
  //   <input
  //     onChange={(event) => handleChange(event)}
  //     placeholder='GitHub username'
  //     value={editStudent.github_name}
  //   />
  //   <input type='submit' value='Update Student' />
  // </form>
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