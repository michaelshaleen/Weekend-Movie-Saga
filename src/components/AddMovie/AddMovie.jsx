import {useHistory, Link} from 'react-router-dom';
import { takeEvery, put } from 'redux-saga/effects';
import { useDispatch } from 'react-redux';
import {useState} from 'react';


function AddMovie() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newMovieTitle, setMovieTitle] = useState('');
  const [newMovieDescription, setMovieDescription] = useState('');
  const [newMovieUrl, setMovieUrl] = useState('');
  const [newMovieGenre, setMovieGenre] = useState('');



  const cancelBtn = () => {
    console.log("cancel button")
    history.push("/");
  }

  const saveBtn = () => {
    console.log("clicked")
    dispatch({
      type: 'SET_MOVIES',
      payload:{
        title: newMovieTitle,
        poster: newMovieUrl,
       description: newMovieDescription,
      }
    })
    cancelBtn();
  }

  return(
    <>
    <h2>Add Movie</h2>
    <Link to="/">Movie List</Link>
    <input
    type="text"
    placeholder="Title"
    onChange={(event) => setMovieTitle(event.target.value)}
    />

    <input
    type="text"
    placeholder="Image URL"
    onChange={(event) => setMovieUrl(event.target.value)}
    />

    <input
    type="text"
    placeholder="description"
    onChange={(event) => setMovieDescription(event.target.value)}
    />

    <select name="Genres" id="genres"
        onChange={(event) => setMovieGenre(event.target.value)}
        >
      <option value="Adventure">Adventure</option>
      <option value="Animated">Animated</option>
      <option value="Biographical">Biographical</option>
      <option value="Comedy">Comedy</option>
      <option value="Disaster">Disaster</option>
      <option value="Drama">Drama</option>
      <option value="Epic">Epic</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Musical">Musical</option>
      <option value="Romantic">Romantic</option>
      <option value="Science Fiction">Science Fiction</option>
      <option value="Space-Opera Fiction">Space-Opera</option>
      <option value="Superhero">Superhero</option>
    </select>
    <button onClick={cancelBtn}>Cancel</button>
    <button onClick={saveBtn}>Save</button>

    </>
  )
}

export default AddMovie;