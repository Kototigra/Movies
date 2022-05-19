import React, {useState} from 'react'
import Form from '../Form/Form'

export default function Movie({movie}) { 
  const genres = movie.genres.slice(0,2)

  return (
    <div className="movie">
      <img src={movie.medium_cover_image} className="movie__img" alt={movie.title}></img>
      <div className="movie__info">
        <p className="movie__title">{movie.title_long}</p>
        <p className="movie__rating" style={movie.rating >=7? {backgroundColor :'green'}: movie.rating < 6 ? {backgroundColor :'red'} : {backgroundColor :'grey'}}>{movie.rating}</p>
        {genres.map((el, index) => <p className="movie__genre" key={index}>{el}</p>)}
        <br/>
        <Form/>        
      </div>
    </div>
  )
}
