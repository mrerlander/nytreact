import React, { Component } from "react";
import API from "../utils/API";
import SavedResults from '../components/savedResults';
import {Row, Col, CardPanel} from 'react-materialize';
import Head from '../components/header';

class Saved extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        }
    };

    componentDidMount(){
        API.getSavedArticles()
        .then(res => this.setState({articles: res.data}));
    }

   saveComment = event => {
       event.preventDefault();
       const comment = event.target.previousElementSibling.firstElementChild.value;
       const id = event.target.id;
       
       API.saveComment(id, comment);
   }

   handleDelete = event => {
       event.preventDefault();
       
       const id = event.target.id;
       API.deleteArticle(id)
       .then(API.getSavedArticles()
       .then(res => this.setState({articles: res.data}))
        )
   }

    render(){
        return (
            <div>
            <Head />
            <Row>
            {(this.state.articles.length > 0) ? this.state.articles.map((article, i) => <SavedResults 
                    key={i} 
                    headline={article.headline} 
                    href={article.url} 
                    byline={article.byline} 
                    date={article.date} 
                    type={article.type} 
                    snippet={article.snippet} 
                    comment={article.comment} 
                    id={article._id} 
                    saveComment={this.saveComment} 
                    handleDelete={this.handleDelete}
                    />) :  <Col 
                            s={10} 
                            offset='s1'
                           >
                            <CardPanel 
                                className="center teal lighten-1 black-text">
                                <span>No articles to display</span>
                            </CardPanel>
                           </Col>  
        }  
            </Row>
            </div>
        )
    }
}

export default Saved;