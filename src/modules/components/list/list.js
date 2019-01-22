import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Card from '../card/card';
import LoaderComponent from '../../../core/shared/components/loader.component';

const styles = {
  movieColumn: {
    marginBottom: 20
  }
}
const List = ({movies, isLoading}) => {
  const movieColumns = movies ? movies.map((movie,index) => (
      index < 10 ? <Col style={styles.movieColumn} key={movie.id} xs={24} sm={8} md={6} lg={6}>
        <Card movie={movie}/>
      </Col> : null
 )) : null;
  
  return (
    <Row>
      {movieColumns}
      <LoaderComponent isLoading={isLoading} />
    </Row>
  );
}

export default List;
