import React from 'react';
import {Row, Input, Button, Modal} from 'react-materialize';

const CommentModal = props => (
    <Modal 
        header={props.headline} 
        trigger={<Button className='teal center'>Add Note</Button>}>
            <Row>
                <Input 
                    s={12} 
                    label="Comment" 
                    defaultValue={props.comment}
                />
                <Button 
                    id={props.id} 
                    onClick={props.saveComment}>
                    Save Comment
                </Button>
            </Row>
        </Modal>
);

export default CommentModal;