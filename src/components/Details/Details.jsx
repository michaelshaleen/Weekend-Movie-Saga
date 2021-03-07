import {useSelector} from 'react-redux'
import {useHistory, Link} from 'react-router-dom';


function Details() {

  const history = useHistory();
  //newMovie comes from state in newMovie reducer
  const movieDetails = useSelector(store => store.newMovie);
  const movieGenreDetails = useSelector(store => store.genres);

  console.log(movieDetails, "MOVIE DETAILS");
  console.log(movieGenreDetails, ' IN DETAILS GENRES')
  
  
  return(
    <>
      <nav>
        <button onClick={() => history.push('/')}>Back to List</button>
      </nav>
      <h2>Details Page</h2>
      {/* grabs values from object of movieDetails */}

        <p>{movieDetails.title}</p>
        <p>{movieDetails.description}</p>
           {movieGenreDetails.map(genre => {
             return (
               <p>{genre.name}</p>
               )
              }
          )} 
   </>
  )
};

export default Details;
