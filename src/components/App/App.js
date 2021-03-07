import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie'
import Details from '../Details/Details'


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      {/* ROUTEar Declares the what path
      will match with what Component */}
      
      <Router>        
        <Link to="/add_Movie">Add Movie</Link>

        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/details" exact>
          <Details />
        </Route>
        <Route path="/add_Movie" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
