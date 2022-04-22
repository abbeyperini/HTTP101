import React, { useState } from "react";
import axios from 'axios';

function Ghibli() {
  const [films, setFilms] = useState(null);

  function handleOnClick() {
    axios.get('https://ghibliapi.herokuapp.com/films').then((response) => {
      console.log(response.data)
      setFilms(response.data.map((film) => {
        let altText = `${film.title}'s movie poster'`;
        return (
          <li key={film.id}>
            <h2>{film.title}</h2>
            <h3>{film.original_title}</h3>
            <img alt={altText} src={film.movie_banner}></img>
            <p>{film.description}</p>
          </li>
        )
      }))
    })
  }

  return (
    <div>
      <button onClick={handleOnClick}>Get Ghibli!</button>
      <ul>
        {films}
      </ul>
    </div>
  )

}

export default Ghibli;