import React from 'react'
import { useDispatch} from "react-redux";
import {THUNK_getMoviesList} from '../../redux/actions/movies.action'

export default function Header() {
  const dispatch = useDispatch()
  
  const findMovies = (e) => {
    e.preventDefault()
    dispatch(THUNK_getMoviesList())
  }
  return (
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
  )
}

