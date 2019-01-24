import {combineReducers} from 'redux';
import { createReducer, createAsyncReducer } from '../helpers/redux.helpers';
import { keys as movieActionKeys } from '../actions/movie-browser.actions';
import movieModalReducer from './movie-modal.reducer';


const moviesSuccessReducer = (state, action) => {
  const existingMovies = state.response ? state.response.results : [];
  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      results: [
        ...existingMovies,
        ...action.response.results
      ]
    }
  };
}

const movieBrowserReducer = combineReducers({
  movieModal: movieModalReducer,
  topMovies: createAsyncReducer(movieActionKeys.GET_TOP_MOVIES, {
    [`${movieActionKeys.GET_TOP_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  movieSearch: createAsyncReducer(movieActionKeys.SEARCH_MOVIES, {
    [`${movieActionKeys.SEARCH_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  movieDetails: createAsyncReducer(movieActionKeys.GET_MOVIE_DETAILS),
  topShows: createAsyncReducer(movieActionKeys.GET_TOP_SHOWS, {
    [`${movieActionKeys.GET_TOP_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  showSearch: createAsyncReducer(movieActionKeys.SEARCH_SHOWS, {
    [`${movieActionKeys.SEARCH_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  showDetails: createAsyncReducer(movieActionKeys.GET_SHOW_DETAILS),
});

export default movieBrowserReducer;
