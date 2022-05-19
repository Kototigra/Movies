import React, {useState} from 'react'
import { useSelector } from "react-redux";
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';

export default function Section() {

  
  const movies = useSelector(state => state.movies)

  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage] = useState(4) 


  const lastMovieIndex = currentPage * moviesPerPage
  const firstMovieIndex = lastMovieIndex - moviesPerPage
  const currentMovie = movies.slice(firstMovieIndex, lastMovieIndex)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <section className="movies-section">
      <MoviesList movies={currentMovie}/>
      <Pagination moviesPerPage={moviesPerPage} allMovies={movies.length} paginate={paginate}/>
    </section>
  )
}
