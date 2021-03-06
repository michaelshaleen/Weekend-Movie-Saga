function AddMovie() {

  return(
    <>
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
    </>

  )
}


<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>