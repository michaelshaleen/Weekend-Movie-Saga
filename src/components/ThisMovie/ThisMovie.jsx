import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
const axios = require('axios');




function ThisMovie({movie}) {
  const dispatch = useDispatch();
  const history = useHistory();

  //dispatch when img is clicked
  //connects with newMovie reducer
  // and bring user to details page
  const imageClicked = () => {
    console.log(movie,"MOVIE")
    dispatch({
      type: 'THIS_MOVIE',
      payload: movie
    })
    grabGenre();
  }
  
  const grabGenre = () => {
    dispatch({
      type: 'FETCH_GENRES',
      payload: movie.id
    })
    history.push('/details')
  }
 

  return(
    // show these values of the object movie
      <div key={movie.id} >
       <u><h3>{movie.title}</h3></u>
          <img src={movie.poster}
              alt={movie.title}
              onClick={imageClicked}
              />
     </div>
  )
}

export default ThisMovie;
