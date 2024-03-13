const http = require("http");
const fs = require("fs");

// declare writable global variables:
let html;
let css;
let js;

// use fs.readFile to assign the global variables above:
fs.readFile("./index.html", function (err, data) {
  if (err) {
    console.log("html");
    throw err;
  }
  html = data;
});
fs.readFile("./src/assets/index.css", function (err, data) {
  if (err) {
    console.log("css");
    throw err;
  }
  css = data;
});
fs.readFile("./src/utils/onClick.js", function (err, data) {
  if (err) {
    console.log("js");
    throw err;
  }
  js = data;
});

//create the server - look to see if the request url contains either CSS or Javascript, and return the appropriate information:
http
  .createServer((req, res) => {
    res.statusCode = 200;
    if (req.url.indexOf(".css") != -1) {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(css);
      res.end();
      return;
    }
    if (req.url.indexOf("index.js") != -1) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(js);
      res.end();
      return;
    }
    res.writeHeader(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  })
  .listen(8080);
