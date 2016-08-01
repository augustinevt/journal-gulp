(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(title, body) {
  this.title = title;
  this.body = body;
  var today = new Date();
  this.date = today.getMonth() + " " + today.getDate() + ", " + today.getFullYear();
}

Journal.prototype.teaser = function() {
  return truncText = this.body.slice(0,50).concat('...');
}

exports.journal = Journal;

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').journal;



$(document).ready(function() {
  var allEntries = [];
  $('#journalEntry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Journal(title, body);
    $('#entries').empty();
    allEntries.push(newEntry);
    allEntries.forEach(function(entry) {
      $('#entries').append("<div class='.entry'><h1>" + entry.title + "</h1><h2>" + entry.date + "</h2><h3 class='teaser'>" + entry.teaser() + "</h3><p class='body'>" + entry.body + "</p></div>");
    });

  });


});

},{"./../js/journal.js":1}]},{},[2]);
