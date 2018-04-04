import React from 'react';
import {Row, Input, Button} from 'react-materialize';
import {Link} from 'react-router-dom';

const SearchForm = props => (

    <form id="songForm" onSubmit={props.handleFormSubmit}>
        <Row>
            <Input onChange={props.handleInputChange} placeholder='Choose Topic' s={12} name='topic' label='Topic' />
            <Input onChange={props.handleInputChange} placeholder='Start Year (Optional)' s={12} name='startDate' label='Start (YYYY)' />
            <Input onChange={props.handleInputChange} placeholder='End Year (Optional)' s={12} name='endDate' label='End (YYYY)'  />
            <Button type='submit' waves='light'>Search</Button>
            <Button waves='light' className='right'>
                <Link to='/saved' className='white-text'>Saved Articles</Link>
            </Button>
        </Row>
    </form>
)

export default SearchForm;