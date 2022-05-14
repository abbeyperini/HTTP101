import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NYTMovies() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    axios.get('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=batman&api-key=YOUR_API_KEY').then((response) => {
  
    let counter = -1;
    
    setReviews(response.data.results.map((review) => {
      counter++

      return (
        <li key={counter}>
          <h2><a href="https://www.nytimes.com/2022/03/01/movies/the-batman-review.html">{review.display_title}</a></h2>
          <p>{review.summary_short}</p>
        </li>
      )
      }))
    })

  }, [])



  return (
    <div>{reviews}</div>
  )

}

export default NYTMovies;