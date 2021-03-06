import {useSelector} from 'react-redux'


function Details() {
  const movieDetails = useSelector(store => store);
  console.log(movieDetails);

  //a get request to DB
  // store data in Redux
  //do we add Dispatch?

  return(
    <h2>Details Page</h2>
    // <ul>
    //    {movieDetails.map((movies, id) => 
    //       <li key={id}>{movies.title} by {movies.description}</li>  
    //     )}
    // </ul>
  )
}

export default Details;