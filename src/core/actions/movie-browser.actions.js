import {createAsyncActionCreator} from '../helpers/redux.helpers';
import * as movieService from '../services/movie-browser.service';

export const keys = {
  'GET_TOP_MOVIES': 'GET_TOP_MOVIES',
  'SEARCH_MOVIES': 'SEARCH_MOVIES',
  'GET_MOVIE_DETAILS': 'GET_MOVIE_DETAILS',
  'GET_TOP_SHOWS': 'GET_TOP_SHOWS',
  'SEARCH_SHOWS': 'SEARCH_SHOWS',
  'GET_SHOW_DETAILS': 'GET_SHOW_DETAILS',
};

export const getTopMovies = (page) => createAsyncActionCreator(
  keys.GET_TOP_MOVIES,
  movieService.getTopMovies,
  {page}
);

export const searchMovies = (query, page) => createAsyncActionCreator(
  keys.SEARCH_MOVIES,
  movieService.searchMovies, 
  {query, page}
);

export const getMovieDetails = (movieId) => createAsyncActionCreator(
  keys.GET_MOVIE_DETAILS,
  movieService.getMovieDetails, 
  {movieId}
);
export const getTopShows = (page) => createAsyncActionCreator(
  keys.GET_TOP_SHOWS,
  movieService.getTopShows,
  {page}
);

export const searchShows = (query, page) => createAsyncActionCreator(
  keys.SEARCH_SHOWS,
  movieService.searchShows,
  {query, page}
);

export const getShowDetails = (movieId) => createAsyncActionCreator(
  keys.GET_SHOW_DETAILS,
  movieService.getShowDetails,
  {movieId}
);
