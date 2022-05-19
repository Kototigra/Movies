import React from 'react'

export default function Movie({movie}) {
  return (
    <div className="movie">
      <img src={movie.medium_cover_image}></img>
      <p>{movie.title_long}</p>
      <p>{movie.rating}</p>
      {movie.genres.map((el, index) => <p key={index}>{el}</p>)}
    </div>
  )
}
