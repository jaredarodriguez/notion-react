var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notionSchema = new Schema({
    entry: String,
    title: String,
    month: String,
    date: Number,
    year: String,


});

module.exports = mongoose.model('Notion', notionSchema); 