import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
const axios = require('axios');




function ThisMovie({movie}) {
  const dispatch = useDispatch();
  const history = useHistory();

  //dispatch when img is clicked
  // and bring user to details page
  const imageClicked = () => {
    console.log(movie,"MOVIE")
    dispatch({
      type: 'THIS_MOVIE',
      payload:  movie
    })
    grabGenre();
    history.push('/details')
  }
  

  const grabGenre = () => {
    dispatch({
      type: 'FETCH_GENRES',
      payload: movie
    })
  }
 

  return(
    // show these values of the object movie
    <div className="OneCard">
      <div key={movie.id} >
       <u><h3>{movie.title}</h3></u>
          <img src={movie.poster}
              alt={movie.title}
              onClick={imageClicked}
              />
       </div>
     </div>
  )
}

export default ThisMovie;
{/* <div class="w3-card-4">
  <img src="img_snowtops.jpg" alt="Alps">
  <div class="w3-container w3-center">
    <p>The Italian / Austrian Alps</p>
  </div>
</div> */}