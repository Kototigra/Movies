import React from 'react'

export default function Pagination({moviesPerPage, allMovies, paginate}) {

  const pageNumbers = []

  for (let index = 1; index <= Math.ceil(allMovies/moviesPerPage); index++) {
    pageNumbers.push(index)    
  }

  return (
    <div>
      {pageNumbers.map(number => (<a href='#' key={number} onClick={() => {paginate(number)}}>{number}</a>))}
    </div>
  )
}
