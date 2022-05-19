import React from 'react'

export default function Pagination({moviesPerPage, allMovies, paginate}) {

  const pageNumbers = []

  for (let index = 1; index <= Math.ceil(allMovies/moviesPerPage); index++) {
    pageNumbers.push(index)    
  }

  return (
    <div className='pagination'>
      {pageNumbers.map(number => (<a href='#movies-list' className='page' key={number} onClick={() => {paginate(number)}}>{number}</a>))}
    </div>
  )
}
