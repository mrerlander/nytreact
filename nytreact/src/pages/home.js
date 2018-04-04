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
        articles: []
    }
};

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
                <SearchResults articles={this.state.articles} />
            </Row>
        </div>
    )
}

};

export default Home;