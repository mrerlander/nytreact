import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from '../components/searchForm';
import SearchResults from '../components/searchResults';
import {Col, Card, Row} from 'react-materialize';

class Home extends Component {

constructor() {
    super();
    this.state = {
        topic: "",
        startDate: "",
        endDate: "",
        dbArticles: [],
        articles: []
    }
};

componentDidMount(){
    this.getDBArticles();
}

searchArticles = (topic, startDate, endDate) => {
    const key = process.env.REACT_APP_NYT_KEY;
    API.getArticles(topic, startDate, endDate, key)
    .then(res => this.setState({articles: res.data.response.docs}))
    .catch(err => console.log(err));
};

handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
};

handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.topic, this.state.startDate, this.state.endDate);
};

handleSave = event => {
    const article = {
        headline: event.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent,
        byline: event.target.parentElement.parentElement.firstElementChild.children[1].firstElementChild.firstElementChild.textContent,
        date: event.target.parentElement.parentElement.firstElementChild.children[1].firstElementChild.children[1].textContent,
        type: event.target.parentElement.parentElement.firstElementChild.children[1].firstElementChild.children[2].textContent,
        snippet: event.target.parentElement.parentElement.firstElementChild.children[1].children[1].textContent,
        url: event.target.parentElement.firstElementChild.href
    };

    const e = event.target;
    
    API.saveArticle(article)
    .then(e.setAttribute('disabled', 'disabled')
    );
}

getDBArticles = () => {
    API.getDBArticles()
    .then(res => this.setState({'dbArticles': res.data}));
}

findSavedArticles = event => {

}

render(){
    return (
        <div>
            <Row>
                <Col s={10} offset='s1'>
                    <Card className='grey darken-1' textClassName='white-text' title='Search For Articles'>
                        <SearchForm
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        /> 
                    </Card>
                </Col>
            </Row>
            <Row>
                {this.state.articles.map((article, i) => <SearchResults key={i} saved={(this.state.dbArticles.includes(article.web_url)) ? true : false} headline={article.headline.main} href={article.web_url} byline={article.byline.original} date={article.pub_date} type={article.type_of_material} snippet={article.snippet} handleSave={this.handleSave}/>)}
            </Row>
        </div>
    )
}

};

export default Home;