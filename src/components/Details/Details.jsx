import {useSelector} from 'react-redux'
import {useHistory, Link} from 'react-router-dom';


function Details() {

  const history = useHistory();
  const movieDetails = useSelector(store => store.movies);
  console.log(movieDetails, "LOOK HERE HOE");
  
  //a get request to DB
  // store data in Redux
  //do we add Dispatch?
  
  return(
    <>
      <nav>
        <button onClick={() => history.push('/')}>Back to List</button>
      </nav>
      <h2>Details Page</h2>
      
      {movieDetails.map((movies, id) => {
        return(
          <div key={movies.id}>
          <h3>{movies.title}</h3>
          by {movies.description}
        </div>  
        )
        })}
       </>

  )
    
};

export default Details;
{/* <>
//<Link to="/">Movie List</Link>

// <ul>
//    {movieDetails.map((movies, id) => 
//       <li key={id}>{movies.title} by {movies.description}</li>  
//     )}
// </ul>
//<img src={movieDetails.poster}/>
) */}

// <form onClick={imageClick}>
// <section className="movies">
//     {movies.map(movie => {
//       return (
//         <div key={movie.id} >
//                 <h3>{movie.title}</h3>
//                 <img src={movie.poster} alt={movie.title}/>
//             </div>
//         );
//       })}
// </section>
// </form>