import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import * as movieActions from '../../core/actions/movie-browser.actions';
import * as movieHelpers from '../../core/helpers/movie-browser.helpers';
import MoviesList from './list/moviesList';
import * as scrollHelpers from '../../core/helpers/scroll.helpers';
import MovieModal from '../../core/modal/movie-modal.container';
import ShowsList from "./list/showsList";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      currentMovies: [],
      currentTab: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getTopMovies(this.state.currentPage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const {topMovies} = this.props;
    if (!topMovies.isLoading) {
      let percentageScrolled = scrollHelpers.getPercentageScrolledDown(window);
      if (percentageScrolled > .8) {
        const nextPage = this.state.currentPage + 1;
        this.props.getTopMovies(nextPage);
        this.setState({currentPage: nextPage});
      }
    }
  }


  render() {
    const {topMovies} = this.props;
    const movies = movieHelpers.getMoviesList(topMovies.response);
    const shows = movieHelpers.getMoviesList(topMovies.response);

    return (
      <div>
        <Grid>
          <Row>
            {this.state.currentTab === true ? <MoviesList movies={movies} isLoading={topMovies.isLoading} />
            :
                <ShowsList movies={shows} isLoading={topMovies.isLoading}/> }
          </Row>
        </Grid>
        <MovieModal />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    topMovies: state.movieBrowser.topMovies
  }),
  { ...movieActions }
)(Main);
