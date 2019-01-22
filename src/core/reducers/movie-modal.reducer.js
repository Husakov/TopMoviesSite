import { keys } from '../actions/movie-modal.actions';
import { createReducer } from '../helpers/redux.helpers';

const movieModalReducer = createReducer({ isOpen: false, movieId: undefined }, {
  [keys.OPEN_MOVIE_MODAL]: (state, action) => ({
    isOpen: true,
    movieId: action.movieId
  }),
  [keys.CLOSE_MOVIE_MODAL]: (state, action) => ({
    ...state,
    isOpen: false
  })
});

export default movieModalReducer;
