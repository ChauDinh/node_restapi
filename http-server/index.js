let http = require("http");

let server = http.createServer(function(req, res) {
 // handle request
 res.end("Hello, world");
 // In this case, we've combined two statements into one, particularly: res.write("Hello, world"); res.end();
});

server.listen(3000, () => console.log("The server is listening on port 3000"));

// What actually happened?

/**
 * An HTTP client, like a web browser, initiates an HTTP request
 * Node accepts the connection, and incomming request data is given to the HTTP server
 * The HTTP server parses up to the end of the HTTP headers and then hands control over to the request callback
 * The request callback performs application logic
 * The request is sent back through the HTTP server formatting a proper HTTP response for the client.
 */