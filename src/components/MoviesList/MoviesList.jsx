import React from 'react'
import Movie from '../Movie/Movie'

export default function MoviesList({movies}) {
  return (
    <div className="movies-list">
      {movies.map((el, index) => <Movie movie={el} key={index}/>)}        
      </div> 
  )
}

