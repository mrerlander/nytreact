import axios from 'axios';

const key = process.env.REACT_APP_NYT_KEY;

const GetArticles = (subject, startDate, endDate) => axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${subject}&begin-date=${startDate}0101&endDate=${endDate}1231&api-key=${key}`);

// response.docs[i].web_url, snippet, headline.main, pub_date, byline.original, type_of_material

export default GetArticles;