function CheapBotskyPoster() {
  this.socialBackend = "abstract";
}

CheapBotskyPoster.prototype.authenticate = function(details) {
  console.log('CheapBotskyPoster would have logged in.');
  console.debug(details);
  throw "NotImplemented";
}

CheapBotskyPoster.prototype.post = function(message) {
  console.log('CheapBotskyPoster would have posted a message.');
  console.debug(message);
  throw "NotImplemented";
}
