import React from 'react';
import {Card, Col, Button} from 'react-materialize';
import CommentModal from '../commentModal';

const SavedResults = props => (
        <Col s={10} offset='s1'>
            <Card 
                className='blue-grey darken-1 center' 
                textClassName='white-text' 
                title={props.headline} 
                actions={[<Button
                        id={props.id} 
                        className='red right' 
                        onClick={props.handleDelete}>
                        Delete From Saved
                    </Button>, 
                    <Button 
                        className='left yellow black-text' 
                        node='a' 
                        target='_blank' 
                        href={props.href}>
                        Article Link
                    </Button>, 
                    <CommentModal 
                        id={props.id} 
                        comment={props.comment} 
                        saveComment={props.saveComment} 
                        headline={props.headline}/>]}>
                <p><strong>{props.byline}</strong> | <span>{props.date}</span> | <span>{props.type}</span></p>
                <h6>{props.snippet}</h6>
            </Card> 
        </Col>   
);

export default SavedResults;