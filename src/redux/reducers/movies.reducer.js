import {GET_MOVIES_LIST} from '../types/movies.types'


export const moviesReducer = (state = [], action) => {

  switch (action.type) {

      case GET_MOVIES_LIST: {
          return action.payload
      }

      default: {
          return state
      }
  }
}


