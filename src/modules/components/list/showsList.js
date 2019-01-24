import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Card from '../card/card';
import LoaderComponent from '../../../core/shared/components/loader.component';

const styles = {
    movieColumn: {
        marginBottom: 20,
    }
}
const ShowsList = ({movies, isLoading}) => {
    const movieColumns = movies ? movies.map((movie,index) => (
        index < 10 ? <Col style={styles.movieColumn} key={movie.id} xs={18} sm={6} md={4} lg={4}>
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

export default ShowsList;
