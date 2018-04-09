import React from 'react';
import {Row, Input, Button, Modal} from 'react-materialize';  

const CommentModal = props => (
    <div>
        <Button 
            onClick={() => props.modalOpen(props.id)} 
        >
            Add Note
        </Button>
        <Modal 
            header={props.headline}
            id={`modal${props.id}`}
        >
            <Row>
                <Input 
                    data-id={`comment${props.id}`}
                    s={12} 
                    label="Note"
                    value={props.comment}
                />
                <Button 
                    id={props.id} 
                    onClick={props.saveComment}>
                    Save Note
                </Button>
            </Row>
        </Modal>
    </div>
);

export default CommentModal;