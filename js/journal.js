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
