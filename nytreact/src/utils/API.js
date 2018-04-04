import axios from 'axios';

export default {
    getArticles: function (topic, startDate, endDate, key) {
        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&begin-date=${startDate}0101&endDate=${endDate}1231&api-key=${key}`);
    }
};

// response.docs[i].web_url, snippet, headline.main, pub_date, byline.original, type_of_material