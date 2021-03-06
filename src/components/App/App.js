import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      
      <Router>        
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/">Add Movie</Link>




        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/add_Movie" exact>
          <AddMovie />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
