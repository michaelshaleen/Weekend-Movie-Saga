import {useSelector} from 'react-redux'
import {useHistory, Link} from 'react-router-dom';


function Details() {
  const history = useHistory();



  
  const movieDetails = useSelector(store => store);
  console.log(movieDetails);

  //a get request to DB
  // store data in Redux
  //do we add Dispatch?

  return(
    <>
    <h2>Details Page</h2>
    <button onClick={() => history.push('/')}>Back to List</button>


</>
  )



};

export default Details;



{/* <>
<h2>Details Page</h2>
//<Link to="/">Movie List</Link>

// <ul>
//    {movieDetails.map((movies, id) => 
//       <li key={id}>{movies.title} by {movies.description}</li>  
//     )}
// </ul>
//<img src={movieDetails.poster}/>
) */}