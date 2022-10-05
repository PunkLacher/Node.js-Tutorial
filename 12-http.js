//HTTP module

const http = require("http");

//req, and res are arbitary parameters but stand for request and response
//response is the response objecty sent by the browser that has a ton of info in it
//you can console log the response to see all the object properties it carries,
//one of which is the url (endpoint) the user is reuqetsing

// const server = http.createServer((req,res) => {
//     res.write('Welcome to our home page')
//     res.end()

// })
// server.listen(5000)

//example http server with page routing, if request = 'somwthing', then response should be 'somthing', else '404 message'
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
        <h1>Opps!</h1>
        <p>We cant find the page you are looking for</p>
        <a href="/">Back home</a>
        `)
});

server.listen(5000);