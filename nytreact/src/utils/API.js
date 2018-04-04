import axios from 'axios';

export default {
    getArticles: function (topic, startDate, endDate, key) {

        const startDateVal = (startDate) ? '&begin-date=' + startDate + '0101' : '';        
        const endDateVal = (endDate) ? '&endDate=' + endDate + '1231' : '';

        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}${startDateVal}${endDateVal}&api-key=${key}`);
    },
    saveArticle: function(article){
        return axios.post('/api/articles', {
            headline: article.headline,
            byline: article.byline,
            date: article.date,
            snippet: article.snippet,
            type: article.type,
            url: article.url
        }).then(res => res.json);
    },
    getDBArticles: function(){
        return axios.get('/api/saved');
    }
};