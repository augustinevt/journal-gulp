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
