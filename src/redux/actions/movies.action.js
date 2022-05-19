import {GET_MOVIES_LIST} from '../types/movies.types'

export const getMoviesList = (movies) => ({
  type: GET_MOVIES_LIST,
  payload: movies
})


export const THUNK_getMoviesList = () => async (dispatch) => {
  let randomPageNumber = Math.ceil(Math.random() * 2000)
  console.log(randomPageNumber)
  const response = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=15&page=${randomPageNumber}`)
  if (response.status === 200) {
    const moviesInfo = await response.json()
    const movies = moviesInfo.data.movies
    dispatch(getMoviesList(movies))
  }
}
