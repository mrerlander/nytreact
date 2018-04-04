import React from 'react';
import {Col, Card} from 'react-materialize';

const Header = () => (
    <Col s={12}>
        <Card className='blue-grey darken-1 center' textClassName='white-text' title='New York Times Article Scraper'>
        Search, Save, and Annotate Articles From The New York Times
        </Card>
    </Col>
);

export default Header;