import React from 'react';
import {Card, Col, Button} from 'react-materialize';

const SearchResults = props => (
    <Col s={10} offset='s1'>
        <Card className='blue-grey darken-1 center' textClassName='white-text' title={props.headline} actions={[<a target='_blank' href={props.href}>Article Link</a>, <Button disabled={(props.saved === true) ? 'disabled' : false} onClick={props.handleSave}>Save Article</Button>]}>
            <p><strong>{props.byline}</strong> | <span>{props.date}</span> | <span>{props.type}</span></p>
            <h6>{props.snippet}</h6>
        </Card> 
    </Col>    
);

export default SearchResults;