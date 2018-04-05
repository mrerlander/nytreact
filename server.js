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

app.get('/api/articles', function (req, res) {
    db.articles.find({
        'saved': true
    }, function (error, articles) {
        console.log(articles);
        res.json(articles);
    });
});

app.get('/api/savedurls', function(req, res){
    
    db.articles.find({},function(err, docs){

        var urls = docs.map(function(article){
            return article.url;
        });
        res.json(urls);
    });
});

app.get('/api/saved', function(req, res){
    db.articles.find({}, function(err, docs){
        res.json(docs);
    });
});

app.post('/api/articles', function (req, res) {
    var url = req.body.url;
    var headline = req.body.headline;
    var snippet = req.body.snippet;
    var date = req.body.date;
    var byline = req.body.byline;
    var type = req.body.type;

    db.articles.insert({
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

app.put('/api/comment', function (req, res){
    var id = req.body.id;
    var comment = req.body.comment;

    db.articles.findAndModify({
        query: {"_id": mongojs.ObjectID(id)},
        update: {$set: {"comment": comment}},
        new: true
    }, function(err, doc, lastErrorObject){
        res.json(doc);
    });
});

app.delete('/api/articles', function (req, res) {
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