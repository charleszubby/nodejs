import http from "http";

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello Node!!!!</h1>");
  })
  .listen(3000);

console.log("server running at port 3000");
