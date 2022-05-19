import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {THUNK_getMoviesList} from '../../redux/actions/movies.action'
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';

export default function Main() {
  
  const movies = useSelector(state => state.movies)

  const [list, setList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesPerPage] = useState(5)
  
  const dispatch = useDispatch()
  
  const findMovies = (e) => {
    e.preventDefault()
    dispatch(THUNK_getMoviesList())
  }

  useEffect(() => {
    setList(movies)
  },[])

  const lastMovieIndex = currentPage * moviesPerPage
  const firstMovieIndex = lastMovieIndex - moviesPerPage
  const currentMovie = movies.slice(firstMovieIndex, lastMovieIndex)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
    <header className="header">    
          <div className="header__text-box">
            <h1 className="headind-primary">
              <span className="headind-primary--text">what movie</span>
              <span className="headind-primary--text sub">should i watch</span>
              <span className="headind-primary--text">tonight?</span>
            </h1>
            <button className="btn btn--animated" onClick={findMovies}>let`s fumble</button>
          </div>
        </header>
    <section className="movies-section">
      <MoviesList movies={currentMovie}/>
      <Pagination moviesPerPage={moviesPerPage} allMovies={movies.length} paginate={paginate}/>
    </section>
    </>
  )
}

