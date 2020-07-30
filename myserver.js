const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World");
  res.end("\n");
});

server.listen(8000, () => {
  console.log("Server listening on port 8000");
});
