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

