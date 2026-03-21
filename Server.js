let http = require("http");
let url = require("url");
let fs = require("fs");

let fileName 
http
  .createServer(function (req, res) {
    switch (req.url) {
      case "/":
        fileName = './index.html'
        break;

      case "/about":
        fileName = './about.html'
        break;

      case "/contactme" :
        fileName = './contactme.html'
        break;


      default :
      fileName = './404.html'

    }

    fs.readFile(fileName, "utf8", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(8080);
