import {useHistory, Link} from 'react-router-dom';


function AddMovie() {
  const history = useHistory();


  const cancelBtn = () => {
    console.log("cancel button")
    history.push("/");
  }

  const saveBtn = () => {
    console.log("save button")
    history.push("/");
    // which should update the title and 
    // description in the database and bring 
    // the user to the Home/List Page (which now 
    //   has the new movie)

  }

  return(
    <>
    <h2>Add Movie</h2>
    <Link to="/">Movie List</Link>
    <input
    type="text"
    placeholder="Title"
    />
    <input
    type="text"
    placeholder="Image URL"
    />
    <input
    type="text"
    placeholder="description"
    />
    <select name="Genres" id="genres">
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