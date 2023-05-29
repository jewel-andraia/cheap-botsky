function CheapBotskyPoster() {
  this.socialBackend = "abstract";
}

CheapBotskyPoster.prototype.post = function(message, context) {
  console.log(`CheapBotskyPoster would have posted this:\n ${message}`)
  throw "NotImplemented";
}