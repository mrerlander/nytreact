import React, { Component } from "react";
import API from "../utils/API";
import SearchResults from '../components/searchResults';
import {Col, Card, Row} from 'react-materialize';

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

    render(){
        return (
            <Row>
                {this.state.articles.map((article, i) => <SearchResults key={i} saved='true' headline={article.headline} href={article.url} byline={article.byline} date={article.date} type={article.type} snippet={article.snippet} handleSave=''/>)}
            </Row>
        )
    }

}

export default Saved;