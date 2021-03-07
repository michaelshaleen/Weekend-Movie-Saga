import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, Link} from 'react-router-dom';




function ThisMovie({movie}) {
 // const[thisMovie, setThisMovie] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();


  
  
  const imageClicked = () => {
    console.log(movie,"MOVIE")
    dispatch({
      type: 'THIS_MOVIE',
      payload:  movie
    })
    history.push('/details')
    
  }
  
 

  return(
     <div key={movie.id} >
        <h3>{movie.title}</h3>
          <img src={movie.poster}
              alt={movie.title}
              onClick={imageClicked}
              />

     </div>
  )
}

export default ThisMovie;