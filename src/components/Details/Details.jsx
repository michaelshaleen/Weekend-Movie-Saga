import {useSelector} from 'react-redux'
import {useHistory, Link} from 'react-router-dom';


function Details() {

  const history = useHistory();
  //newMovie comes from state in newMovie reducer
  const movieDetails = useSelector(store => store.newMovie);
  const movieGenreDetails = useSelector(store => store.genres[0]);

  console.log(movieDetails, "MOVIE DETAILS");
  console.log(movieGenreDetails, 'GENRES')
  
  
  return(
    <>
      <nav>
        <button onClick={() => history.push('/')}>Back to List</button>
      </nav>
      <h2>Details Page</h2>
      {/* grabs values from object of movieDetails */}
      <div className="Onecard">

        <p>{movieDetails.title}</p>
        <p>{movieDetails.description}</p>
      </div>
        {/* <p>{movieGenreDetails.name}</p> */}

        {/* <p>{movieGenreDetails.map((genre, index) => 
        <p key={index}>{genre}</p> */}

        
   </>
  )
};

export default Details;
