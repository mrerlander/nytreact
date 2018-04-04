import React from 'react';
import {Col, Card} from 'react-materialize';

const SearchResults = props => (
    props.articles.map(article => (
        <Col s={10} offset='s1'>
            <Card className='blue-grey darken-1 center' textClassName='white-text' title={article.headline.main} actions={[<a href={article.web_url}>Article Link</a>, <a href={article.save}>Save Article</a>]}>
            <p><strong>{article.byline.original}</strong> | {article.pub_date} | {article.type_of_material}</p>
            <h6>{article.snippet}</h6>
            </Card>
        </Col>
    ))
);

export default SearchResults;