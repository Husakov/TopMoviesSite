import React from 'react';
import {connect} from 'react-redux';
import {openMovieModal} from '../../../core/actions/movie-modal.actions';

const styles = {
  card: {
    width: '18rem' ,
  }
};

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false
    };
  }
  
  render() {
    const {movie, openMovieModal} = this.props;

    return (
        <div className="card" style={styles.cardMedia} onClick= {() => openMovieModal(movie.id)}
             onMouseOver={() => this.setState({isMouseOver: true})}
             onMouseLeave={() => this.setState({isMouseOver: false})}>
          <img className="card-img-top" src={movie.poster_path} alt="Card image cap"/>
            <div className="card-body">
              <p className="card-text">{movie.title}</p>
            </div>
        </div>
    );
  }
}

export default connect(
  () => ({}),
  { openMovieModal }
)(Card);
