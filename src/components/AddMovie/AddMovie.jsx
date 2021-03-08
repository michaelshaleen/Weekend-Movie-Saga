import {useHistory, Link} from 'react-router-dom';
import { takeEvery, put } from 'redux-saga/effects';
import { useDispatch } from 'react-redux';
import {useState} from 'react';


function AddMovie() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newMovieTitle, setMovieTitle] = useState('');
  const [newMovieDescription, setMovieDescription] = useState('');
  const [newMovieUrl, setMovieUrl] = useState('images/');
  //images / does not work as hoped
  const [newMovieGenre, setMovieGenre] = useState('');


  //brings user back to home page
  const cancelBtn = () => {
    console.log("cancel button")
    history.push("/");
  }
  //sends data to redux state
  //caught by rootSaga in index
  const saveBtn = () => {
    console.log("clicked")
    dispatch({
      type: 'SET_MOVIES',
      payload:{
        title: newMovieTitle,
        poster: newMovieUrl,
       description: newMovieDescription,
       genre_id: newMovieGenre
      }
    })
    cancelBtn();
  }

  //what user will see on DOM
  return(
    <>
    <h2>Add Movie</h2>
    <main>
          <input
    type="text"
    placeholder="Title"
    onChange={(event) => setMovieTitle(event.target.value)}
    />
    <br></br>

    <input
    type="text"
    placeholder="Image URL"
    onChange={(event) => setMovieUrl(event.target.value)}
    />
        <br></br>


    <input
    type="text"
    placeholder="description"
    onChange={(event) => setMovieDescription(event.target.value)}
    />
        <br></br>


    <select name="Genres" id="genres"
        onChange={(event) => setMovieGenre(event.target.value)}
        >

      <option value="1">Adventure</option>
      <option value="2">Animated</option>
      <option value="3">Biographical</option>
      <option value="4">Comedy</option>
      <option value="5">Disaster</option>
      <option value="6">Drama</option>
      <option value="7">Epic</option>
      <option value="8">Fantasy</option>
      <option value="9">Musical</option>
      <option value="10">Romantic</option>
      <option value="11">Science Fiction</option>
      <option value="12">Space-Opera</option>
      <option value="13">Superhero</option>
    </select>
    <br></br>

    <button onClick={cancelBtn}>Cancel</button>
    <button onClick={saveBtn}>Save</button>

    </main>


    <div>
      <p>Here we are able to add any movie of your choosing!</p>
      <p>Both the Cancel and Save buttons will bring you to</p>
    </div>
    </>
  )
}

export default AddMovie;