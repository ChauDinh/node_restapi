// A callback is a function, passed as an argument to an asynchronous function, that describes what to do after the asynchronous operation has completed. Callbacks are used friendly in Node development, more so than event emitters, and they're simple to use.

// A callback demonstration
/**
 * Pulls the title of recent posts stored as a JSON file asynchronously
 * Pulls a basic HTML template asynchrounously
 * Assembles an HTML page containing the titles
 * Sends the HTML page to the users
 */

// Reduce nesting by creating intermediary functions

// let http = require("http");
// let fs = require("fs");

// let server = http.createServer(function(req, res) {
//  getTitles(res);
// }).listen(8080, "127.0.0.1", () => console.log("the server is listening on..."));

// function getTitles(res) {
//  fs.readFile("./titles.json", function(err, data) {
//   if (err) {
//    console.error(err);
//   } else {
//    getTemplate(JSON.parse(data.toString()), res);
//   }
//  })
// }

// function getTemplate(titles, res) {
//  fs.readFile("./template.html", function(err, data) {
//   if (err) {
//    hadError(err, data);
//   } else {
//    formatHtml(titles, data.toString(), res);
//   }
//  })
// }

// function formatHtml(titles, tmpl, res) {
//  let html = tmpl.replace('%', titles.join('</li><li>'));
//  res.writeHead(200, { 'Content-Type': 'text/html' });
//  res.end(html);
// }

// function hadError(err, res) {
//  console.error(err);
//  res.end('Server Error');
// }

// We can also reduce nesting by returning early from a function. 

let http = require("http");
let fs = require("fs");

let server = http.createServer(function(req, res) {
 getTitles(res);
}).listen(8080, "127.0.0.1", () => console.log("The server is listening on port 8080"));

function getTitles(res) {
 fs.readFile("./titles.json", function(err, data) {
  if (err) return hadError(err, res)
  getTemplate(JSON.parse(data.toString()), res);
 })
}

function getTemplate(titles, res) {
 fs.readFile("./template.html", function(err, data) {
  if (err) return hadError(err, res)
  formatHtml(titles, data.toString(), res);
 })
}

function formatHtml(titles, tmpl, res) {
 let html = tmpl.replace('%', titles.join('</li><li>'));
 res.writeHead(200, { 'Content-Type': 'text/html' });
 res.end(html);
}

function hadError(err, res) {
 console.error(err);
 res.end('Server Error');
}