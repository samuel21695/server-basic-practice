const http = require('node:http');
const fs = require('fs');

http.createServer(function(request, response) {
  let writeHeadObject = {
    'Content-Type': 'text/html'
  }
  response.writeHead(200, writeHeadObject)
})