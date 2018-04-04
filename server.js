var express = require('express');
var mongojs = require('mongojs');
var logger = require('morgan');
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');

var PORT = process.env.PORT || 3001;
var app = express();

app.use(logger('dev'));
app.use(bodyParser());

var databaseUrl = process.env.MONGODB_URI || 'nytreact';
var collections = ['articles'];

var db = mongojs(databaseUrl, collections);

db.on('error', function (error) {
    console.log('Database Error:', error);
});

app.get('/articles', function (req, res) {
    db.articles.find({
        'saved': true
    }, function (error, articles) {
        res.json(articles);
    });
});

app.post('/articles', function (req, res) {
    var url = req.body.url;
    var headline = req.body.headline;
    var snippet = req.body.snippet;
    var date = req.body.date;
    var byline = req.body.byline;
    var type = req.body.type;

    db.articles.insertOne({
        headline: headline,
        byline: byline,
        date: date,
        snippet: snippet,
        type: type,
        url: url
    }, function (error, savedArticle) {
        res.json(savedArticle);
    });
});

app.delete('/articles', function (req, res) {
    var id = req.body.id;

    db.articles.remove({
        "_id": mongojs.ObjectID(id)
    }, function (error, removed) {
        if (error) {
            res.send(error);
        } else {
            res.json(id);
        }
    });
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './nytreact/public/index.html'));
});

app.listen(PORT, function () {
    console.log('Now listening on PORT %s!', PORT, PORT);
});