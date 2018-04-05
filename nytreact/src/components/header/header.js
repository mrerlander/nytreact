import React from 'react';
import {Col, Card} from 'react-materialize';

const Head = props => (
    <Col s={12}>
        <Card 
            className='blue-grey darken-1 center' 
            textClassName='white-text' 
            title='New York Times Article Search' 
            actions={[<a href='/'>Home</a>]}>
            Search, Save, and Annotate Articles From The New York Times
        </Card>
    </Col>
);

export default Head;