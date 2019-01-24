import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import * as movieActions from '../../core/actions/movie-browser.actions';
import * as movieHelpers from '../../core/helpers/movie-browser.helpers';
import MoviesList from './list/moviesList';
import * as scrollHelpers from '../../core/helpers/scroll.helpers';
import MovieModal from '../../core/modal/showModal.container';
import ShowsList from "./list/showsList";

class Main2 extends React.Component {
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
        this.props.getTopShows(this.state.currentPage);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const {topShows} = this.props;
        if (!topShows.isLoading) {
            let percentageScrolled = scrollHelpers.getPercentageScrolledDown(window);
            if (percentageScrolled > .8) {
                const nextPage = this.state.currentPage + 1;
                this.props.getTopShows(nextPage);
                this.setState({currentPage: nextPage});
            }
        }
    }

    render() {
        const {topShows} = this.props;
        const shows = movieHelpers.getMoviesList(topShows.response);

        return (
            <div>
                <Grid>
                    <Row>
                        <p>Search</p>
                    </Row>
                    <Row>
                            <ShowsList movies={shows} isLoading={topShows.isLoading}/>
                    </Row>
                </Grid>
                <MovieModal />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        topShows: state.movieBrowser.topShows
    }),
    { ...movieActions }
)(Main2);
